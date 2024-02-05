import "./style/App.scss";
import LandingPage from "./pages/LandingPage";
import { useSelector } from "react-redux";
import InsideApp from "./pages/InsideApp";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      {isAuthenticated ? <InsideApp /> :  <LandingPage />}
     
    </div>
  );
}

export default App;
