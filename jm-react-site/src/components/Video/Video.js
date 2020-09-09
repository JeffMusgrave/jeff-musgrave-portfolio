import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import NavTabs from "../NavTabs/NavTabs";
import Showcase from "../Showcase/Showcase";
import Boilerplate from "../Boilerplate/Boilerplate";
import Description from "../Description/Description";
import PageTitle from "../PageTitle/PageTitle";
import "../../utils/blurryLoad.css";

import "./Video.css";

import "../../styles/MobileInsetGrid.css";

const Video = () => {
  const location = useLocation().pathname.substr(1);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const pageName = location.charAt(0).toUpperCase() + location.slice(1);
  const thePage = () => {
    return (
      <>
        <div className="video-desc-nav">
          <PageTitle pageTitle={pageName} />
          <NavTabs thumbtabs={true} />
          {activeTab.map((e, idx) =>
            e ? (
              <React.Fragment key={`desc-fragment-${idx}`}>
                <Description key={`description_${idx}`} />
              </React.Fragment>
            ) : null
          )}
        </div>
        {activeTab.map((e, idx) =>
          e ? (
            <aside className="video-prev-pos" key={`showcase-fragment-${idx}`}>
              <Showcase idx={idx} key={`showcase_${idx}`} />
            </aside>
          ) : null
        )}
      </>
    );
  };
  return <Boilerplate key={`boilerplate-${location}`} thePage={thePage} />;
};

export default Video;
