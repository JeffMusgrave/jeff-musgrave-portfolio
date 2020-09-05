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
  const isLoaded = useStoreState((state) => state.storeContent.isLoaded);
  // let loadIt = false;
  // const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  // const yourFunction = async () => {
  //   await delay(5000).then(() => {
  //     loadIt = true;
  //     console.log("Waited 5s");
  //     console.log("it's: " + loadIt);
  //   });
  // };

  // useEffect(() => {
  //   yourFunction();
  // });

  // const isMounted = useRef(null);

  // useEffect(() => {
  //   // executed when component mounted

  //   isMounted.current = true;
  //   console.log("yessss" + isMounted.current);
  //   return () => {
  //     // executed when unmount
  //     isMounted.current = false;
  //     console.log("NOOOO" + isMounted.current);
  //   };
  // }, []);

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
    <React.Fragment key={`Gallery_${location}-${idx}`}>
      {isLoaded && (
        <SimpleReactLightbox key={`SRL_${location}-${idx}`}>
          <SRLWrapper options={options} key={`SRLWrapper_${location}-${idx}`}>
            {items.map((e) => (
              <a
                href={e.image}
                title={e.title}
                key={`anchor-${e.id}`}
                data-attribute="SRL"
              >
                <img
                  data-large={e.thumbnail}
                  src={e.init}
                  alt={e.imageAlt}
                  key={`img-${e.id}`}
                />
              </a>
            ))}
          </SRLWrapper>
        </SimpleReactLightbox>
      )}
    </React.Fragment>
  );
};

export default Gallery;
