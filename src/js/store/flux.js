const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userInfoCollected: []
		},
		actions: {
			SignUp: datos => {
				setStore({ userInfoCollected: datos });
			}
		}
	};
};

export default getState;
