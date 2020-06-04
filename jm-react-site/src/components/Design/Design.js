import React, { useState, useEffect, useLayoutEffect } from "react";
import imageLoader from "../../data/designContent.js";
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import "./Design.css";

const Design = (props) => {
  const [image, setImage] = useState([]);
  // const imageList = imgLoader();

  useLayoutEffect(() => {
    const getData = async () => {
      const data = await imageLoader([]);
      setImage(data);
    };
    getData();
  }, []);

  // const loadImages = () => {
  //   setImage(imageList);
  // };
  // useEffect(() => {
  //   loadImages();
  // });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const style = {
    hover: {
      opacity: 1,
      scale: 1.1,
    },
    tap: {
      scale: 0.9,
    },
  };
  const options = {
    settings: {
      lightboxTransitionTimingFunction: "easeInOut",
      slideAnimationType: "slide",
      lightboxTransitionSpeed: 0.4,
    },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false,
    },
    caption: {
      captionFontFamily: "Barlow, sans-serif",
    },
    thumbnails: {
      thumbnailsGap: ".5em",
      thumbnailsSize: ["5em", "5em"],
    },
  };

  return (
    <>
      <div className="bgpad-block content-style-1 em-heading">
        <main>
          <section>
            <h1>
              <span>Design</span>
            </h1>
          </section>
          <article>
            <h2>Web Design</h2>
            <div className="gallery">
              <SRLWrapper options={options}>
                {image.map(({ image, thumbnail, title, alt, id }) => (
                  <motion.figure
                    style={style.link}
                    whileHover={style.hover}
                    whileTap={style.tap}
                    key={`figure-${id}`}
                  >
                    <a href={image} data-attribute="SRL" key={`anchor-${id}`}>
                      <img
                        src={thumbnail}
                        title={title}
                        alt={alt}
                        key={`img-${id}`}
                      />
                    </a>
                  </motion.figure>
                ))}
              </SRLWrapper>
            </div>
            <h2>Print Design</h2>
            <div className="gallery">
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
              <figure></figure>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default Design;
