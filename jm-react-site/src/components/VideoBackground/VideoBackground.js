import React, { useState, useLayoutEffect } from "react";
import { useStoreState } from "easy-peasy";
import contentLoader from "../../data/backgroundContent.js";
import { fadeSettings as fade } from "../../variables/variables";
import { BgVidContainer, VidOverlay, VidLoop } from "./VideoBackground.styled";

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

  console.log(videoLoaded);

  if (content.length > 0) {
    return (
      <>
        {(page === "home" || !mobile) && (
          <BgVidContainer page={page}>
            <VidOverlay page={page} videoLoaded={videoLoaded} />
            <VidLoop
              playsInline
              autoPlay
              muted
              loop
              onLoadedData={onLoadedData}
              animate
              variants={fade}
            >
              <source src={content[0].video} type="video/webm"></source>
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
