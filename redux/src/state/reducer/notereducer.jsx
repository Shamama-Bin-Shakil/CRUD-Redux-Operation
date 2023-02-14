const initalstate = {
  data: [],
};
const noteReducer = (state = initalstate, action) => {
  
  if (action.type === "ADD_NOTE") {
    return {
      ...state,
      data: state.data.concat(action.payload),
    };
  } else if (action.type === "GET_NOTE") {
    return {
      ...state,
      data: action.payload,
    };
  } else if (action.type === "DELETE_NOTE") {
    return {
      ...state,
      data: state.data.filter((element) => {
        return action.payload !== element._id;
      }),
    };
  }

  return state;
};

export default noteReducer;
