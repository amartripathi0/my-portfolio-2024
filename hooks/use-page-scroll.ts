"use client";
import { useEffect, useState } from "react";
function usePageScroll() {
  const [pageSectionOnViewport, setPageSectionOnViewport] = useState("home");
  const [windowHeight, setWindowHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (isScrolling) {
      if (!document.body.classList.contains("on-scroll")) {
        document.body.classList.add("on-scroll");
        document.body.classList.remove("on-not-scroll");
      }
    } else {
      if (!document.body.classList.contains("on-not-scroll")) {
        document.body.classList.add("on-not-scroll");
        document.body.classList.remove("on-scroll");
      }
    }
  }, [isScrolling]);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    function handlePageScroll() {
      handlePageNavigation();
      handleScrollbar();
    }

    function handleScrollbar() {
      handleScrolling();
    }
    let scrollTimer: NodeJS.Timeout;
    function handleScrolling() {
      setIsScrolling(true);
      clearInterval(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 100);
    }
    function handlePageNavigation() {
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
    window.addEventListener("scroll", (e) => handlePageScroll());
    return window.removeEventListener("scroll", (e) => handlePageScroll());
  }, [windowHeight]);

  return { pageSectionOnViewport };
}

export default usePageScroll;
