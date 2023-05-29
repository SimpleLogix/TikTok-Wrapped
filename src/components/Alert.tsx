import React from "react";

type AlertProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Alert: React.FC<AlertProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="alert">
      <div className="message">{message}</div>
      <div className="buttons">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Alert;
