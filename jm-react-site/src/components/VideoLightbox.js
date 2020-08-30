import React from "react";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../variables/variables";

const VideoLightbox = ({ imageAlt, url }, idx, toggleVideoOverlay) => {
  return (
    <motion.div
      variants={fade}
      className="youtube-appear"
      onClick={toggleVideoOverlay}
      key={`showcase-youtube-appear_${idx}`}
    >
      <div key={`showcase-close-btn_${idx}`} className="close-btn">
        <div key={`showcase-line_${idx}`} className="line">
          <span key={`showcase-left-x_${idx}`} className="left-x"></span>
          <span key={`showcase-right-x_${idx}`} className="right-x"></span>
        </div>
      </div>

      <div
        key={`showcase-youtube-container_${idx}`}
        className="youtube-container"
      >
        <iframe
          key={`showcase-iframe_${idx}`}
          width="560"
          height="315"
          title={`youtube-${imageAlt}`}
          src={`https://www.youtube.com/embed/${url.replace(
            "https://www.youtube.com/watch?v=",
            ""
          )}?vq=hd1080`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default VideoLightbox;
