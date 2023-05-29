import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Stats } from "../utils/Stats";
import Alert from "../components/Alert";
import PageIntro from "./PageIntro";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const trashIcon = require('../assets/trash.png')

type StatsPageProps = {
  data: Stats;
  clearDataCallback: () => void;
};

const StatsPage: React.FC<StatsPageProps> = ({ data, clearDataCallback }) => {
  // initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [showAlert, setShowAlert] = useState(false);

  const handleConfirm = () => {
    setShowAlert(false);
    clearDataCallback();
  };

  const handleCancel = () => {
    setShowAlert(false);
  };

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleCancel();
    }
  };

  return (
    <div className="stats-page-container center-flex">
      <PageIntro stats={data}></PageIntro>
      <PageOne stats={data}></PageOne>
      <PageTwo stats={data}></PageTwo>

      <div className="footer footer-top">
        Check out this project on{" "}
        <a href="https://github.com/SimpleLogix/TikTok-Wrapped">GitHub</a>.
      </div>
      <div className="footer">
        Built by <a href="https://github.com/SimpleLogix">@SimpleLogix</a>
      </div>

      {/* Clear Data Btn */}
      <button className="clear-data-button center-flex" onClick={handleClick}>
        <img src={trashIcon} alt="" height={13} />
        <i>Clear Data</i>
      </button>

      {showAlert && (
        <div className="alert-overlay" onClick={handleClickOutside}>
          <Alert
            message="Are you sure you want to clear your data?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </div>
      )}
    </div>
  );
};

export default StatsPage;
