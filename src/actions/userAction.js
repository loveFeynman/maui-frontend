import { createAction } from "redux-actions";

export const loginUser = createAction("LOGIN_REQUEST");
export const registerUser = createAction("REGISTER_REQUEST");
export const getUser = createAction("GET_USER");
