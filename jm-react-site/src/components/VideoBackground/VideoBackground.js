import React, { useState, useLayoutEffect } from "react";
import { useStoreState } from "easy-peasy";
import { AnimatePresence } from "framer-motion";

import contentLoader from "../../data/backgroundContent.js";
import { fadeSettings as fade } from "../../variables/variables";
import { BgVidContainer, VidLoop } from "./VideoBackground.styled";

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
  }, [page]);

  const bg = content[0];

  const mobile = useStoreState((state) => state.storeContent.mobileDevice);

  const onLoadedData = () => {
    setVideoLoaded(true);
  };

  if (content.length > 0) {
    return (
      <>
        {(page === "home" || !mobile) && (
          <BgVidContainer page={page} animate variants={fade}>
            <VidLoop
              playsInline
              autoPlay
              muted
              loop
              onLoadedData={onLoadedData}
              videoLoaded={videoLoaded}
              key={bg.video}
              animate
              variants={fade}
            >
              <source src={bg.video} type="video/webm"></source>
            </VidLoop>
          </BgVidContainer>
        )}
      </>
    );
  } else {
    return null;
  }
};

export default VideoBackground;
