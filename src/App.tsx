import React, { useEffect, useState } from "react";
import "./App.css";
import LandingContainer from "./components/LandingContainer";
import LoadingContainer from "./components/LoadingContainer";
import StatsPage from "./pages/StatsPage";
import { Stats, EMPTY_STATS, calculateStats } from "./utils/Stats";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDataUploaded, setIsDataUploaded] = useState(false);

  // fetch data from local storage
  const initialData = localStorage.getItem("stats")
    ? JSON.parse(localStorage.getItem("stats")!)
    : EMPTY_STATS;
  const [data, setData] = useState<Stats>(initialData);

  // if data exists, set state to skip landing
  useEffect(() => {
    if (initialData !== EMPTY_STATS) {
      setIsDataUploaded(true);
    }
  }, [initialData]);

  //? CALL BACK FUNCTIONS
  // callback function to the landig container [Drop Zone]
  const onJsonDropped = (json: Map<string, any>) => {
    //TODO: validate json
    setIsLoading(true);
    const newData = calculateStats(json);

    // Store the new data in localStorage as a stringified JSON
    localStorage.setItem("stats", JSON.stringify(newData));

    setData(newData);
    setTimeout(() => {
      console.log(newData);
      setIsLoading(false);
      setIsDataUploaded(true);
    }, 1000);
  };

  // remove old data [text button callback]
  const clearData = () => {
    console.log("clearing data");
    localStorage.removeItem("stats");
    setIsDataUploaded(false);
  };

  // if the state is loading, display the loading container
  // if the state has data uploaded, display the stats page
  // otherwise, display the landing container with drop-zone
  return (
    <div className="background">
      {isLoading ? (
        <LoadingContainer />
      ) : isDataUploaded ? (
        <StatsPage data={data} clearDataCallback={clearData} />
      ) : (
        <LandingContainer onJsonDropped={onJsonDropped} />
      )}
    </div>
  );
};

export default App;
