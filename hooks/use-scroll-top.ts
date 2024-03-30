"use client"
import {useState , useEffect} from 'react'

function useScrollTop(threshold = 10) {
    const [scrolled , setScrolled] = useState(false)
    const [pageSectionOnViewport, setPageSectionOnViewport] = useState("home");
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    useEffect(() => {
        function handleScroll(){
            if(window.scrollY > threshold){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }

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
                  setPageSectionOnViewport("skill");
                } else if (
                  window.scrollY >= 3 * windowHeight &&
                  window.scrollY < 4 * windowHeight
                ) {
                  setPageSectionOnViewport("projects");
                }
              }
        }
        window.addEventListener('scroll' , () => handleScroll());
        return  window.removeEventListener('scroll', () => handleScroll());
    } , [threshold ,windowHeight])
    
  return {scrolled , pageSectionOnViewport};
}

export default useScrollTop
