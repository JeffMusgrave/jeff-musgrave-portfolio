import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Thumbnail from "../Thumbnail/Thumbnail";
import "./Showcase.css";
import { lightboxOptions as options } from "../../variables/variables";

const Gallery = ({ idx }) => {
  const location = useLocation().pathname.substring(1);
  const items = useStoreState((state) => state.storeContent.items);
  const isMounted = useRef(null);

  useEffect(() => {
    // executed when component mounted

    isMounted.current = true;
    console.log("yessss" + isMounted.current);
    return () => {
      // executed when unmount
      isMounted.current = false;
      console.log("NOOOO" + isMounted.current);
    };
  }, []);

  // useEffect(() => {
  //   loadContent(location);
  //   // eslint-disable-next-line
  //   if (isMounted.current) {
  //     return () => {
  //       console.log("RESET");
  //       resetContent();
  //     };
  //   }
  // }, []);
  return (
    <SimpleReactLightbox>
      {isMounted && (
        <SRLWrapper options={options} key={`SRLWrapper_${location}-${idx}`}>
          {items.map((e) => (
            // <Thumbnail item={e} key={`thumbnail_${location}-${e.id}`} />
            <a
              href={e.image}
              title={e.title}
              key={`anchor-${e.id}`}
              data-attribute="SRL"
            >
              <img
                className="blurry-load"
                data-large={e.thumbnail}
                src={e.init}
                alt={e.imageAlt}
                key={`img-${e.id}`}
              />
            </a>
          ))}
        </SRLWrapper>
      )}
    </SimpleReactLightbox>
  );
};

export default Gallery;
