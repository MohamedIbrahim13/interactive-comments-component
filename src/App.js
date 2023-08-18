import { useDispatch, useSelector } from "react-redux";
import { getCurrUser } from "./actions/userAction";
import Comment from "./components/Comment";
import Form from "./components/Form";
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
      <Form currentUser={currentUser} />
    </main>
  );
}

export default App;
