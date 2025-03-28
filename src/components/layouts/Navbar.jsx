import React from "react";
import logoImg from "../../assets/images/logo.png";
import { navData } from "../../dummyData/navData";

const Navbar = () => {
  return (
    <nav className="pt-50">
      <div className="customContainer">
        <div className="flex justify-between items-center">
          <div>
            <img src={logoImg} alt="logo" />
          </div>
          <div>
            <ul className="flex gap-x-[45px]">
              {navData.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={nav.url}
                    className="text-navlink text-base font-Montserrat font-semibold leading-normal capitalize transition-all duration-200 hover:text-secondary"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
