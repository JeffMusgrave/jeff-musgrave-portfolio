import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content-style-1 em-heading contact-container">
        <main>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1>
              <span>Contact</span>
            </h1>
          </motion.section>
          <article>
            <div className="contact-aside">
              <motion.aside
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2>Some Reason</h2>
                <p>
                  Qui ullamco adipisicing aliqua officia veniam consequat. Esse
                  aliqua excepteur aliqua reprehenderit irure officia ea qui.
                </p>
              </motion.aside>
            </div>

            <form
              id="contactform"
              className="contact-form"
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </div>
              <input type="text" name="_gotcha" className="gotcha" />
              <div className="form-email">
                <label htmlFor="mail">E-mail</label>
                <input
                  type="email"
                  id="mail"
                  name="user_email"
                  placeholder="yourname@email.com"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </div>
              <div className="form-message">
                <label htmlFor="msg">Message</label>
                <textarea
                  id="msg"
                  name="user_message"
                  rows="5"
                  placeholder="Type your message here."
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                ></textarea>
              </div>
              <input
                type="hidden"
                name="_next"
                value="https://www.jeffmusgrave.com"
              />
              <div className="form-button">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  submit
                </motion.button>
              </div>
            </form>
          </article>
        </main>
      </div>
    </>
  );
};

export default Contact;
