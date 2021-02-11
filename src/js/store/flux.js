const URL = "https://3000-d6620844-473e-4005-a216-c78a8882d46d.ws-eu03.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tripList: [],
			travelerInfoCollected: {},
			proInfoCollected: {},
			profile: []
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
						console.log(data, "data");
						setStore({ travelerInfoCollected: { ...store, data } });
					})
					.catch(err => console.log(err, "error login "));
			},
			register: (user, props) => {
				fetch(URL + "user/register/pro", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						setTimeout(() => {
							props.history.push("/iniciar/sesion");
						}, 1000);
					})
					.catch(err => {
						console.log(err);
					});
			},
			addTrip: async trip => {
				const token =
					"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImVtYWlsQHRyYXZlbGVyLmNvbSIsInJvbCI6IlRyYXZlbGVyIiwiaWQiOjMsImV4cCI6MTYxMjYxMDEzNn0.yP-RaA7z8wcdt60_VAOrSjF_LyhcDUyDquvNb1NpwK4";
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
				formData.append("avatar", file, file.name);

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
			editTravelerProfil: (name, value) => {
				console.log(name, value);
				const store = getStore();
				let travler = store.travelerInfoCollected;
				travler[name] = value;
				setStore({ travelerInfoCollected: travler });
			}
		}
	};
};

export default getState;
