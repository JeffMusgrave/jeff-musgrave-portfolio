import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Video.css";

function Switch({ isOn, ...props }) {
  const className = `testObj ${isOn ? "on" : "off"}`;

  return (
    <div className="grid">
      <motion.div animate className={className} {...props} />
      <div className="indexlevel"></div>
    </div>
  );
}

export default function Video() {
  const [isOn, setIsOn] = useState(false);

  return <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />;
}
