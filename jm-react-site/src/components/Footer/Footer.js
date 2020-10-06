import React, { useState, useEffect } from "react";
import { Container, FontToggle } from "./Footer.styled";
import { fadeSettings as fade } from "../../variables/variables";

export default function Footer() {
  const [fontScale, setFontScale] = useState(false);
  const fontBaseLine = !fontScale ? "16px" : "24px";

  const fontSizeToggle = () => {
    setFontScale(!fontScale);
  };
  useEffect(() => {
    document.documentElement.style.fontSize = fontBaseLine;
  });

  return (
    <Container>
      <FontToggle
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={fontSizeToggle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.28 14.11">
          <path
            d="M5.76,11.44,5.4,10.26a.06.06,0,0,0-.06,0H2.39s0,0-.06,0L2,11.44a.14.14,0,0,1-.15.12H.3a.18.18,0,0,1-.11,0,.18.18,0,0,1,0-.13L2.77,3.28a.16.16,0,0,1,.16-.12H4.81A.15.15,0,0,1,5,3.28l2.59,8.11a.13.13,0,0,1,0,.06c0,.07,0,.11-.13.11H5.92A.16.16,0,0,1,5.76,11.44ZM2.81,8.91H4.92s.07,0,0-.08L3.89,5.27s0,0,0,0,0,0,0,0L2.76,8.83C2.75,8.88,2.77,8.91,2.81,8.91Z"
            transform="translate(-0.17)"
          />
          <path
            d="M19.41,13.9l-.6-2s-.06-.08-.1-.08h-5s-.07,0-.1.08l-.58,2a.26.26,0,0,1-.27.21H10.25a.26.26,0,0,1-.19-.07.26.26,0,0,1,0-.22L14.4.2a.25.25,0,0,1,.26-.2h3.16a.25.25,0,0,1,.26.2l4.36,13.62a.3.3,0,0,1,0,.1c0,.12-.08.19-.23.19H19.68A.26.26,0,0,1,19.41,13.9ZM14.46,9.65H18c.08,0,.11,0,.08-.12l-1.81-6c0-.06,0-.08-.06-.07s-.05,0-.06.07l-1.77,6C14.36,9.61,14.39,9.65,14.46,9.65Z"
            transform="translate(-0.17)"
          />
        </svg>
      </FontToggle>
    </Container>
  );
}
