import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import "../../styles/HomeStyle.css";
const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="frontpage content-style-2">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
              <Link to="/video">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.2426 25.9828L0.443602 6.18383L6.10046 0.526973L31.5563 25.9828L6.10046 51.4387L0.443603 45.7818L20.2426 25.9828Z"
                  className="chevron"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.4975 25.9828L21.6985 6.18383L27.3553 0.526973L52.8112 25.9828L27.3553 51.4387L21.6985 45.7818L41.4975 25.9828Z"
                  className="chevron"
                />
              </Link>
            </svg>
          </div>
        </motion.main>
      </div>
      <div className="home-bg-img"></div>
    </>
  );
};

export default Home;
