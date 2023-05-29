import React from "react";
import Alert from "./Alert";

type FooterProps = {
  handleClick: () => void;
  handleClickOutside: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleConfirm: () => void;
  handleCancel: () => void;
  showAlert: boolean;
};

const trashIcon = require("../assets/trash.png");

const Footer: React.FC<FooterProps> = ({
  handleClick,
  handleClickOutside,
  handleConfirm,
  handleCancel,
  showAlert,
}) => {
  return (
    <div className="center-flex footer">
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

export default Footer;
