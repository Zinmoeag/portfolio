import {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';

const useScroll = (dependency,top = 0,left = 0) => {

  useEffect(() => {
  	window.scrollTo({
      top:top,
      left:left,
      behavior: "smooth",
    })
  }, [...dependency]);

  return null; 
}

export default useScroll;
