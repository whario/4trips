const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tripList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addTrip: trip => {
				const tripListCopy = getStore().tripList;
				setStore({ tripList: [...tripListCopy, trip] });
			}
		}
	};
};

export default getState;
