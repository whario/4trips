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
				let newNeedsTrip = "";
				for (let i = 0; i < trip.needs_trip.length; i++) {
					newNeedsTrip += trip.needs_trip[i] + ",";
				}
				trip.needs_trip = newNeedsTrip.slice(0, -1);
				const response = await fetch(
					"https://3000-da6ab1ae-94da-4aa6-a9e4-f8a865970036.ws-eu03.gitpod.io/viaje",
					{
						method: "POST",
						body: JSON.stringify(trip),
						headers: {
							Authorization:
								"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImVtYWlsQHRyYXZlbGVyLmNvbSIsInJvbCI6IlRyYXZlbGVyIiwiaWQiOjMsImV4cCI6MTYxMjI5MTMyOH0.GSSRhE9MKpCBSe3nhRIyNV-lLdo3j456tAUsjKrnQhw",
							"Content-Type": "application/json"
						}
					}
				);
				if (response.status == 200) return true;
				else return false;
				console.log(response.status);
			},
			loadingTrips: data => {
				setStore({ tripList: data });
			}
		}
	};
};

export default getState;
