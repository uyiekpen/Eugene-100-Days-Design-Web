import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Contact from "../../assets/ICON/Contact";
import Icon from "../../assets/ICON/svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className="flex justify-between items-center  px-10 py-2  text-white w-full z-10 h-32 font-poppins max-sm:px-5 dark:text-black">
      <a href="/home" className="logo text-2xl font-bold flex">
        <Icon />
        Peaches
      </a>
      <nav className="hidden md:block">
        <ul className="flex justify-center items-center w-6/6">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">the team</a>
          </li>
          <button className="bg-white w-48 h-12 rounded-md dark:bg-black">
            <a
              href="#"
              className="text-accent flex items-center justify-center  dark:text-white"
            >
              Contact us
              <Contact />
            </a>
          </button>
        </ul>
      </nav>
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
