"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import "../globals.css";
const Home = ({ children }: { children: React.ReactNode }) => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll>();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({ scrollbarClass: "scrollbar" });
      setLocomotiveScroll(scroll);
    })();
  }, []);

  return (
    <div className={`relative}`}>
      {locomotiveScroll && <Navbar locomotiveScroll={locomotiveScroll} />}
      <div className="px-10 mx-40 max-sm:mx-0 max-sm:px-4 pt-28 max-sm:pt-10">
        {children}
      </div>
        <div className="mr-10 bottom-4 left-full sticky border p-3  flex-center w-60 max-sm:w-full text-sm max-sm:m-auto max-sm:p-1 max-sm:bottom-1 max-sm:left-0 rounded-xl  ">
          Website is currently under construction. Please check back soon!
        </div>
    </div>
  );
};

export default Home;
