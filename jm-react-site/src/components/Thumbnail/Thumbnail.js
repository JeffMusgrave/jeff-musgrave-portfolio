import React from "react";
import { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

import useHasMounted from "../../utils/useHasMounted";
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

const Thumbnail = ({
  item,
  thumbtab = false,
  clickable = true,
  thumbPos = null,
}) => {
  const items = useStoreState((state) => state.storeContent.items);
  const quantity = items ? items.length : 1;
  const setLightbox = useStoreActions(
    (actions) => actions.storeContent.setLightbox
  );
  const { video, id } = item;
  const currentIdx = items ? items.indexOf(item) : 0;

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  if (items) {
    return (
      <Container
        onClick={() =>
          !thumbtab && clickable ? setLightbox(currentIdx) : null
        }
        variants={fade}
        key={`figure-${id}`}
        thumbtab={thumbtab}
        quantity={quantity}
        mediaType={!!video}
        clickable={clickable}
        thumbPos={thumbPos}
      >
        {video ? (
          <Switch
            item={item}
            thumbtab={thumbtab}
            clickable={clickable}
            quantity={quantity}
          />
        ) : (
          <Image {...item} clickable={clickable} />
        )}
      </Container>
    );
  } else {
    return null;
  }
};

const Switch = ({ item, thumbtab, clickable, quantity }) => {
  return (
    <>
      {!thumbtab ? (
        <VideoMobileDesktopSwitch {...item} quantity={quantity} />
      ) : (
        <Image {...item} clickable={clickable} />
      )}
    </>
  );
};

const Image = ({ id, url, video, image, thumbnail, init, alt, clickable }) => {
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
      {!!video && !!url && (
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
      )}
      <ImageContainer
        whileHover={clickable ? hover.hover : hover.noHover}
        whileTap={hover.tap}
        animate
        className="blurry-load"
        data-large={clickable ? thumbnail : image}
        src={init}
        alt={alt}
        key={`img-${id}`}
        video={video}
      />
    </>
  );
};

const Video = ({ video, id, url, image }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setVideoLoaded(!videoLoaded);
  };

  return (
    <>
      {!!url && (
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
      )}

      <VideoContainer
        variants={fade}
        whileHover={hover.hover}
        whileTap={hover.tap}
        type="video"
      >
        <video
          playsInline
          autoPlay
          muted
          loop
          onLoadedData={onLoadedData}
          variants={fade}
          key={`vidprev-${id}`}
        >
          <source src={video} type="video/mp4" key={`video-${id}`}></source>
        </video>
      </VideoContainer>
    </>
  );
};

const VideoMobileDesktopSwitch = (item) => {
  const isMobile = useStoreState((state) => state.storeContent.mobileDevice);
  return <>{!isMobile ? <Video {...item} /> : <Image {...item} />}</>;
};

export default Thumbnail;
