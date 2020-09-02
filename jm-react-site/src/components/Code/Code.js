import React from "react";
import NavTabs from "../NavTabs/NavTabs";
import Showcase from "../Showcase/Showcase";
import Boilerplate from "../Boilerplate/Boilerplate";
import { motion } from "framer-motion";
import Description from "../Description/Description";
import "../../utils/blurryLoad.css";
import { fadeSettings as fade } from "../../variables/variables";
import "./Code.css";

const Code = () => {
  const returnFunction = (content, info, activeTab, theProps) => {
    return (
      <>
        <motion.section variants={fade}>
          <h1>
            <span>Code</span>
          </h1>
        </motion.section>
        <article>
          <NavTabs {...theProps} thumbtab={false} />

          {activeTab.map((e, idx) =>
            e ? (
              <>
                <aside className="code-prev-pos" key={`code-aside-${idx}`}>
                  <Showcase
                    content={content}
                    info={info}
                    idx={idx}
                    activeTab={activeTab}
                  />
                </aside>
                <Description
                  {...theProps}
                  idx={idx}
                  key={`description_${idx}`}
                />
              </>
            ) : null
          )}
        </article>
      </>
    );
  };
  return <Boilerplate returnFunction={returnFunction} />;
};

export default Code;
