import React, { ReactElement } from "react";
import "../../styles/components/pageHero.css";

type Props = {
  title: string;
  subtitle: string;
  backgroundColor: string;
  textColor: string;
};

export function PageHero({
  title,
  subtitle,
  backgroundColor,
  textColor,
}: Props) {
  return (
    <div
      className="page-hero-container"
      style={{ background: `${backgroundColor}` }}
    >
      <div className="page-hero" style={{ color: `${textColor}` }}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
}
