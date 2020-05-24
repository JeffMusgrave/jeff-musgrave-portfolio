import React from "react";
// import data from "../../data/designContent.json";
import "./Design.css";

const Design = () => {
  return (
    <div className="bgpad-block content-style-1 em-heading">
      <main>
        <section>
          <h1>
            <span>Design</span>
          </h1>
        </section>
        <article>
          <h2>Web Design</h2>
          <div className="gallery">
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
          </div>
          <h2>Print Design</h2>
          <div className="gallery">
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Design;
