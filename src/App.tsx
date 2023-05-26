import React, { useState } from "react";
import "./App.css";
import LandingContainer from "./components/LandingContainer";
import LoadingContainer from "./components/LoadingContainer";
import StatsPage from "./components/StatsPage";
import { Stats, EMPTY_STATS, calculateStats } from "./utils/Stats";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDataUploaded, setIsDataUploaded] = useState(false);

  const [data, setData] = useState<Stats>(EMPTY_STATS);

  // callback function to the landig container [Drop Zone]
  const onJsonDropped = (json: Map<string, any>) => {
    setIsLoading(true);
    const newData = calculateStats(json);
    setData(newData);
    setTimeout(() => {
      console.log(newData);
      setIsLoading(false);
      setIsDataUploaded(true);
    }, 1500);
  };

  return (
    <div className="background">
      {isLoading ? (
        <LoadingContainer />
      ) : isDataUploaded ? (
        <StatsPage data={data} />
      ) : (
        <LandingContainer onJsonDropped={onJsonDropped} />
      )}
    </div>
  );
};

export default App;
