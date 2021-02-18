const URL = "https://3000-orange-egret-6bph6z4j.ws-eu03.gitpod.io/";

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
			offerSubmited: {}
		},

		actions: {
			login: body => {
				const store = getStore();
				fetch(URL + "login", {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						localStorage.setItem("token", data.access_token);
						localStorage.setItem("rol", data.rol);
						console.log(data, "data");
						setStore({ isLogin: true, rol: data.rol });
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
				formData.append("avatar", file, file.name);
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
				if (response.status == 200) return true;
				else return false;
			},
			loadingTrips: page => {
				const store = getStore();
				console.log(page, "pagina");
				fetch(URL + "viajes" + "/" + page)
					.then(res => res.json())
					.then(data => setStore({ tripList: [...store.tripList, ...data.data] }))
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
			},

			getTrip: trip => {
				console.log(trip, "@@@@@@@@@@@");
				setStore({ detailTrip: trip });
				sessionStorage.setItem("detailTrip", JSON.stringify(trip)); //almaceno trip como string en session storage en la posicion de tripDetail
			},
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
				if (file != undefined || file != null) {
					formdata.append("avatar", file, file.name);
				}
				formdata.append("username", traveler.username);
				formdata.append("email", traveler.email);
				// fetch(URL+ "traveler",{
				//   method:"PUT",

				//})
			},
			logout: () => {
				localStorage.removeItem("token");
				setStore({ isLogin: false });
			},
			sendOffer: async (oferta, props, file) => {
				const store = getStore();
				const token = localStorage.getItem("token");
				const { text, attached, id_trip } = oferta;
				console.log(attached, "ATTACHED");
				console.log(file, "FILE");
				console.log(oferta, "oferta enviada desde frontend");
				let formData = new FormData();
				formData.append("oferta", text);
				if (attached != "" && attached != null && file != undefined) {
					console.log("ENTRANDO EN IF FLUX SIN ADJUNTO");
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
			}
		}
	};
};

export default getState;
