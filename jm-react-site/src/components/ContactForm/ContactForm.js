import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";

import { fadeSettings as fade } from "../../variables/variables";

import {
  Form,
  Gotcha,
  Name,
  Email,
  Message,
  Button,
  Errors,
  Thanks,
} from "./ContactForm.styled";

export default function ContactForm() {
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const info = useStoreState((state) => state.storeContent.info);

  const { register, handleSubmit, errors } = useForm();
  const [thanks, setThanks] = useState(false);
  const thanksMsg = () => {
    setThanks(!thanks);
  };

  const onSubmit = (data, e) => {
    axios({
      method: "POST",
      url: "https://formspree.io/xoqkdkdq",
      data: data,
    });

    e.target.reset();
    thanksMsg();
  };

  if (info.length > 0 && !thanks) {
    return (
      <>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
          id="contactform"
          className={`contact-form ${
            activeTab[info.indexOf("contact")] ? `` : `hidden`
          }`}
        >
          <Name>
            <label htmlFor="name">Name</label>
            <motion.input
              ref={register({
                required: true,
                pattern: {
                  value: /[A-Za-z]{2}/,
                  maxLength: 80,
                  message: "please type in a name",
                },
              })}
              variants={fade}
              type="text"
              id="name"
              name="user_name"
              placeholder="Your Name"
            />
          </Name>
          <Gotcha />
          <Email>
            <label htmlFor="mail">E-mail</label>
            <motion.input
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })}
              variants={fade}
              type="email"
              id="mail"
              name="user_email"
              placeholder="Your Email"
            />
          </Email>
          <Message>
            <label htmlFor="msg">Message</label>
            <motion.textarea
              ref={register({
                required: true,
                minLength: 5,
                maxLength: 5000,
                message: "please type in a message",
              })}
              variants={fade}
              id="msg"
              name="user_message"
              rows="5"
              placeholder="Your Message"
            ></motion.textarea>
          </Message>
          <input
            type="hidden"
            name="_next"
            value="https://www.jeffmusgrave.com"
          />
          <Button>
            <motion.button variants={fade}>submit</motion.button>
          </Button>
        </Form>
        <Errors>
          {<p>{errors.user_name && errors.user_name.message}</p>}
          {<p>{errors.user_email && errors.user_email.message}</p>}
          {<p>{errors.user_message && errors.user_message.message}</p>}
        </Errors>
      </>
    );
  } else if (info.length > 0 && thanks) {
    return (
      <Thanks>
        <h1>Thank you!</h1>
        <p>Your message has been sent!</p>
      </Thanks>
    );
  } else {
    return null;
  }
}
