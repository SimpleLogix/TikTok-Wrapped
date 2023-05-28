import React from "react";
import "./pagestyle.css";
import { Stats } from "../utils/Stats";

type PageOneProps = {
  stats: Stats;
};

const PageOne: React.FC<PageOneProps> = ({ stats }) => {
  return (
    <div className="page-container center-flex">
      <div className="left-side">
        <div className="hook-left" data-aos="fade-in" data-aos-delay="100"></div>
        <p data-aos="fade-in" data-aos-delay="100">You've joined TikTok Back in</p>
        <p className="stats-join-date" data-aos="fade-in" data-aos-delay="1000">{stats.join_date}</p>
        <p data-aos="fade-in" data-aos-delay="1200">
          Thats <span>{stats.days_scrolled}</span> days of scrolling!
        </p>
      </div>
      <div className="right-side">
        <div className="hook-right" data-aos="fade-in" data-aos-delay="100"></div>
        <p data-aos="fade-in" data-aos-delay="100">
          You opened TikTok <span>{stats.times_opened_app}</span> times{" "}
        </p>
        {/* TODO- add avg times opened */}
        <div className="spacer"></div>
        <p data-aos="fade-in" data-aos-delay="1000">
          Thats an average of <span>###</span> times per day
        </p>
      </div>
    </div>
  );
};

export default PageOne;
