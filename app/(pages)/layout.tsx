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
    <div>
      {locomotiveScroll && <Navbar locomotiveScroll={locomotiveScroll} />}
      <div className="px-10">{children}</div>
    </div>
  );
};

export default Home;
