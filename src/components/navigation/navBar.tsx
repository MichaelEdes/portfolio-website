import "../../styles/components/navBar.css";

import React, { useEffect, useState } from "react";
import { Logo } from "../images/logo/logo";

const inView = document.getElementById("burgerLine1");
inView?.addEventListener("load", function () {
  console.log("fullScreen");
});

export const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 761px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 761px)")
      .addEventListener(
        "change",
        (e) => (setMatches(e.matches), setIsActive(false))
      );
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <Logo />
      </div>
      <div className={`nav-list-container ${isActive && "is-active"}`}>
        <div className="qw">
          <NavListItems />
        </div>
      </div>
      {matches ? (
        <div className="nav-contact">contact</div>
      ) : (
        <div
          className={`nav-burger-icon ${isActive && "is-active"}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
        </div>
      )}
    </nav>
  );
};

const NavListItems = () => {
  return (
    <ul>
      <li>
        <a href="/">intro</a>
      </li>
      <li>
        <a href="/">who</a>
      </li>
      <li>
        <a href="/">what</a>
      </li>
      <li>
        <a href="/">work</a>
      </li>
    </ul>
  );
};
