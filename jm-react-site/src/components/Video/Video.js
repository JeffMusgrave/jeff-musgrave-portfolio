import React from "react";
import { useState } from "react";
// import { motion } from "framer-motion";
import data from "../../data/videoContent.json";
import "./Video.css";
import "./ThumbTabs.css";
import "./Showcase.css";
import "../../styles/ContentStyle.css";

function Switch({ isOn, ...props }) {
  // const className = `testObj ${isOn ? "on" : "off"}`;
  const [activeTab, setActiveTab] = useState(
    data.map((e, idx) => (idx === 0 ? 1 : 0))
  );
  const tabDisplay = (id) => {
    setActiveTab(activeTab.map((e, idx) => (idx === id ? 1 : 0)));
  };
  // <motion.main
  //   initial={props.fade.initial}
  //   animate={props.fade.animate}
  //   exit={props.fade.exit}
  //   variants={props.fade}
  // >



  return (
    <>
      <div className="showcase-content left-block content-style-1 em-heading">

        <main>
          {activeTab
            .map((e, idx) =>
              e ? (
                <>
                  <section>
                    <h1>
                      <span>{data[idx].title}</span>
                    </h1>
                  </section>

                  <article>
                    <h2>
                      {data[idx].subtitle}
                      <span>{data[idx].subtitle2}</span>
                    </h2>
                    <p>
                      <span>{data[idx].description}</span>
                    </p>
                  </article>
                </>
              ) : null
            )
            .filter((x) => x)}

          <nav className="thumbtabs">
            <ul>
              {data.map((e, idx) => (
                <li
                  type="button"
                  key={idx}
                  style={{ backgroundColor: data[idx].buttonName }}
                  onClick={() => tabDisplay(idx)}
                ></li>
              ))}
            </ul>
          </nav>

        </main>
        {activeTab
          .map((e, idx) =>
            e ? (
              <aside className="preview-container">
                <div className="video-preview">{data[idx].image}</div>
              </aside>
            ) : null
          )
          .filter((x) => x)}
      </div>
    </>
  );
}

export default function Video() {
  const [isOn, setIsOn] = useState(false);

  return <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />;
}
