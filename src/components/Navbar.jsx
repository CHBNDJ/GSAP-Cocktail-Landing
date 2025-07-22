import React from "react";
import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="home" className="flex items-center gap-2">
          <img src="/public/images/logo.png" alt="logo" />
          <p>Pisco Sour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
