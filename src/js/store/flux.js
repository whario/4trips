const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
