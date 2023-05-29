import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import LandingContainer from "./components/LandingContainer";
import LoadingContainer from "./components/LoadingContainer";
import StatsPage from "./pages/StatsPage";
import { Stats, EMPTY_STATS, calculateStats } from "./utils/Stats";
import Footer from "./components/Footer";

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
    window.scrollTo(0,0)
    setIsDataUploaded(false);
  };

  // state and function for handling footer-
  // Link redirects and alert popups + clearing data
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirm = () => {
    setShowAlert(false);
    clearData();
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

  // if the state is loading, display the loading container
  // if the state has data uploaded, display the stats page
  // otherwise, display the landing container with drop-zone
  return (
    <div className="background">
      {/* hidden file input prompt */}
      {isLoading ? (
        <LoadingContainer />
      ) : isDataUploaded ? (
        <StatsPage data={data} />
      ) : (
        <LandingContainer onJsonDropped={onJsonDropped} />
      )}
      <Footer
        handleClick={handleClick}
        handleClickOutside={handleClickOutside}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        showAlert={showAlert}
      ></Footer>
    </div>
  );
};

export default App;
