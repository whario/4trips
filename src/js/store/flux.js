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
				setStore({ tripList: trip });
			}
		}
	};
};

export default getState;
