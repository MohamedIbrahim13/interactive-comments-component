import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decScore,
  getComments,
  incScore,
  deleteReply,
  deleteComment,
} from "../actions/commentsAction";
import Reply from "./Reply";
import CommentModal from "./CommentModal";
import ReplyForm from "./ReplyForm";

export default function Comment({ currentUser }) {
  const { comments } = useSelector(state => state.comments);
  const dispatch = useDispatch();
  const [clicked, setIsClicked] = useState(false);
  const [isOpened, setOpened] = useState(false);
  const inputref = useRef(null);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  // const replyForm = commentId => {
  //   if (commentId) {
  //     setIsClicked(prev => !prev);
  //   }
  // };
  useEffect(() => {
    if (isOpened) {
      inputref.current?.showModal();
    } else {
      inputref.current?.close();
    }
  }, [isOpened]);
  console.log("comments", comments);
  return (
    <>
      {comments &&
        comments.map(comment => {
          const displayForm = comment => {
            switch (comment.id) {
              case 1:
                return (
                  <ReplyForm
                    currentUser={currentUser}
                    replyingTo={comment.user.username}
                    commentId={comment.id}
                    setIsClicked={setIsClicked}
                  />
                );
              case 2:
                return (
                  <ReplyForm
                    currentUser={currentUser}
                    replyingTo={comment.user.username}
                    commentId={comment.id}
                    setIsClicked={setIsClicked}
                  />
                );

              default:
                return null;
            }
          };
          return (
            <>
              <div className="comment-container" key={comment.id}>
                <div className="quantity-field">
                  <button
                    className="value-button increase-button"
                    title="Arrtır"
                    onClick={() =>
                      dispatch(incScore(comment.id, (comment.score += 1)))
                    }
                  >
                    +
                  </button>
                  <div className="number">{comment.score}</div>
                  <button
                    className="value-button decrease-button"
                    title="Azalt"
                    onClick={() =>
                      dispatch(decScore(comment.id, (comment.score -= 1)))
                    }
                  >
                    -
                  </button>
                </div>
                <div className="comment">
                  <div className="card">
                    <div className="header">
                      <img
                        src={comment.user.image.png}
                        alt={comment.user.username}
                      />
                      <h6>
                        {comment.user.username}
                        {comment.user.username === currentUser?.username ? (
                          <span className="you">you</span>
                        ) : null}
                        <span>{comment.createdAt}</span>
                      </h6>
                      <CommentModal
                        inputref={inputref}
                        dispatch={dispatch}
                        deleteComment={deleteComment}
                        commentId={comment.id}
                        setOpened={setOpened}
                      />
                      {comment.user.username === currentUser?.username ? (
                        <button
                          className="delete"
                          onClick={() => setOpened(prev => !prev)}
                        >
                          <img src="/icon-delete.svg" alt="" /> Delete
                        </button>
                      ) : null}
                    </div>
                    <p>{comment.content}</p>
                  </div>
                </div>
                <button
                  className="reply"
                  onClick={() => setIsClicked(prev => !prev)}
                >
                  <img src="/icon-reply.svg" alt="" /> Reply
                </button>
              </div>
              {clicked && displayForm(comment)}
              {comment.replies && (
                <Reply
                  replies={comment.replies}
                  deleteReply={deleteReply}
                  commentId={comment.id}
                  currentUser={currentUser}
                />
              )}
            </>
          );
        })}
    </>
  );
}
