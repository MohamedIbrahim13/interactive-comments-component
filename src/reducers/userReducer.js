const initialState = { currentUser: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      // console.log("payload", action.payload);
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...action?.payload })
      );
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
