import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import NavTabs from "../NavTabs/NavTabs";
import Showcase from "../Showcase/Showcase";
import Boilerplate from "../Boilerplate/Boilerplate";
import Description from "../Description/Description";
import PageTitle from "../PageTitle/PageTitle";
import "./Design.css";

const Design = () => {
  const location = useLocation().pathname.substr(1);
  const pageName = location.charAt(0).toUpperCase() + location.slice(1);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const thePage = () => {
    return (
      <>
        <PageTitle pageTitle={pageName} />
        <article>
          <NavTabs />
          {activeTab.map((e, idx) =>
            e ? (
              <React.Fragment key={`fragment-${idx}`}>
                <Showcase idx={idx} key={`showcase_${idx}`} />
                <Description key={`description_${idx}`} />
              </React.Fragment>
            ) : null
          )}
        </article>
      </>
    );
  };
  return <Boilerplate key={`boilerplate-${location}`} thePage={thePage} />;
};

export default Design;
