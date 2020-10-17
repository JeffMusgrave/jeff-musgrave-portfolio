import React from "react";
import { useStoreState } from "easy-peasy";

import Boilerplate from "../Boilerplate/Boilerplate";
import Tabs from "../Tabs/Tabs";
import Showcase from "../Showcase/Showcase";
import Description from "../Description/Description";
import PageTitle from "../PageTitle/PageTitle";

import { Article, Blurb, ShowcasePos, TabPos, TitlePos } from "./Design.styled";

const Design = () => {
  const location = useStoreState((state) => state.storeContent.page);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);

  const thePage = () => {
    return (
      <>
        <PageTitle titlePos={TitlePos} />
        <Tabs tabPos={TabPos} />
        {activeTab.map(
          (e, idx) =>
            !!e && (
              <Showcase
                gallery={true}
                idx={idx}
                key={`showcase_${idx}`}
                showcasePos={ShowcasePos}
              />
            )
        )}
        <Article>
          {activeTab.map(
            (e, idx) =>
              !!e && <Description blurb={Blurb} key={`description_${idx}`} />
          )}
        </Article>
      </>
    );
  };
  return <Boilerplate key={`boilerplate-${location}`} thePage={thePage} />;
};

export default Design;
