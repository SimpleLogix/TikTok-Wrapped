import React from "react";
import "./pagestyle.css";
import { Stats } from "../utils/Stats";

type PageIntroProps = {
  stats: Stats;
};

const PageIntro: React.FC<PageIntroProps> = ({ stats }) => {
  return (
    <div className="page-container center-flex intro-page-container">
      <div>HELLO.</div>
      <div>{stats.user}, Right?</div>
    </div>
  );
};

export default PageIntro;
