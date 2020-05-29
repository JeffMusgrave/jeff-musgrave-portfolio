import React, { useState, useEffect } from "react";
import imgLoader from "../../data/designContent.js";
import { SRLWrapper } from "simple-react-lightbox";
import "./Design.css";

const Design = (props) => {
  const [image, setImage] = useState([]);

  const imageList = imgLoader();

  const loadImages = () => {
    setImage(imageList);
  };

  useEffect(() => {
    loadImages();
  });


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
              <SRLWrapper>
                {image.map(({ fsImage, thumbnail, title, alt, id }) => (
                  <figure key={`figure-${id}`}>
                    <a href={fsImage} data-attribute="SRL" key={`anchor-${id}`}>
                      <img src={thumbnail} title={title} alt={alt} key={`img-${id}`} />
                    </a>
                  </figure>
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
