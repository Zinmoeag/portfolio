import { Route, Routes } from "react-router-dom";
import {useTheme} from "./utilites/ThemeProvider"
import Welcome from "./pages/welcome/Index.js";
import ProjectBoard from "./pages/ProjectBoard.js";



function App() {

  const {theme} = useTheme();

  return (
    <>

      <div className={`${theme === "light" ? "light" : ""}`}>
        
         <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/project" element={<ProjectBoard />}></Route>
        </Routes>
     
      </div>
       
    </>
  );
}

export default App;
