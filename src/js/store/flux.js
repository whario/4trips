const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tripList: [],
			userInfoCollected: [],
			profile: []
		},
		actions: {
			profile: datos => {
				const profileCopy = getStore().profile;
				setStore({ profile: datos });
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
