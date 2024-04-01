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
      <div className="px-10 ">{children}</div>
      <div className=" bottom-10 left-[83%] sticky border-2 p-3 flex-center w-80 rounded-xl  ">
      Website is currently under construction. Please check back soon!
      </div>
    </div>
  );
};

export default Home;
