const URL = "https://3000-da6ab1ae-94da-4aa6-a9e4-f8a865970036.ws-eu03.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tripList: [],
			userInfoCollected: []
		},
		actions: {
			regisetred: datos => {
				setStore({ userInfoCollected: datos });
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
			loadingTrips: data => {
				fetch(URL + "viajes")
					.then(res => res.json())
					.then(data => setStore({ tripList: data.data }))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
