import { Route, Routes } from "react-router-dom";
import {useTheme} from "./utilites/ThemeProvider"
import Welcome from "./pages/welcome/Index.js";
import Home from "./pages/home/index.js"
import Show from "./pages/show/Show.js"
import Nav from "./components/Nav.js";
import ImageDisplay from "./components/ImageDisplay.js";
import './assets/css/pageTransition.css'
import {useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';


  
function App() {

  const {theme} = useTheme();
  const location = useLocation();

  return (
    <>

      <div className={`${theme === "light" ? "light" : ""}`}>
          <Nav />

             <Routes location={location}
                key={location.pathname}>
                <Route 
                  path="/" 
                  element={<Welcome />}
                  >
                </Route>

                <Route 
                path="/home" 
                element={<Home />}
                >
                </Route>

                <Route 
                path="/projects/:slug" 
                element={<Show />}
                >
                </Route>
            </Routes>

          <ImageDisplay />
      </div>
       
    </>
  );
}

export default App;
