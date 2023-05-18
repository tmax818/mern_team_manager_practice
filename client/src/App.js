import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Players} from "./views/Players";
import {Status} from "./views/Status";

function App() {
  return (
    <div className="App">
        <Link to={"/players/list"}>Manage Players</Link> | <Link to={"/status"}>Manage Player Status</Link>
      <Routes>
        <Route path={"/players/*"} element={<Players/>} />
        <Route path={"/status/*"} element={<Status/>} />
      </Routes>
    </div>
  );
}

export default App;
