const initialState = {
  listlabel: "Dashboard",
  isDefault: true,
};
const reducer = (state = initialState, action) => {
  if (action.type === "LIST_CHANGED") {
    return { ...state, listlabel: action.listKey };
  } else if (action.type === "DEV_CHANGED") {
    return { ...state, isDefault: action.dev };
  } else return state;
};
export default reducer;
