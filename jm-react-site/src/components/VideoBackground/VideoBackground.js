import React, { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
// import { BgVidContainer, VidLoop, VidOverlay } from "./VideoBackground.styled";
import contentLoader from "../../data/backgroundContent.js";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";
import "./VideoBackground.css";

const VideoBackground = () => {
  // const isHomePage = useLocation().pathname === "/" ? true : false;
  let location = useLocation().pathname;
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

  if (content.length > 0) {
    return (
      <motion.div
        className={`bg-vid-area ${
          location === "/" ? "bg-vid-home" : "bg-vid-standard"
        }`}
        animate
        variants={fade}
      >
        <div className={location === "/" ? "vid-overlay" : ""}></div>

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
      // <BgVidContainer isHomePage={isHomePage}>
      //   <VidOverlay isHomePage={isHomePage} videoLoaded={videoLoaded} />
      //   <VidLoop
      //     playsInline
      //     autoPlay
      //     muted
      //     loop
      //     onLoadedData={onLoadedData}

      //     animate
      //     variants={fade}
      //   >
      //     <source src={content[0].video} type="video/webm"></source>
      //   </VidLoop>
      // </BgVidContainer>
    );
  } else {
    return null;
  }
};

export default VideoBackground;
