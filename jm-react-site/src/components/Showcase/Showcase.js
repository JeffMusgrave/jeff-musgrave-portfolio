import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
// import Thumbnail from "../Thumbnail/Thumbnail";
import "./Showcase.css";
import Gallery from "./Gallery";
// import { lightboxOptions as options } from "../../variables/variables";

const Showcase = ({ idx }) => {
  const location = useLocation().pathname.substring(1);
  const items = useStoreState((state) => state.storeContent.items);

  return (
    <div
      className="gallery-container"
      key={`showcase-gallery-container_${idx}`}
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
        key={`showcase-album_${idx}`}
      >
        <Gallery idx={idx} />
        {/* <SimpleReactLightbox>
          <SRLWrapper options={options} key={`SRLWrapper_${location}-${idx}`}>
            {items.map((e) => (
              <Thumbnail item={e} key={`thumbnail_${location}-${e.id}`} />
            ))}
          </SRLWrapper>
        </SimpleReactLightbox> */}
      </div>
    </div>
  );
};

export default Showcase;
