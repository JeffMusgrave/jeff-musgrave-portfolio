import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import Tabs from "../Tabs/Tabs";
import Showcase from "../Showcase/Showcase";
import Boilerplate from "../Boilerplate/Boilerplate";
import Description from "../Description/Description";
import PageTitle from "../PageTitle/PageTitle";
import "../../utils/blurryLoad.css";

// import "./Video.css";
import { Container, Blurb, ShowcasePos, TabPos } from "./Video.styled";

import "../../styles/MobileInsetGrid.css";

const Video = () => {
  const location = useLocation().pathname.substr(1);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const pageName = location.charAt(0).toUpperCase() + location.slice(1);
  const thePage = () => {
    return (
      <>
        <PageTitle pageTitle={pageName} />
        <Container>
          <Tabs thumbtabs={true} tabPos={TabPos} />
          {activeTab.map(
            (e, idx) =>
              !!e && <Description blurb={Blurb} key={`description_${idx}`} />
          )}
        </Container>
        {activeTab.map(
          (e, idx) =>
            !!e && (
              <Showcase
                showcasePos={ShowcasePos}
                idx={idx}
                key={`showcase_${idx}`}
              />
            )
        )}
      </>
    );
  };
  return <Boilerplate key={`boilerplate-${location}`} thePage={thePage} />;
};

export default Video;
