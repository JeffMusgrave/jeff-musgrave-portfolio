import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import Tabs from "../Tabs/Tabs";
import Showcase from "../Showcase/Showcase";
import Boilerplate from "../Boilerplate/Boilerplate";
import Description from "../Description/Description";
import PageTitle from "../PageTitle/PageTitle";
import { Article, Blurb, Content } from "./Design.styled";

// import "./Design.css";

const Design = () => {
  const location = useLocation().pathname.substr(1);
  const pageName = location.charAt(0).toUpperCase() + location.slice(1);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const thePage = () => {
    return (
      <>
        <PageTitle pageTitle={pageName} />
        <Article>
          <Tabs />
          {activeTab.map(
            (e, idx) =>
              !!e && (
                <React.Fragment key={`fragment-${idx}`}>
                  <Showcase idx={idx} key={`showcase_${idx}`} />
                  <Description blurb={Blurb} key={`description_${idx}`} />
                </React.Fragment>
              )
          )}
        </Article>
      </>
    );
  };
  return <Boilerplate key={`boilerplate-${location}`} thePage={thePage} />;
};

export default Design;
