import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Campaign from "./components/Campaign";
import getUserData from "./services/ApiService";
import { setUserList } from "./store/UserSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const userData = await getUserData();
      dispatch(setUserList(userData));
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <Campaign />
    </div>
  );
}

export default App;
