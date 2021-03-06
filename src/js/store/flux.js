const URL = "https://fortrips.herokuapp.com";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tripList: [],
			travelerInfoCollected: {},
			proInfoCollected: {},
			profile: [],
			detailTrip: {},
			isLogin: false,
			rol: "",
			offerSubmited: {},
			detailOffer: {},
			page: 1
		},

		actions: {
			login: (body, setErrFetch, history, setLoading) => {
				const store = getStore();
				fetch(URL + "login", {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						console.log(res);
						if (res.status == 401) {
							setErrFetch({
								status: true,
								msg: "usuario o contraseña incorrectos"
							});
							setLoading(false);
							return;
						} else if (res.status == 404) {
							setErrFetch({
								status: true,
								msg: "usuario no existe"
							});
							setLoading(false);
							return;
						} else if (res.status == 500) {
							setErrFetch({
								status: true,
								msg: "error interno"
							});
							setLoading(false);
							return;
						}
						return res.json();
					})
					.then(data => {
						localStorage.setItem("token", data.access_token);
						localStorage.setItem("rol", data.rol);
						console.log(data, "data");
						setStore({ isLogin: true, rol: data.rol, tripList: [] });
						getActions().loadingTrips(1);
						setLoading(false);
						history.push("/");
					})
					.catch(err => console.log(err, "error login "));
			},
			registerPro: (pro, props, file) => {
				const store = getStore();
				const {
					user_name,
					email,
					password,
					phone,
					url,
					direction,
					location,
					vat_number,
					social_reason,
					avatar
				} = pro;
				console.log(pro, "pro en registrpro");
				let formData = new FormData();
				formData.append("user_name", user_name);
				formData.append("email", email);
				formData.append("password", password);
				formData.append("phone", phone);
				formData.append("url", url);
				formData.append("direction", direction);
				formData.append("location", location);
				formData.append("vat_number", vat_number);
				formData.append("social_reason", social_reason);
				if (file != undefined) {
					formData.append("avatar", file, file.name);
				}
				fetch(URL + "user/register/pro", {
					method: "POST",
					body: formData,
					headers: {
						//"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						setStore({ proInfoCollected: data });
						setTimeout(() => {
							props.history.push("/login");
						}, 1000);
					})
					.catch(err => {
						console.log(err);
					});
			},
			// perfil pro con sus funcionalidades
			profilPro: () => {
				const token = localStorage.getItem("token");
				console.log(token, "token");
				fetch(URL + "pro", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + token
					}
				})
					.then(res => res.json())
					.then(data => setStore({ proInfoCollected: data }))
					.catch(err => console.log(err, "err"));
			},
			editProProfail: (name, value) => {
				console.log(name, value);
				const store = getStore();
				let pro = store.proInfoCollected;
				pro[name] = value;
				console.log(pro[name], "name pro");
				setStore({ proInfoCollected: pro });
			},
			updateProData: (pro, file) => {
				console.log(file);
				console.log(pro, "PRO");
				const token = localStorage.getItem("token");
				const formdata = new FormData();
				if (file != undefined && file != null) {
					formdata.append("avatar", file, file.name);
				}
				formdata.append("user_name", pro.user_name);
				formdata.append("email", pro.email);
				formdata.append("phone", pro.phone);
				formdata.append("url", pro.url);
				formdata.append("direction", pro.direction);
				formdata.append("location", pro.location);
				formdata.append("vat_number", pro.vat_number);
				formdata.append("social_reason", pro.social_reason);
				console.log(file, "form data");
				fetch(URL + "pro", {
					method: "PUT",
					body: formdata,
					headers: {
						formdata,
						Authorization: "Bearer " + token
					}
				});
			},
			addTrip: async trip => {
				const token = localStorage.getItem("token");
				let newNeedsTrip = ""; //convierto el array needs_trip en string para que lo pueda recoger el backend
				for (let i = 0; i < trip.needs_trip.length; i++) {
					newNeedsTrip += trip.needs_trip[i] + ",";
				}
				trip.needs_trip = newNeedsTrip.slice(0, -1); //quito la última coma
				const response = await fetch(URL + "viaje", {
					method: "POST",
					body: JSON.stringify(trip),
					headers: {
						Authorization: "Bearer " + token, //tengo que hacer espacio despues de Bearer para que pueda funcionar el split
						"Content-Type": "application/json"
					}
				});
				if (response.status == 200) {
					setStore({ page: 1, tripList: [] });
					getActions().loadingTrips(1);
					return true;
				} else return false;
			},
			loadingTrips: page => {
				const store = getStore();
				fetch(URL + "viajes/" + page)
					.then(res => res.json())
					.then(data => {
						const list = page != 1 ? [...store.tripList, ...data.data] : data.data;
						setStore({ tripList: list, page: store.page + 1 });
					})
					.catch(error => console.log(error));
			},
			registeredTraveler: (traveler, props, file) => {
				const store = getStore();
				const { username, email, password, avatar } = traveler;
				let formData = new FormData();
				formData.append("username", username);
				formData.append("email", email);
				formData.append("password", password);
				if (file != undefined) {
					formData.append("avatar", file, file.name);
				}

				fetch(URL + "user/register/traveler", {
					method: "POST",
					body: formData,
					redirect: "follow",
					headers: {
						//"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ travelerInfoCollected: data });
						setTimeout(() => {
							props.history.push("login");
						}, 1000);
					})
					.catch(err => {
						console.log(err);
					});
			},
			getTrip: data => {
				let trip = data ? data : JSON.parse(sessionStorage.getItem("detailTrip"));
				console.log(trip, "@@@@@@@@@@@");
				setStore({ detailTrip: trip });
			},
			saveTrip: trip => {
				console.log(trip, "trip en saveTrip");
				sessionStorage.setItem("detailTrip", JSON.stringify(trip)); //almaceno trip como string en session storage en la posicion de tripDetail
				setStore({ detailTrip: trip });
			},
			// la perfil traverler con su funconalidades
			editTravelerProfil: (name, value) => {
				console.log(name, value);
				const store = getStore();
				let travler = store.travelerInfoCollected;
				travler[name] = value;
				console.log(travler[name], "name traveler");
				setStore({ travelerInfoCollected: travler });
			},
			updateTravelerData: (traveler, file) => {
				console.log(file);
				console.log(traveler, "ttraveler");
				const token = localStorage.getItem("token");
				const formdata = new FormData();
				if (file != undefined && file != null) {
					formdata.append("avatar", file, file.name);
				}

				formdata.append("username", traveler.username);
				formdata.append("email", traveler.email);
				console.log(file, "form data");
				fetch(URL + "traveler", {
					method: "PUT",
					body: formdata,
					headers: {
						formdata,
						Authorization: "Bearer " + token
					}
				});
			},
			profilTraveler: traveler => {
				const token = localStorage.getItem("token");
				fetch(URL + "traveler", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + token
					}
				})
					.then(res => res.json())
					.then(data => setStore({ travelerInfoCollected: data }))
					.catch(err => console.log(err, "err"));
			}, /////////////////////////////////
			logout: () => {
				localStorage.removeItem("token");
				localStorage.removeItem("rol");
				setStore({ isLogin: false });
			},
			sendOffer: async (oferta, props, file) => {
				const store = getStore();
				const token = localStorage.getItem("token");
				console.log(store.detailTrip, "DETAIL TRIP");
				const { text, attached, id_trip, id_offer } = oferta;
				let formData = new FormData();
				formData.append("oferta", text);
				formData.append("email", store.detailTrip.traveler.email);
				if (attached != "" && attached != null && file != undefined) {
					formData.append("attached", file, file.name);
				}
				formData.append("id_trip", id_trip); //lo que está entre "" viene del servidor
				const res = await fetch(URL + "publishoffer", {
					method: "POST",
					body: formData,
					headers: {
						Authorization: "Bearer " + token
					}
				});

				if (res.ok) {
					//Así me devuelve ok si la respuesta es correcta
					const response = await fetch(URL + "viaje/" + id_trip, {
						headers: {
							Authorization: "Bearer " + token
						}
					});
					const data = await response.json();
					console.log(data);
					getActions().getTrip(data);
				}
			},
			getOffer: offer => {
				console.log(offer, "@@@@@@@@@@@");
				setStore({ detailOffer: offer });
				sessionStorage.setItem("detailOffer", JSON.stringify(offer)); //almaceno offer en session storage
			},
			sendComment: async (comentario, props, file) => {
				const store = getStore();
				const token = localStorage.getItem("token");
				console.log(store.detailTrip, "DETAIL TRIP");
				console.log(store.detailOffer, "DETAIL OFFER");
				const { text, attached, id_trip, id_offer } = comentario;
				let formData = new FormData();
				formData.append("comment", text);
				if (attached != "" && attached != null && file != undefined) {
					formData.append("attached", file, file.name);
				}
				formData.append("id_offer", id_offer);
				const res = await fetch(URL + "publishcomment", {
					method: "POST",
					body: formData,
					headers: {
						Authorization: "Bearer " + token
					}
				});

				if (res.ok) {
					//Así me devuelve ok si la respuesta es correcta
					const response = await fetch(URL + "viaje/" + id_trip, {
						headers: {
							Authorization: "Bearer " + token
						}
					});
					const data = await response.json();
					console.log(data);
					getActions().getTrip(data);
				}
			},
			isLoginVerified: () => {
				setStore({ isLogin: true });
			}
		}
	};
};

export default getState;
