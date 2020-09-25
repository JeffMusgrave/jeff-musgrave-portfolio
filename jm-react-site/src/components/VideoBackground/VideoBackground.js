import React, { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import contentLoader from "../../data/backgroundContent.js";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";
import { useStoreState } from "easy-peasy";
import "./VideoBackground.css";

const VideoBackground = () => {
  let location = useLocation().pathname;
  const page = useStoreState((state) => state.storeContent.page);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [content, setContent] = useState([]);
  useLayoutEffect(() => {
    const getData = async () => {
      const data = await contentLoader([]);
      setContent(data);
    };
    getData();
  }, []);

  const isMobile = useStoreState((state) => state.storeContent.mobileDevice);

  const onLoadedData = () => {
    setVideoLoaded(!videoLoaded);
  };

  if (content.length > 0) {
    return (
      <>
        {(page === "home" || !isMobile) && (
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
        )}
      </>
    );
  } else {
    return null;
  }
};

export default VideoBackground;
