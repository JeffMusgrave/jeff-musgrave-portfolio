import React from "react";
import { useState, useLayoutEffect } from "react";
import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import useDeviceDetect from "../../utils/useDeviceDetect";
import BlurryImageLoad from "../../utils/blurryLoad";
import VideoLightbox from "../VideoLightbox";
import {
  fadeSettings as fade,
  hoverSettings as hover,
} from "../../variables/variables";
import "./Thumbnail.css";

const Thumbnail = ({ item, idx, thumbtab = false }) => {
  let items = useStoreState((state) => state.storeContent.items);
  // let itemsInit = [];
  // if (!items) {
  //   items = [];
  // }
  // console.log("items");
  // console.log(items);
  const { video, id } = item;
  return (
    <motion.figure
      variants={fade}
      key={`figure-${id}`}
      className={`thumbnail ${items.length < 2 ? `thumb-grid` : `thumb-flex`}`}
    >
      {video && !thumbtab ? (
        <VideoMobileDesktopSwitch {...item} idx={idx} />
      ) : (
        <Image {...item} />
      )}
    </motion.figure>
  );
};

const Image = ({ image, video, title, id, thumbnail, init, imageAlt }) => {
  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });

  return (
    <a
      href={image}
      title={title}
      key={`anchor-${id}`}
      loading="lazy"
      data-attribute={!video ? `SRL` : ` `}
    >
      <motion.img
        animate
        whileHover={hover.hover}
        whileTap={hover.tap}
        className="blurry-load"
        data-large={thumbnail}
        src={init}
        alt={imageAlt}
        key={`img-${id}`}
        loading="lazy"
      />
    </a>
  );
};

const Video = ({ video, imageAlt, url, id, idx }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setVideoLoaded(!videoLoaded);
  };
  const [videoOverlay, setVideoOverlay] = useState(false);
  const toggleVideoOverlay = () => {
    setVideoOverlay(!videoOverlay);
  };

  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });

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
          onClick={toggleVideoOverlay}
        >
          <source src={video} type="video/webm" key={`video-${id}`}></source>
        </video>
      </motion.div>
      {videoOverlay ? (
        <VideoLightbox
          imageAlt={imageAlt}
          url={url}
          idx={idx}
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
