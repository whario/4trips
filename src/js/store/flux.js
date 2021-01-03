const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			userInfoCollected: []
		},
		actions: {
			regisetred: datos => {
				setStore({ userInfoCollected: datos });

			tripList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addTrip: trip => {
				setStore({ tripList: trip });

			}
		}
	};
};

export default getState;
