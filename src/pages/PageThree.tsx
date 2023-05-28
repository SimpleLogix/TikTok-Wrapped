import React from "react";
import "./pagestyle.css";
import { Stats } from "../utils/Stats";

type PageThreeProps = {
  stats: Stats;
};

const PageThree: React.FC<PageThreeProps> = ({ stats }) => {
  return (
    <div className="page-container center-flex">
      <div className="left-side">
        <div className="hook-left"></div>
      </div>
      <div className="right-side">
        <div className="hook-right"> </div>
      </div>
    </div>
  );
};

export default PageThree;
