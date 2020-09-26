import React, { useState, useLayoutEffect } from "react";

import contentLoader from "../../data/backgroundContent.js";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";
import { useStoreState } from "easy-peasy";
import "./VideoBackground.css";
// import { BgVidContainer, VidLoop, VidOverlay } from "./VideoBackground.styled";

const VideoBackground = () => {
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

  const mobile = useStoreState((state) => state.storeContent.mobileDevice);

  const onLoadedData = () => {
    setVideoLoaded(true);
  };

  if (content.length > 0) {
    return (
      <>
        {(page === "home" || !mobile) && (
          <motion.div
            className={`bg-vid-area ${
              page === "home" ? "bg-vid-home" : "bg-vid-standard"
            }`}
            animate
            variants={fade}
          >
            <div className={page === "home" ? "vid-overlay" : ""}></div>

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

          // <BgVidContainer page={page}>
          //   <VidOverlay page={page} videoLoaded={videoLoaded} />
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
        )}
      </>
    );
  } else {
    return null;
  }
};

export default VideoBackground;
