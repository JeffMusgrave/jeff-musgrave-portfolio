import React, { useState, useEffect } from "react";
import "./Footer.css";

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
    <footer>
      <div className="footer-items">
        <button onClick={fontSizeToggle}>fontsize</button>
      </div>
    </footer>
  );
}
