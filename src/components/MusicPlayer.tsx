import { useState } from "react";
import "./mpstyle.css";

const playIcon = require("../assets/play.png");
const pauseIcon = require("../assets/pause.png");

type MusicPlayerProps = {};

const MusicPlayer: React.FC<MusicPlayerProps> = ({}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePauseButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="album-cover">
        <div className="spotify-icon"></div>
      </div>
      <div className="track-metadata">
        <div className="track-title">Track Title</div>
        <div className="track-artist">Artist Name</div>
      </div>
      <div className="pause-button center-flex">
        <img
          src={isPlaying ? pauseIcon : playIcon}
          alt="play"
          onClick={handlePauseButtonClick}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
