import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import FsLightbox from "fslightbox-react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Album } from "./Showcase.styled";

const Showcase = ({
  showcasePos,
  clickable = true,
  idx,
  gallery = false,
  fixedItem = false,
}) => {
  const location = useLocation().pathname.substring(1);
  const items = useStoreState((state) => state.storeContent.items);
  const lightbox = useStoreState((state) => state.storeContent.lightbox);
  const srcIndex = useStoreState((state) => state.storeContent.srcIndex);
  const quantity = items && items.length;
  const regexYT = /(youtube)/gi;

  if (clickable) {
    return (
      <>
        <FsLightbox
          toggler={lightbox}
          sources={items.map((e) => (e.url ? e.url : e.image))}
          sourceIndex={srcIndex}
          types={items.map((e) =>
            e.url ? (e.url.match(regexYT) ? "youtube" : null) : "image"
          )}
        />
        <Album
          showcasePos={showcasePos}
          location={location}
          quantity={quantity}
          key={`showcase-album_${idx}`}
          gallery={gallery}
        >
          {items.map((e) => (
            <Thumbnail
              clickable={clickable}
              item={e}
              key={`thumbnail_${e.id}`}
              idx={idx}
            />
          ))}
        </Album>
      </>
    );
  } else {
    return (
      <>
        <Album
          showcasePos={showcasePos}
          location={location}
          quantity={quantity}
          key={`showcase-album_0`}
          gallery={gallery}
        >
          <Thumbnail
            clickable={clickable}
            item={items[0]}
            key={`thumbnail_-${items[0].id}`}
            idx={idx}
          />
        </Album>
      </>
    );
  }
};

export default Showcase;
