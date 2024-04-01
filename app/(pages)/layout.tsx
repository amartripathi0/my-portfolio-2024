"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const Home = ({ children }: { children: React.ReactNode }) => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll>();
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
      setLocomotiveScroll(scroll);
    })();
  }, []);

  return (
    <div className="relative">
      {locomotiveScroll && <Navbar locomotiveScroll={locomotiveScroll} />}
      <div className="px-10 ">
        {children}
      <div className=" bottom-4 left-full sticky border-2 p-3 flex-center w-72 max-sm:w-10/12 max-sm:text-sm max-sm:m-auto max-sm:p-1 max-sm:bottom-1 max-sm:left-0 rounded-xl  ">
      Website is currently under construction. Please check back soon!
      </div>
      </div>
    </div>
  );
};

export default Home;
