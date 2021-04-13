const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add/todo":
      return [...state, action.payload];
    case "delete/todo":
      console.log("dfssfshjghjghjutyuut", action.payload);
      return state.filter((ele) => ele.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
