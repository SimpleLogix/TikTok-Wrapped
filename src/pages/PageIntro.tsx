import React from "react";
import "./pagestyle.css";
import { Stats } from "../utils/Stats";

type PageIntroProps = {
  stats: Stats;
};

const PageIntro: React.FC<PageIntroProps> = ({ stats }) => {
  return (
    <div className="page-container center-flex intro-page-container">
      <div className="hello-container">
        <p data-aos="fade-in">HELLO.</p>
        <p data-aos="fade-in">HELLO.</p>
        <p data-aos="fade-in">HELLO.</p>
      </div>
      <div data-aos="fade-in" data-aos-delay="2000">
        <i>{stats.user},</i> Right?
      </div>
      <div className="spacer"></div>
      <div className="swipe-down-text" data-aos="fade-in" data-aos-delay="3000">
        Swipe down to view your TikTok Wrapped Stats
      </div>
      <div
        className="swipe-down-text bounce"
        data-aos="fade-in"
        data-aos-delay="3000"
      >
        v v v v v
      </div>
    </div>
  );
};

export default PageIntro;
