"use client"
import Ascii from "./ascii";
import Command from "@/components/commandarea";
import Header from "./header";

const Terminal = () => {
    return (
      <div className="bg-black text-slate-300 w-screen min-h-screen overflow-x-hidden">
        <Ascii />
        <Header />
       <Command /> 
      </div>
    );
  };
  export default Terminal;