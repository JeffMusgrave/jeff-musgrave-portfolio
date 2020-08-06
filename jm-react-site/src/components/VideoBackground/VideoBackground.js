import React, { useState, useLayoutEffect } from "react";
import contentLoader from "../../data/backgroundContent.js";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";
import "./VideoBackground.css";

const VideoBackground = (props) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [content, setContent] = useState([]);
  useLayoutEffect(() => {
    const getData = async () => {
      const data = await contentLoader([]);
      setContent(data);
    };
    getData();
  }, []);

  const onLoadedData = () => {
    setVideoLoaded(!videoLoaded);
  };

  const currentPath = props.location.pathname;
  console.log(currentPath);
  if (content.length > 0) {
    return (
      <motion.div
        className={`bg-vid-area ${
          currentPath === "/" ? "bg-vid-home" : "bg-vid-standard"
        }`}
        animate
        variants={fade}
      >
        <div className={currentPath === "/" ? "vid-overlay" : ""}></div>

        <motion.video
          className="video-loop"
          playsInline
          autoPlay
          muted
          loop
          onLoadedData={onLoadedData}
          style={{ opacity: videoLoaded ? 1 : 0 }}
          animate
          variants={fade}
        >
          <source src={content[0].video} type="video/webm"></source>
        </motion.video>
      </motion.div>
    );
  } else {
    return null;
  }
};

export default VideoBackground;
