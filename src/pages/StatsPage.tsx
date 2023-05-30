import React, { useEffect } from "react";
import AOS from "aos";
import { Stats } from "../utils/Stats";
import PageIntro from "./PageIntro";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import MusicPlayer from "../components/MusicPlayer";

type StatsPageProps = {
  data: Stats;
};

const StatsPage: React.FC<StatsPageProps> = ({ data }) => {
  // initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="stats-page-container">
      <div>
        <PageIntro stats={data}></PageIntro>
        <PageOne stats={data}></PageOne>
        <PageTwo stats={data}></PageTwo>
      </div>
      <div className="overlay">
        <MusicPlayer></MusicPlayer>
      </div>
    </div>
  );
};

export default StatsPage;
