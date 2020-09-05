import React from "react";
import { useState, useEffect } from "react";
import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import useDeviceDetect from "../../utils/useDeviceDetect";
// import BlurryImageLoad from "../../utils/blurryLoad";
import VideoLightbox from "../VideoLightbox";
import {
  fadeSettings as fade,
  hoverSettings as hover,
} from "../../variables/variables";
import "./Thumbnail.css";

const Thumbnail = ({ item, thumbtab = false }) => {
  const items = useStoreState((state) => state.storeContent.items);

  const { video, id } = item;
  return (
    <motion.figure
      variants={fade}
      key={`figure-${id}`}
      className={`thumbnail ${items.length < 2 ? `thumb-grid` : `thumb-flex`}`}
    >
      <Image {...item} />
      {/* {video && !thumbtab ? (
        <VideoMobileDesktopSwitch {...item} />
      ) : (
        <Image {...item} />
      )} */}
    </motion.figure>
  );
};

const Image = ({ image, title, id, thumbnail, init, imageAlt }) => {
  // useEffect(() => {
  //   let unmounted = false;

  //   if (!unmounted) {
  //     const blurryImageLoad = new BlurryImageLoad();
  //     blurryImageLoad.load();
  //   }

  //   return () => {
  //     unmounted = true;
  //   };
  // }, []);

  // useEffect(() => {
  //   const blurryImageLoad = new BlurryImageLoad();
  //   blurryImageLoad.load();
  //   return () => {}
  // });

  return (
    <a
      data-fslightbox="gallery"
      href={image}
      title={title}
      key={`anchor-${id}`}
      data-attribute="SRL"
    >
      <img
        className="blurry-load"
        data-large={thumbnail}
        src={init}
        alt={imageAlt}
        key={`img-${id}`}
      />
    </a>
  );
};

const Video = ({ video, imageAlt, url, id }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setVideoLoaded(!videoLoaded);
  };
  const [videoOverlay, setVideoOverlay] = useState(false);
  const toggleVideoOverlay = () => {
    setVideoOverlay(!videoOverlay);
  };

  return (
    <>
      <motion.div
        key={`showcase-play-btn-container_${id}`}
        className="play-btn-container"
        variants={fade}
      >
        <svg
          key={`showcase-svg_${id}`}
          xmlns="http://www.w3.org/2000/svg"
          className="play-btn"
          viewBox="0 0 6.73 7.77"
        >
          <polygon
            key={`showcase-polygon_${id}`}
            points="6.73 3.88 0 0 0 7.77 6.73 3.88"
          />
        </svg>
      </motion.div>
      <motion.div
        className="video-preview"
        variants={fade}
        whileHover={hover.hover}
        whileTap={hover.tap}
        onClick={toggleVideoOverlay}
      >
        <video
          className="video-loop"
          playsInline
          autoPlay
          muted
          loop
          onLoadedData={onLoadedData}
          style={{ opacity: videoLoaded ? 1 : 0 }}
          variants={fade}
          key={`vidprev-${id}`}
        >
          <source src={video} type="video/webm" key={`video-${id}`}></source>
        </video>
      </motion.div>
      {videoOverlay ? (
        <VideoLightbox
          imageAlt={imageAlt}
          url={url}
          id={id}
          toggleVideoOverlay={toggleVideoOverlay}
        />
      ) : null}
    </>
  );
};

const VideoMobileDesktopSwitch = (item) => {
  const { isMobile } = useDeviceDetect();
  return <>{!isMobile ? <Video {...item} /> : <Image {...item} />}</>;
};

export default Thumbnail;
