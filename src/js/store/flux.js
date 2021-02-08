const URL = "https://3000-d6620844-473e-4005-a216-c78a8882d46d.ws-us03.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tripList: [],
			travelerInfoCollected: [],
			proInfoCollected: [],
			profile: []
		},
		actions: {
			registered: (user, props) => {
				fetch(URL + "/user/register/pro", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(data => {
						setTimeout(() => {
							props.history.push("/iniciar/sesion");
						});
					}, 1000)
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
			registeredTraveler: (traveler, props) => {
				fetch(URL + "user/register/traveler", {
					method: "POST",
					body: JSON.stringify(traveler),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(data => {
						setTimeout(() => {
							props.history.push("/iniciar/sesion");
						});
					}, 1000)
					.catch(err => {
						console.log(err);
					});
			}
		}
	};
};

export default getState;
