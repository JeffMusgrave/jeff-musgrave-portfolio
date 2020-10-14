import React from "react";
import { useStoreState } from "easy-peasy";

import Boilerplate from "../Boilerplate/Boilerplate";
import Tabs from "../Tabs/Tabs";
import Showcase from "../Showcase/Showcase";
import Description from "../Description/Description";
import PageTitle from "../PageTitle/PageTitle";

import { Container, Blurb, ShowcasePos, TabPos, TitlePos } from "./Code.styled";

const Code = () => {
  const location = useStoreState((state) => state.storeContent.page);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const info = useStoreState((state) => state.storeContent.info);

  const thePage = () => {
    return (
      <>
        <PageTitle titlePos={TitlePos} />
        <Tabs tabPos={TabPos} />
        <Container>
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

export default Code;
