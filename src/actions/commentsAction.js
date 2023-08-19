import axios from "axios";

export const getComments = () => async dispatch => {
  try {
    const { data } = await axios.get("./data.json");
    dispatch({ type: "GET_DATA", payload: data.comments });
    //console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};

export const sendComment = comment => async dispatch => {
  try {
    dispatch({ type: "SEND_COMMENT", payload: comment });
  } catch (error) {
    console.log(error);
  }
};

export const sendReply = (commentId, reply) => async dispatch => {
  try {
    dispatch({ type: "SEND_REPLY", payload: { commentId, reply } });
    //console.log("id", { commentId, reply });
  } catch (error) {
    console.log(error);
  }
};

export const editComment = (commentId, newValue) => async dispatch => {
  try {
    dispatch({ type: "EDIT_COMMENT", payload: { commentId, newValue } });
    console.log("id", { commentId, newValue });
  } catch (error) {
    console.log(error);
  }
};

export const editReply = (commentId, replyId, newValue) => async dispatch => {
  try {
    dispatch({ type: "EDIT_REPLY", payload: { commentId, replyId, newValue } });
    //console.log("id", { commentId, replyId, newValue });
  } catch (error) {
    console.log(error);
  }
};

export const incScore = (id, score) => async dispatch => {
  try {
    dispatch({ type: "INC_SCORE", payload: { id, score } });
    //console.log("data", id, score);
  } catch (error) {
    console.log(error);
  }
};

export const decScore = (id, score) => async dispatch => {
  try {
    dispatch({ type: "DEC_SCORE", payload: { id, score } });
    //console.log("data", id, score);
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = commentId => async dispatch => {
  try {
    dispatch({ type: "DELETE_COMMENT", payload: commentId });
    console.log("id", commentId);
  } catch (error) {
    console.log(error);
  }
};

export const deleteReply = (commentId, replyId) => async dispatch => {
  try {
    dispatch({ type: "DELETE_REPLY", payload: { commentId, replyId } });
    //console.log("id", { commentId, replyId });
  } catch (error) {
    console.log(error);
  }
};
