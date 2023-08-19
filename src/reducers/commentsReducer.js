const initialState = { comments: [] };

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      //console.log("payload", action.payload);
      return { ...state, comments: [...action.payload] };
    case "SEND_COMMENT":
      //console.log("payload", action.payload);
      return { ...state, comments: [...state.comments, action.payload] };
    case "Edit_COMMENT":
      //console.log("payload", action.payload);
      return state;
    case "EDIT_REPLY":
      //console.log("payload", action.payload);
      return {
        ...state,
        comments: state.comments.map(comment => {
          return comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: comment.replies.map(reply => {
                  return reply.id === action.payload.replyId
                    ? action.payload.newValue
                    : reply;
                }),
              }
            : comment;
        }),
      };
    case "SEND_REPLY":
      //console.log("payload", action.payload);
      return {
        ...state,
        comments: state.comments.map(comment => {
          return comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: [...comment.replies, action.payload.reply],
              }
            : comment;
        }),
      };
    case "INC_SCORE":
      //console.log("payload", action.payload);
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload ? action.payload : comment
        ),
      };
    case "DEC_SCORE":
      //console.log("payload", action.payload);
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload ? action.payload : comment
        ),
      };

    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload
        ),
      };
    case "DELETE_REPLY":
      return {
        ...state,
        comments: state.comments.map(comment => {
          return comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: comment.replies?.filter(
                  reply => reply.id !== action.payload.replyId
                ),
              }
            : comment;
        }),
      };
    default:
      return state;
  }
};

export default commentsReducer;
