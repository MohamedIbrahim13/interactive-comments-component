import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendComment } from "../actions/commentsAction";
import { v4 as uuid } from "uuid";
import { formatDistance } from "date-fns";

export default function Form({ currentUser }) {
  const [inputData, setInput] = useState({
    id: uuid(),
    content: "",
    createdAt: formatDistance(Date.now(), new Date(), { addSuffix: true }),
    score: 0,
    user: null,
    replies: [],
  });
  const dispatch = useDispatch();
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(sendComment({ ...inputData, user: currentUser }));
    setInput({
      id: "",
      content: "",
      createdAt: formatDistance(Date.now(), new Date(), { addSuffix: true }),
      score: 0,
      user: null,
      replies: [],
    });
  };

  useEffect(() => {
    if (inputData) setInput(inputData);
  }, [inputData]);
  return (
    <form method="post" className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="comment">
        <img src="/image-juliusomo.png" alt="" />
      </label>
      <textarea
        rows="3"
        placeholder="Add a comment..."
        id="comment"
        name="comment"
        value={inputData.content}
        onChange={e => setInput({ ...inputData, content: e.target.value })}
      ></textarea>
      <button type="submit">SEND</button>
    </form>
  );
}
