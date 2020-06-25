import React from "react";

export default function ContactForm({ activeTab, info }) {
  if (info.length > 0) {
    return (
      <form
        id="contactform"
        className={`contact-form ${
          activeTab[info.indexOf("contact")] ? `` : `hidden`
        }`}
        action="https://formspree.io/xoqkdkdq"
        method="POST"
      >
        <div className="form-name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Your Name"
          />
        </div>
        <input type="text" name="_gotcha" className="gotcha" />
        <div className="form-email">
          <label htmlFor="mail">E-mail</label>
          <input
            type="email"
            id="mail"
            name="user_email"
            placeholder="Your Email"
          />
        </div>
        <div className="form-message">
          <label htmlFor="msg">Message</label>
          <textarea
            id="msg"
            name="user_message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://www.jeffmusgrave.com"
        />
        <div className="form-button">
          <button>submit</button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
