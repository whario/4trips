import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const TravelerProfil = () => {
    const { store, actions } = useContext(Context);
    
	return <div>Hello world</div>;
};
