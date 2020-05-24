import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="content-style-1 em-heading contact-container">
      <main>
        <section>
          <h1>
            <span>Contact</span>
          </h1>
        </section>
        <article>
          <div className="contact-aside">
            <aside>
              <h2>Some Reasons to Contact Me</h2>
              <p>
                Qui ullamco adipisicing aliqua officia veniam consequat. Esse
                aliqua excepteur aliqua reprehenderit irure officia ea qui.
                Nostrud sunt eiusmod cillum esse amet officia cillum sit.
              </p>
            </aside>
          </div>

          <form className="contact-form" action="/placeholder" method="post">
            <div className="form-name">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-email">
              <label for="mail">E-mail</label>
              <input
                type="email"
                id="mail"
                name="user_email"
                placeholder="yourname@email.com"
              />
            </div>
            <div className="form-message">
              <label for="msg">Message</label>
              <textarea
                id="msg"
                name="user_message"
                rows="5"
                placeholder="Type your message here."
              ></textarea>
            </div>
            <div className="form-button">
              <button>submit</button>
            </div>
          </form>
        </article>
      </main>
    </div>
  );
};

export default Contact;
