import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
import { logo } from "../../assets/images";
function Navbar() {
  return (
    <div className="w-full flex justify-between items-center h-20 mx-auto">
      <div>
        <img src={logo} alt="logo" className="w-40" />
      </div>
      <ul className="flex justify-between items-center gap-10">
        {navLinksdata.map(({ _id, title, link }) => {
          return (
            <li
              className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor
           duration-300"
              key={_id}
            >
              <Link activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-70}
                    duration={500}
              >
              {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
