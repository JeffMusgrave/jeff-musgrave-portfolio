import React from "react";
import { useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import useDeviceDetect from "../../utils/useDeviceDetect";
import BlurryImageLoad from "../../utils/blurryLoad";
import {
  fadeSettings as fade,
  hoverSettings as hover,
} from "../../variables/variables";
import "./Thumbnail.css";

const Thumbnail = ({ item }) => {
  const { video, id } = item;
  // console.log(info);
  return (
    <motion.figure
      variants={fade}
      whileHover={hover.hover}
      whileTap={hover.tap}
      key={`figure-${id}`}
      className="thumbnail"
    >
      {video ? <VideoMobileDesktopSwitch {...item} /> : <Image {...item} />}
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
      <img
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

const Video = ({ video, id }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setVideoLoaded(!videoLoaded);
  };

  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });
  return (
    <>
      <div
        key={`showcase-play-btn-container_${id}`}
        className="play-btn-container"
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
      </div>
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
        key={`vidprev-${id}`}
      >
        <source src={video} type="video/webm" key={`video-${id}`}></source>
      </motion.video>
    </>
  );
};

const VideoMobileDesktopSwitch = (item) => {
  const { isMobile } = useDeviceDetect();
  return <>{!isMobile ? <Video {...item} /> : <Image {...item} />}</>;
};

export default Thumbnail;
