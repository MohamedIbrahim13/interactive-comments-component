import { useState } from "react";

export default function EditReplyForm({
  reply,
  commentId,
  dispatch,
  editReply,
  currentUser,
  setEdit,
}) {
  const [updatedReply, setUpdatedReply] = useState({
    id: reply.id,
    content: reply.content,
    score: reply.score,
    replyingTo: reply.replyingTo,
    user: currentUser,
  });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editReply(commentId, reply.id, updatedReply));
    setEdit(prev => !prev);
  };
  return (
    <form method="post" className="edit-form" onSubmit={handleSubmit}>
      <textarea
        rows="3"
        placeholder="Add a comment..."
        id="comment"
        name="comment"
        value={updatedReply.content}
        onChange={e =>
          setUpdatedReply({ ...updatedReply, content: e.target.value })
        }
      ></textarea>
      <button type="submit">UPDATE</button>
    </form>
  );
}
