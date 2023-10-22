import {lazy, Suspense} from 'react'
import { Route, Routes } from "react-router-dom";
import {useTheme} from "./utilites/ThemeProvider"
import Welcome from "./pages/welcome/Index.js";
import Home from "./pages/home/index.js"
import Show from "./pages/show/Show.js"

import Nav from "./components/Nav.js";
import ImageDisplay from "./components/ImageDisplay.js";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './assets/css/pageTransition.css'
import {useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

// const Welcome = lazy(() => import("./pages/welcome/Index.js"))
// const Home =  lazy(() => import("././pages/home/index.js"));
// const Show = lazy(() =>import("./pages/show/Show.js"));

  
function App() {
  console.clear()
  const {theme} = useTheme();
  const location = useLocation();

  return (
    <>

      <div className={`${theme === "light" ? "light" : ""}`}>
          <Nav />

          <AnimatePresence>

             <Routes location={location}
                key={location.pathname}>
                <Route 
                  path="/" 
                  element={
                    <Suspense fallback={<div>loading</div>}>
                      <Welcome />
                    </Suspense>
                  }
                  >
                </Route>

                <Route 
                path="/home" 
                element={
                  <Suspense fallback={<div>loading</div>}>
                    <Home />
                  </Suspense>
                }>
                </Route>

                <Route 
                path="/projects/:slug" 
                element={
                  <Suspense fallback={<div>loading</div>}>
                    <Show />
                  </Suspense>
                }>
                </Route>
            </Routes>

          </AnimatePresence>

          <ImageDisplay />
      </div>
       
    </>
  );
}

export default App;
