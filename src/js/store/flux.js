const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tripList: [],
			userInfoCollected: []
		},
		actions: {
			registered: async user => {
				const url = "https://3000-da6ab1ae-94da-4aa6-a9e4-f8a865970036.ws-eu03.gitpod.io/";
				const res = await fetch(url + "user/traveler", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				});
				console.log(await res);
			},
			addTrip: trip => {
				setStore({ tripList: trip });
			}
		}
	};
};

export default getState;
