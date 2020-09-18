import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import FsLightbox from "fslightbox-react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Album } from "./Showcase.styled";

const Showcase = ({ showcasePos, clickable, idx }) => {
  const location = useLocation().pathname.substring(1);
  const items = useStoreState((state) => state.storeContent.items);
  const [toggler, setToggler] = useState(false);
  const regexYT = /(youtube)/gi;
  console.log(items);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={items.map((e) => (e.url ? e.url : e.image))}
        types={items.map((e) =>
          e.url ? !!e.url.match(regexYT) && "youtube" : "image"
        )}
      />
      <Album
        showcasePos={showcasePos}
        location={location}
        quantity={items.length}
        key={`showcase-album_${idx}`}
      >
        {items.map((e) => (
          <Thumbnail
            clickable={clickable}
            item={e}
            key={`thumbnail_${e.id}`}
            idx={idx}
            setToggler={setToggler}
            toggler={toggler}
          />
        ))}
      </Album>
    </>
  );
};

export default Showcase;
