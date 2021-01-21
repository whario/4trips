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
