export default function CommentModal({
  deleteComment,
  commentId,
  dispatch,
  inputref,
  setOpened,
}) {
  return (
    <dialog ref={inputref}>
      <h1>Delete Comment</h1>
      <p>
        Are you sure you want to delete this comment? this will remove the reply
        and can't ne undone.
      </p>
      <form method="dialog">
        <div className="buttons">
          <button className="no" onClick={() => setOpened(prev => !prev)}>
            NO,CANCEL
          </button>
          <button
            className="yes"
            onClick={() => dispatch(deleteComment(commentId))}
          >
            YES,DELETE
          </button>
        </div>
      </form>
    </dialog>
  );
}
