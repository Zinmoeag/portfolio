import Home from "./pages/Home.js";
import Nav from "./components/Nav.js";
import ProjectBoard from "./pages/ProjectBoard.js";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    

    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<ProjectBoard />}></Route>
    </Routes>
    
    </>
  );
}

export default App;
