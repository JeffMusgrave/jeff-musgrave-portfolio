import React, { useState } from "react";
import data from "../data/designContent.json";

const Design = () => {
  const [activeTab, setActiveTab] = useState(
    data.map((e, idx) => (idx === 0 ? 1 : 0))
  );
  const tabDisplay = (id) => {
    setActiveTab(activeTab.map((e, idx) => (idx === id ? 1 : 0)));
  };

  return (
    <div>
      <h1>DesignWork</h1>
      {data.map((e, idx) => (
        <button key={idx} onClick={() => tabDisplay(idx)}>
          {data[idx].buttonName}
        </button>
      ))}
      <ul>
        {activeTab
          .map((e, idx) =>
            e ? (
              <li key={idx}>
                <h1>{data[idx].title}</h1>
                <p>{data[idx].description}</p>
              </li>
            ) : null
          )
          .filter((x) => x)}
      </ul>
    </div>
  );
};

export default Design;
