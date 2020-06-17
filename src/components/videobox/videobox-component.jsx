import React from "react";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import "./video-styles.css";

const VideoBox = (props) => {
  return (
    <div style={{}} className="videoBox">
      <div
        class="embed-responsive embed-responsive-16by9 mb-4"
        style={{ height: "92vh" }}
      >
        <iframe
          style={{ height: "75%" }}
          src="https://www.youtube.com/embed/f449WCh5OGg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {/* <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      /> */}
    </div>
  );
};

export default VideoBox;
