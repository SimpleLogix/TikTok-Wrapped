import React from "react";
import { Stats } from "../utils/Stats";

type StatsPageProps = {
  data: Stats;
  clearDataCallback: () => void;
};

const StatsPage: React.FC<StatsPageProps> = ({ data, clearDataCallback }) => {
  return (
    <div id="stats-container" className="center-flex">
      <div className="stats-border">
        <div className="stats-items">
          <div className="stats-title">User</div>
          <div id="user" className="stat-item">
            {data.user}
          </div>
        </div>

        <div className="stats-items">
          <div className="stats-title">Date Joined</div>
          <div id="join_date" className="stat-item">
            {data.join_date}
          </div>
        </div>

        <div className="stats-items">
          <div className="stats-title">Videos Watched</div>
          <div id="total_videos" className="stat-item">
            {data.total_videos}
          </div>
        </div>

        <div className="stats-items">
          <div className="stats-title">Hours Scrolled</div>
          <div id="hours_scrolled" className="stat-item">
            {data.hours_scrolled}
          </div>
        </div>

        <div className="stats-items">
          <div className="stats-title">Times Opened TikTok</div>
          <div id="times_opened_app" className="stat-item">
            {data.times_opened_app}
          </div>
        </div>
      </div>
      <div id="wrapped-button">View TikTok Wrapped</div>
      <button className="clear-data-button" onClick={clearDataCallback}>
        Clear Data
      </button>
    </div>
  );
};

export default StatsPage;
