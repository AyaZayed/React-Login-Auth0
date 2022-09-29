import "./css/App.css";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">{!isAuthenticated ? <LoginButton /> : <Logout />}</div>
  );
}

export default App;
