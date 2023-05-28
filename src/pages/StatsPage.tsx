import React, { useEffect } from "react";
import AOS from "aos";
import { Stats } from "../utils/Stats";
import PageIntro from "./PageIntro";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

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

  return (
    <div className="stats-page-container">
      <PageIntro stats={data}></PageIntro>
      <PageOne stats={data}></PageOne>
      <PageTwo stats={data}></PageTwo>
      {/* <PageThree stats={data}></PageThree> */}
      <button className="clear-data-button" onClick={clearDataCallback}>
        Clear Data
      </button>
    </div>
  );
};

export default StatsPage;
