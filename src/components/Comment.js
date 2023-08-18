import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decScore,
  getComments,
  incScore,
  deleteReply,
  deleteComment,
} from "../actions/commentsAction";
import Reply from "./Reply";
import Form from "./Form";

export default function Comment({ currentUser }) {
  const { comments } = useSelector(state => state.comments);
  const dispatch = useDispatch();
  const [clicked, setIsClicked] = useState(false);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  console.log("comments", comments);
  return (
    <>
      {comments &&
        comments.map(comment => {
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
                      {comment.user.username === currentUser?.username ? (
                        <button
                          className="delete"
                          onClick={() => dispatch(deleteComment(comment.id))}
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
              {clicked && <Form />}
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
