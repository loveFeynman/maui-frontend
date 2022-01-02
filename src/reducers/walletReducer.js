const initialState = {
  walletInfo: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "GET_WALLET_INFO_SUCCESS") {
    return { ...state, walletInfo: action.payload };
  } else return state;
};

export default reducer;
