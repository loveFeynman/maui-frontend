const initialState = {
  user: {},
  token: "",
  isAuthenticated: false,
};
const reducer = (state = initialState, action) => {
  if (action.type === "LOGIN_SUCCESS" || action.type === "GET_USER_SUCCESS") {
    localStorage.setItem("idToken", action.payload.token);
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isAuthenticated: true,
    };
  } else if (action.type === "LOGIN_FAILURE") {
    return state;
  } else if (action.type === "LOGOUT") {
    localStorage.removeItem("idToken");
    return {
      ...state,
      isAuthenticated: false,
    };
  } else return state;
};
export default reducer;
