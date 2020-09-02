import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import { SRLWrapper } from "simple-react-lightbox";
import Thumbnail from "../Thumbnail/Thumbnail";
import BlurryImageLoad from "../../utils/blurryLoad";
import "./Showcase.css";
import { lightboxOptions as options } from "../../variables/variables";

const Showcase = ({ idx }) => {
  let location = useLocation().pathname.substring(1);
  const items = useStoreState((state) => state.storeContent.items);

  useLayoutEffect(() => {
    const blurryImageLoad = new BlurryImageLoad();
    blurryImageLoad.load();
  });
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
        <SRLWrapper options={options} key={`SRLWrapper_${idx}`}>
          {items.map((e) => (
            <Thumbnail item={e} key={`thumbnail_${e.id}`} />
          ))}
        </SRLWrapper>
      </div>
    </div>
  );
};

export default Showcase;
