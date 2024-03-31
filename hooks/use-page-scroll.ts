"use client"
import { useEffect, useState } from 'react'
function usePageScroll() {
  const [pageSectionOnViewport, setPageSectionOnViewport] = useState("home");
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight)
    function handlePageScroll() {
      if (window.scrollY <= windowHeight) {
        setPageSectionOnViewport("home");
      } else if (
        window.scrollY >= windowHeight &&
        window.scrollY < 2 * windowHeight
      ) {
        setPageSectionOnViewport("about");
      } else if (
        window.scrollY >= 2 * windowHeight &&
        window.scrollY < 3 * windowHeight
      ) {
        setPageSectionOnViewport("skills");
      } else if (
        window.scrollY >= 3 * windowHeight &&
        window.scrollY < 4 * windowHeight
      ) {
        setPageSectionOnViewport("projects");
      }
    }
      window.addEventListener('scroll' , () => handlePageScroll());
      return  window.removeEventListener('scroll', () => handlePageScroll());
  } , [ windowHeight])
  
return {pageSectionOnViewport};
}

export default usePageScroll
