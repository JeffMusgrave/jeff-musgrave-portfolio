import React from "react";
import { motion } from "framer-motion";
import { fadeSettings as fade } from "../../variables/variables";

export default function ContactForm({ activeTab, info }) {
  if (info.length > 0) {
    return (
      <motion.form
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
        id="contactform"
        className={`contact-form ${
          activeTab[info.indexOf("contact")] ? `` : `hidden`
        }`}
        action="https://formspree.io/xoqkdkdq"
        method="POST"
      >
        <div className="form-name">
          <label htmlFor="name">Name</label>
          <motion.input
            variants={fade}
            type="text"
            id="name"
            name="user_name"
            placeholder="Your Name"
          />
        </div>
        <input type="text" name="_gotcha" className="gotcha" />
        <div className="form-email">
          <label htmlFor="mail">E-mail</label>
          <motion.input
            variants={fade}
            type="email"
            id="mail"
            name="user_email"
            placeholder="Your Email"
          />
        </div>
        <div className="form-message">
          <label htmlFor="msg">Message</label>
          <motion.textarea
            variants={fade}
            id="msg"
            name="user_message"
            rows="5"
            placeholder="Your Message"
          ></motion.textarea>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://www.jeffmusgrave.com"
        />
        <div className="form-button">
          <motion.button variants={fade}>submit</motion.button>
        </div>
      </motion.form>
    );
  } else {
    return null;
  }
}
