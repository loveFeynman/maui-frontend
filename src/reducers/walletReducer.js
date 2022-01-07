const initialState = {
  walletInfo: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "GET_WALLET_INFO_SUCCESS") {
    return { ...state, walletInfo: action.payload };
  } else if (action.type === "CLEAR_USER") {
    return {
      ...state,
      walletInfo: 0,
    };
  } else return state;
};

export default reducer;
