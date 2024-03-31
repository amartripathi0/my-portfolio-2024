import Navbar from "@/components/Navbar";
import React from "react";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default Home;
