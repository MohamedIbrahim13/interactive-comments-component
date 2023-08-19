import { useDispatch, useSelector } from "react-redux";
import { getCurrUser } from "./actions/userAction";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import { useEffect } from "react";

function App() {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrUser());
  }, [dispatch]);
  // console.log("user", currentUser);
  return (
    <main>
      <Comment currentUser={currentUser} />
      <CommentForm currentUser={currentUser} />
    </main>
  );
}

export default App;
