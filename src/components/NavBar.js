import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <div id="navbar">
      <nav>
        {links.map((link, index) => (
          <a key={index} href={`#${link}`}>
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default NavBar; 