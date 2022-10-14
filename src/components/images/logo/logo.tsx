import { useEffect, useState } from "react";
// import { LogoSmallSVG } from "../../assets/logo/logo-small";
import { LogoMediumSVG } from "../../assets/logo/logo-medium";
// import { LogoLargeSVG } from "../../assets/logo/logo-large";
// import { LogoExtraLargeSVG } from "../../assets/logo/logo-extraLarge";
import { LogoSmallSVG } from "../../assets/logo/logo-small";

export const Logo = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 761px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 761px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="logo-container">
      <div className="logo">
        {matches ? <LogoMediumSVG /> : <LogoSmallSVG />}
      </div>
    </div>
  );
};
