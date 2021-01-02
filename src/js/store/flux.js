const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userInfoCollected: []
		},
		actions: {
			regisetred: datos => {
				setStore({ userInfoCollected: datos });
			}
		}
	};
};

export default getState;
