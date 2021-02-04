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
			addTrip: trip => {
				const tripListCopy = getStore().tripList;
				setStore({ tripList: [...tripListCopy, trip] });
			},
			loadingTrips: data => {
				setStore({ tripList: data });
			}
		}
	};
};

export default getState;
