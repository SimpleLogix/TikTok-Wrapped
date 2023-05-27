import React from "react";
import "./pagestyle.css";

type PageOneProps = {};

const PageOne: React.FC<PageOneProps> = ({}) => {
  return (
    <div className="page-container center-flex">
      <div className="left-side">
        <div className="middle-hook"></div>
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default PageOne;
