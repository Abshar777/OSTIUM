import React from "react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <div className="bg-card/30 sticky top-0 z-50 backdrop-blur-sm border-b border-dashed rounded-b-md w-full px-5 h-16 py-4 flex justify-between items-center">
      <div className="logo">
        <h1 className="text-xl text-primary font-mono ">OSTIUM</h1>
      </div>
      <div className="connect-btn">
        <Button className="bg-primary/20 border-primary hover:opacity-80 hover:bg-primary/10 cursor-pointer border text-primary text-sm ">
          Connect
        </Button>
      </div>
    </div>
  );
};

export default Header;
