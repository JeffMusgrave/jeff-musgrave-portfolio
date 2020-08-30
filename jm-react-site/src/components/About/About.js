import React, { useEffect, useState, useLayoutEffect } from "react";
import contentLoader from "../../data/aboutContent.js";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";
import ContactForm from "../ContactForm/ContactForm";
import Description from "../Description/Description";
import NavTabs from "../NavTabs/NavTabs";
import Showcase from "../Showcase/Showcase";
import "./About.css";

const Contact = () => {
  const [content, setContent] = useState({});
  const [activeTab, setActiveTab] = useState(
    Object.keys(contentLoader()).map((e, idx) => (idx === 0 ? 1 : 0))
  );

  const info = Object.keys(content);

  useLayoutEffect(() => {
    const getData = async () => {
      const data = await contentLoader([]);
      setContent(data);
    };
    getData();
  }, []);

  const tabDisplay = (id) => {
    setActiveTab(activeTab.map((e, idx) => (idx === id ? 1 : 0)));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theProps = { activeTab, content, info };

  if (info.length > 0) {
    const tabTest = info[activeTab.filter((e, idx) => idx)];
    return (
      <>
        <motion.section variants={fade}>
          <h1>
            <span>About</span>
          </h1>
        </motion.section>
        <article>
          {activeTab.map((e, idx) =>
            e ? (
              <>
                <div className="preview-container about-prev-pos">
                  <Showcase {...theProps} idx={idx} key={`showcase_${idx}`} />
                </div>

                {tabTest === "about" ? (
                  <Description
                    {...theProps}
                    idx={idx}
                    key={`description_${idx}`}
                  />
                ) : (
                  <ContactForm
                    activeTab={activeTab}
                    info={info}
                    key={`ContactForm_${idx}`}
                  />
                )}
              </>
            ) : null
          )}
          <NavTabs activeTab={activeTab} tabDisplay={tabDisplay} info={info} />
        </article>
      </>
    );
  } else {
    return null;
  }
};

// const Showcase = ({ content }) => {
//   useLayoutEffect(() => {
//     const blurryImageLoad = new BlurryImageLoad();
//     blurryImageLoad.load();
//   });

//   const {
//     about: {
//       portrait: { one, init, title, alt },
//     },
//   } = content;
//   return (
//     <div className="preview-container about-prev-pos">
//       <motion.div className="video-preview" loading="lazy" variants={fade}>
//         <motion.img
//           className="blurry-load"
//           data-large={one}
//           src={init}
//           title={title}
//           alt={alt}
//           loading="lazy"
//           variants={fade}
//         />
//       </motion.div>
//     </div>
//   );
// };

// const Bio = ({ activeTab, info, content }) => {
//   const desc = content.about.description.split("\n");
//   return (
//     <motion.div variants={fade} className="about-me">
//       <div>
//         {desc
//           .map((e, idx) => (
//             <motion.p variants={fade} key={`p-${idx}`}>
//               {e}
//             </motion.p>
//           ))
//           .filter((x) => x)}
//       </div>
//     </motion.div>
//   );
// };

export default Contact;
