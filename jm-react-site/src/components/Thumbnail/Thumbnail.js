import React from "react";
import { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
// import { motion } from "framer-motion";
import useDeviceDetect from "../../utils/useDeviceDetect";
import BlurryImageLoad from "../../utils/blurryLoad";
import {
  Container,
  ImageContainer,
  PlayButton,
  VideoContainer,
} from "./Thumbnail.styled";
import {
  fadeSettings as fade,
  hoverSettings as hover,
} from "../../variables/variables";

const Thumbnail = ({ item, thumbtab = false, clickable = true }) => {
  const items = useStoreState((state) => state.storeContent.items);
  const setLightbox = useStoreActions(
    (actions) => actions.storeContent.setLightbox
  );
  const { video, id } = item;
  const currentIdx = items.indexOf(item);
  console.log(currentIdx);

  return (
    <Container
      onClick={() => (!thumbtab && clickable ? setLightbox(currentIdx) : null)}
      variants={fade}
      key={`figure-${id}`}
      thumbtab={thumbtab}
      quantity={items.length}
      clickable={clickable}
    >
      {video ? (
        !thumbtab ? (
          <VideoMobileDesktopSwitch {...item} />
        ) : (
          <Image {...item} clickable={clickable} />
        )
      ) : (
        <Image {...item} clickable={clickable} />
      )}
    </Container>
  );
};

const Image = ({ id, image, thumbnail, init, imageAlt, clickable }) => {
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      const blurryImageLoad = new BlurryImageLoad();
      blurryImageLoad.load();
    }

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <>
      {clickable ? (
        <ImageContainer
          whileHover={hover.hover}
          whileTap={hover.tap}
          animate
          className="blurry-load"
          data-large={thumbnail}
          src={init}
          alt={imageAlt}
          key={`img-${id}`}
        />
      ) : (
        <ImageContainer
          animate
          className="blurry-load"
          data-large={image}
          src={init}
          alt={imageAlt}
          key={`img-${id}`}
        />
      )}
    </>
  );
};

const Video = ({ video, image, id }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setVideoLoaded(!videoLoaded);
  };

  return (
    <>
      <PlayButton
        key={`showcase-play-btn-container_${id}`}
        className="play-btn-container"
        variants={fade}
      >
        <svg
          key={`showcase-svg_${id}`}
          className="play-btn"
          viewBox="0 0 6.73 7.77"
        >
          <polygon
            key={`showcase-polygon_${id}`}
            points="6.73 3.88 0 0 0 7.77 6.73 3.88"
          />
        </svg>
      </PlayButton>
      <VideoContainer
        variants={fade}
        whileHover={hover.hover}
        whileTap={hover.tap}
        type="video"
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
          poster={image}
        >
          <source src={video} type="video/webm" key={`video-${id}`}></source>
        </video>
      </VideoContainer>
    </>
  );
};

const VideoMobileDesktopSwitch = (item) => {
  const { isMobile } = useDeviceDetect();
  return <>{!isMobile ? <Video {...item} /> : <Image {...item} />}</>;
};

export default Thumbnail;
