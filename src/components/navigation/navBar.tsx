import "../../styles/components/navBar.css";

import React, { ReactElement, useEffect, useState } from "react";
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

  const SocialLinks = () => {
    return (
      <div className={`page-hero-links`}>
        <h5>LinkedIn</h5>
        <h5>GitHub</h5>
        <h5>Twitter</h5>
        <h5>Instagram</h5>
      </div>
    );
  };

  return (
    <nav>
      <div className="nav-logo">
        <Logo />
      </div>
      <div className={`nav-list-container ${isActive && "is-active"}`}>
        <div className="qw">
          <NavListItems />
          <SocialLinks />
        </div>
      </div>
      {matches ? (
        <div className="nav-contact">
          <a href="../www.google.com">contact</a>
        </div>
      ) : (
        <div
          className={`nav-burger-icon ${isActive && "is-active"}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
        </div>
      )}
      {matches && <SocialLinks />}
    </nav>
  );
};
