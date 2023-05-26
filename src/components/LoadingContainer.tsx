const LoadingContainer: React.FC = () => {
  return (
    <div id="loading-container" className="center-flex">
      <div className="loading-blocks">
        <div></div>
        <div></div>
        <div></div>
      </div>
      Proceessing your data
    </div>
  );
};

export default LoadingContainer;
