// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useStoreState } from "easy-peasy";
// import FsLightbox from "fslightbox-react";
// import Thumbnail from "../Thumbnail/Thumbnail";
// import "./Showcase.css";

// const Showcase = ({ idx }) => {
//   const location = useLocation().pathname.substring(1);
//   const items = useStoreState((state) => state.storeContent.items);
//   const [toggler, setToggler] = useState(false);
//   const regexYT = /(youtube)/gi;

//   return (
//     <>
//       <FsLightbox
//         toggler={toggler}
//         sources={items.map((e) => (e.url ? e.url : e.image))}
//         types={items.map((e) =>
//           e.url ? (e.url.match(regexYT) ? "youtube" : null) : "image"
//         )}
//       />
//       <div
//         className={
//           location !== `design`
//             ? `album ${
//                 items.length < 2
//                   ? `album-one`
//                   : `album-two ${items.length > 2 ? `fade-out` : ``}`
//               }`
//             : `gallery`
//         }
//         key={`showcase-album_${idx}`}
//       >
//         {items.map((e) => (
//           <Thumbnail
//             item={e}
//             key={`thumbnail_${e.id}`}
//             idx={idx}
//             setToggler={setToggler}
//             toggler={toggler}
//           />
//         ))}
//       </div>

//     </>
//   );
// };

// export default Showcase;
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import FsLightbox from "fslightbox-react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Album } from "./Showcase.styled";
// import "./Showcase.css";

const Showcase = ({ idx }) => {
  const location = useLocation().pathname.substring(1);
  const items = useStoreState((state) => state.storeContent.items);
  const quantity = items.length;
  const [toggler, setToggler] = useState(false);
  const regexYT = /(youtube)/gi;

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={items.map((e) => (e.url ? e.url : e.image))}
        types={items.map((e) =>
          e.url ? (e.url.match(regexYT) ? "youtube" : null) : "image"
        )}
      />
      <Album
        location={location}
        quantity={quantity}
        key={`showcase-album_${idx}`}
      >
        {items.map((e) => (
          <Thumbnail
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
