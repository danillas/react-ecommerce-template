const initialState = {
  category: 0,
  sortBy: "popular",
};

const filters = (state = initialState, action) => {
  if (action.type === "SET_SORT_BY") {
    //Взять старые свойства из state, заменить sortBy на новые значения
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filters;
