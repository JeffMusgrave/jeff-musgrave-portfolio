import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// import { motion } from "framer-motion";
import { SRLWrapper } from "simple-react-lightbox";
import GetContent from "../GetContent";
import Thumbnail from "../Thumbnail/Thumbnail";
import BlurryImageLoad from "../../utils/blurryLoad";
import "./Showcase.css";
import { lightboxOptions as options } from "../../variables/variables";

const Showcase = ({ content, info, idx }) => {
  let location = useLocation().pathname.substring(1);

  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });
  console.log(location);
  const galleryContent = (contentProps) => {
    const { items, id } = contentProps;

    return (
      <div
        className="gallery-container"
        key={`showcase-gallery-container_${id}`}
      >
        <div
          className={
            location !== `design`
              ? `album ${
                  items.length < 2
                    ? `album-one`
                    : `album-two ${items.length > 2 ? `fade-out` : ``}`
                }`
              : `gallery`
          }
          key={`showcase-album_${id}`}
        >
          <SRLWrapper options={options} key={`SRLWrapper_${id}`}>
            {items.map((e) => (
              <Thumbnail item={e} items={items} key={`thumbnail_${id}`} />
            ))}
          </SRLWrapper>
        </div>
      </div>
    );
  };

  return GetContent(content, info, idx, galleryContent);
};

export default Showcase;
