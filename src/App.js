import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Increment from "./pages/Increment";
import Todo from "./Todo";
import WatchMovie from "./pages/WatchMovie";

function App() {
  return (
    <>
      <NavBar />
      <div className="App"></div>
      <Routes>
        <Route path="/Increment" element={<Increment />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/WatchMovie" element={<WatchMovie />} />
      </Routes>
    </>
  );
}

export default App;
