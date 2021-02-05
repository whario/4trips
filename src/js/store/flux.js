const URL = "https://3000-da6ab1ae-94da-4aa6-a9e4-f8a865970036.ws-eu03.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tripList: [],
			userInfoCollected: [],
			profile: []
		},
		actions: {
			registered: (user, props) => {
				const url = "https://3000-d6620844-473e-4005-a216-c78a8882d46d.ws-eu03.gitpod.io";
				fetch(url + "/user/register/pro", {
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
				let newNeedsTrip = ""; //convierto el array needs_trip en string para que lo pueda recoger el backend
				for (let i = 0; i < trip.needs_trip.length; i++) {
					newNeedsTrip += trip.needs_trip[i] + ",";
				}
				trip.needs_trip = newNeedsTrip.slice(0, -1); //quito la última coma
				const response = await fetch(URL + "viaje", {
					method: "POST",
					body: JSON.stringify(trip),
					headers: {
						Authorization:
							"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImVtYWlsQHRyYXZlbGVyLmNvbSIsInJvbCI6IlRyYXZlbGVyIiwiaWQiOjMsImV4cCI6MTYxMjQ2NjI4OX0.3S0Iizx3QheepxYGog0YlVrg8gmAJSymSTqQY7yCUWw",
						"Content-Type": "application/json"
					}
				});
				if (response.status == 200) return true;
				else return false;
				console.log(response.status);
			},
			loadingTrips: page => {
				const store = getStore();
				console.log(page, "pagina");
				fetch(URL + "viajes" + "/" + page)
					.then(res => res.json())
					.then(data => setStore({ tripList: [...store.tripList, ...data.data] }))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
