import axios from "axios";

export const getCurrUser = () => async dispatch => {
  try {
    const { data } = await axios.get("./data.json");
    dispatch({ type: "SET_USER", payload: data.currentUser });
  } catch (error) {
    console.log(error);
  }
};
