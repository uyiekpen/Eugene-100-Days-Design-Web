import React, { useEffect, useState } from "react";
import Header from "./Header";
import Img from "../../assets/images/Image.png";
import Light from "../../assets/ICON/Light";

import Darl from "../../assets/ICON/Darl";

const Bodycomp = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
      setTheme("dark");
    } else {
      html?.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  //handle switch theme

  const handleSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="day63 w-screen m-0	 h-initial	backdrop-blur-[121.5px] sticky dark:text-black dark:bg-white">
      <Header />
      <div className=" px-10 max-sm:px-5">
        <h1 className="text-8xl font-bold text-white flex flex-col  max-sm:text-4xl  dark:text-black">
          <div className="flex">
            Turn on{" "}
            <div onClick={handleSwitch}>
              {theme === "light" ? <Light /> : <Darl />}
            </div>
          </div>
          <p> your Creativity</p>
        </h1>
      </div>
      <div className="px-10 py-8  w-full  flex justify-center items-center max-sm:px-5">
        <img className="h-80 rounded-t-lg object-cover" src={Img} alt="" />
      </div>
    </div>
  );
};

export default Bodycomp;
