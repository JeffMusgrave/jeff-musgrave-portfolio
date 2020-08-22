import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import "./Showcase.css";

// TEST SHOWCASE COMPONENT

// Need to restructure data to match design content js
// if content item only = 1 & is a video, then display large circle + triangle
// else follow gallery system

const Showcase = ({ activeTab, content, info }) => {
  const [videoOverlay, setVideoOverlay] = useState(false);
  const toggleVideoOverlay = () => {
    setVideoOverlay(!videoOverlay);
  };

  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });

  const {
    about: {
      portrait: { one, init, title, alt },
    },
  } = content;

  return (
    <>
      {activeTab
        .map((e, idx) =>
          e ? (
            <>
              <motion.aside
                variants={fade}
                key={`showcase-aside_${idx}`}
                className="preview-container video-prev-pos"
                onClick={toggleVideoOverlay}
              >
                <div
                  key={`showcase-play-btn-container_${idx}`}
                  className="play-btn-container"
                >
                  <svg
                    key={`showcase-svg_${idx}`}
                    xmlns="http://www.w3.org/2000/svg"
                    className="play-btn"
                    viewBox="0 0 6.73 7.77"
                  >
                    <polygon
                      key={`showcase-polygon_${idx}`}
                      points="6.73 3.88 0 0 0 7.77 6.73 3.88"
                    />
                  </svg>
                </div>
                <motion.div
                  variants={fade}
                  className="video-preview"
                  key={`showcase-video-preview_${idx}`}
                >
                  <VideoImagePrev
                    key={`showcase-videoimagepreview_${idx}`}
                    content={content[idx]}
                  />
                </motion.div>
              </motion.aside>
              {videoOverlay ? (
                <motion.div
                  variants={fade}
                  className="youtube-appear"
                  onClick={toggleVideoOverlay}
                  key={`showcase-youtube-appear_${idx}`}
                >
                  <div key={`showcase-close-btn_${idx}`} className="close-btn">
                    <div key={`showcase-line_${idx}`} className="line">
                      <span
                        key={`showcase-left-x_${idx}`}
                        className="left-x"
                      ></span>
                      <span
                        key={`showcase-right-x_${idx}`}
                        className="right-x"
                      ></span>
                    </div>
                  </div>

                  <div
                    key={`showcase-youtube-container_${idx}`}
                    className="youtube-container"
                  >
                    <iframe
                      key={`showcase-iframe_${idx}`}
                      width="560"
                      height="315"
                      title={`youtube-${content[idx].title}`}
                      src={`https://www.youtube.com/embed/${content[
                        idx
                      ].url.replace(
                        "https://www.youtube.com/watch?v=",
                        ""
                      )}?vq=hd1080`}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullscreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </motion.div>
              ) : null}
            </>
          ) : null
        )
        .filter((x) => x)}
    </>
  );
};

const Gallery = ({ activeTab, content, info }) => {
  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });
  return (
    <>
      {activeTab
        .map((e, idx) =>
          e ? (
            <div
              animate
              className={`showcase-gallery ${
                Object.keys(content[info[idx]]["items"]).length < 2
                  ? `showcase-one`
                  : `showcase-two`
              }`}
              key={`showcase-gallery_${idx}`}
            >
              <SRLWrapper options={options} key={`SRLWrapper_${idx}`}>
                {content[info[idx]]["items"].map(
                  ({ image, thumbnail, init, title, alt, id }) => (
                    <motion.figure
                      variants={fade}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      whileHover={hover.hover}
                      whileTap={hover.tap}
                      key={`figure-${id}`}
                    >
                      <a
                        href={image}
                        title={title}
                        key={`anchor-${id}`}
                        loading="lazy"
                        data-attribute="SRL"
                      >
                        <img
                          className="blurry-load"
                          data-large={thumbnail}
                          src={init}
                          alt={alt}
                          key={`img-${id}`}
                          loading="lazy"
                        />
                      </a>
                    </motion.figure>
                  )
                )}
              </SRLWrapper>
            </div>
          ) : null
        )
        .filter((x) => x)}
    </>
  );
};

const Showcase2 = ({ content }) => {
  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });

  const {
    about: {
      portrait: { one, init, title, alt },
    },
  } = content;
  return (
    <div className="preview-container about-prev-pos">
      <motion.div className="video-preview" loading="lazy" variants={fade}>
        <motion.img
          className="blurry-load"
          data-large={one}
          src={init}
          title={title}
          alt={alt}
          loading="lazy"
          variants={fade}
        />
      </motion.div>
    </div>
  );
};
