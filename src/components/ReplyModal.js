export default function ReplyModal({
  dispatch,
  deleteReply,
  commentId,
  replyId,
  setOpened,
  inputref,
}) {
  return (
    <dialog ref={inputref}>
      <h1>Delete Reply</h1>
      <p>
        Are you sure you want to delete this reply? this will remove the reply
        and can't ne undone.
      </p>
      <form method="dialog">
        <div className="buttons">
          <button className="no" onClick={() => setOpened(prev => !prev)}>
            NO,CANCEL
          </button>
          <button
            className="yes"
            onClick={() => dispatch(deleteReply(commentId, replyId))}
          >
            YES,DELETE
          </button>
        </div>
      </form>
    </dialog>
  );
}
