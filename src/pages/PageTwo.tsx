import React from "react";
import "./pagestyle.css";
import { Stats } from "../utils/Stats";

type PageTwoProps = {
  stats: Stats;
};

const PageTwo: React.FC<PageTwoProps> = ({ stats }) => {
  return (
    <div className="page-container center-flex">
      <div className="left-side">
        <div className="hook-left" data-aos="fade-in" data-aos-delay="100"></div>
        <p data-aos="fade-in" data-aos-delay="100">
          You have scrolled for <span>{stats.mins_scrolled}</span> minutes!
        </p>
        <p data-aos="fade-in" data-aos-delay="300">
          That's <span>{stats.hours_scrolled} hours</span>...
        </p>
        <p data-aos="fade-in" data-aos-delay="500">
          or <span>{stats.days_scrolled} days</span>...
        </p>
        <div className="spacer"></div>
        <p data-aos="fade-in" data-aos-delay="1000">[Fun Fact]</p>
      </div>
      <div className="right-side">
        <div className="hook-right" data-aos="fade-in" data-aos-delay="100"> </div>
        <p data-aos="fade-in" data-aos-delay="100">Your longest session was on</p>
        <p data-aos="fade-in" data-aos-delay="600">
          <span>{stats.join_date}</span>
        </p>
        <div className="spacer"></div>
        <p data-aos="fade-in" data-aos-delay="800">Where you scrolled for <span>XXX</span> hours</p>
      </div>
    </div>
  );
};

export default PageTwo;
