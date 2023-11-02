import "./App.css";
import UserContestProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContestProvider>
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </UserContestProvider>
  );
}

export default App;
