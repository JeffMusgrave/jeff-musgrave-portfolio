import React, { useState, useEffect } from "react";
import { fadeSettings as fade } from "../../variables/variables";

import { CyclingText } from "./Home.styled";

const Cycler = ({ skills }) => {
  const [skillIdx, setSkillIdx] = useState(0);
  useEffect(() => {
    // Move on to the next message every `n` milliseconds
    let timeout;
    if (skillIdx < skills.length - 1) {
      timeout = setTimeout(() => setSkillIdx(skillIdx + 1), 1500);
    } else if (skillIdx === skills.length - 1) {
      timeout = setTimeout(() => setSkillIdx(0), 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [skills, skillIdx]);

  return (
    <>
      {skills.map(
        (e, idx) =>
          skillIdx === idx && (
            <CyclingText variants={fade}>{skills[idx]}</CyclingText>
          )
      )}
    </>
  );
};

export default Cycler;
