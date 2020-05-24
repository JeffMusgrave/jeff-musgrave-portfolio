import React from "react";
import "./Home.css";
import "../../styles/HomeStyle.css";

const Intro = (props) => {
  return (
    <>
      <div className="frontpage content-style-2">
        <main>
          <section>
            <h1>
              <span>Technically</span> <span>Creative</span>
            </h1>
          </section>
          <article>
            <h2>
              Design, Audio, and Video.
              <span>find your blah blah blah here.</span>
            </h2>
          </article>
          <div className="home-chevron">
            <svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <a href="./video.html">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.2426 25.9828L0.443602 6.18383L6.10046 0.526973L31.5563 25.9828L6.10046 51.4387L0.443603 45.7818L20.2426 25.9828Z"
                  className="chevron"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.4975 25.9828L21.6985 6.18383L27.3553 0.526973L52.8112 25.9828L27.3553 51.4387L21.6985 45.7818L41.4975 25.9828Z"
                  className="chevron"
                />
              </a>
            </svg>
          </div>
        </main>
      </div>
      <div className="home-bg-img"></div>
    </>
  );
};

export default Intro;
