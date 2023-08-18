import { useDispatch } from "react-redux";
import { decScore, incScore } from "../actions/commentsAction";

export default function Reply({
  replies,
  deleteReply,
  commentId,
  currentUser,
}) {
  const dispatch = useDispatch();
  //console.log(currentUser);
  return (
    <>
      {replies.map(reply => {
        return (
          <>
            <hr />
            <div className="comment-container replies" key={reply.id}>
              <div className="quantity-field">
                <button
                  className="value-button increase-button"
                  title="Arrtır"
                  onClick={() =>
                    dispatch(incScore(reply.id, (reply.score += 1)))
                  }
                >
                  +
                </button>
                <div className="number">{reply.score}</div>
                <button
                  className="value-button decrease-button"
                  title="Azalt"
                  onClick={() =>
                    dispatch(decScore(reply.id, (reply.score -= 1)))
                  }
                >
                  -
                </button>
              </div>
              <div className="comment">
                <div className="card">
                  <div className="header">
                    <img src={reply.user.image.png} alt={reply.user.username} />
                    <h6>
                      {reply.user.username}{" "}
                      {reply.user.username === currentUser?.username ? (
                        <span className="you">you</span>
                      ) : null}
                      <span>{reply.createdAt}</span>
                    </h6>
                    {reply.user.username === currentUser?.username ? (
                      <button
                        className="delete"
                        onClick={() =>
                          dispatch(deleteReply(commentId, reply.id))
                        }
                      >
                        <img src="/icon-delete.svg" alt="" /> Delete
                      </button>
                    ) : null}
                  </div>

                  <p>
                    <span className="tag">@{reply.replyingTo}</span>{" "}
                    {reply.content}
                  </p>
                </div>
              </div>
              {reply.user.username === currentUser?.username ? (
                <button className="reply">
                  <img src="/icon-edit.svg" alt="" /> Edit
                </button>
              ) : (
                <button className="reply">
                  <img src="/icon-reply.svg" alt="" /> Reply
                </button>
              )}
            </div>
          </>
        );
      })}
    </>
  );
}
