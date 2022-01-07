const initialState = {
  user: {},
  token: "",
  isAuthenticated: false,
  walletAddress: "",
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
  } else if (action.type === "WALLET_ADDRESS") {
    return {
      ...state,
      walletAddress: action.payload,
    };
  } else if (action.type === "CLEAR_USER") {
    localStorage.removeItem("idToken");
    return {
      ...state,
      user: {},
      token: "",
      isAuthenticated: false,
      walletAddress: "",
    };
  } else return state;
};
export default reducer;
