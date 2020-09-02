import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import NavTabs from "../NavTabs/NavTabs";
import Showcase from "../Showcase/Showcase";
import Boilerplate from "../Boilerplate/Boilerplate";
import Description from "../Description/Description";
import PageTitle from "../PageTitle/PageTitle";
import "../../utils/blurryLoad.css";
import "./Code.css";

const Code = () => {
  const location = useLocation().pathname.substr(1);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const returnFunction = () => {
    return (
      <>
        <PageTitle pageTitle={"Code"} />
        <article>
          <NavTabs thumbtab={false} />

          {activeTab.map((e, idx) =>
            e ? (
              <>
                <aside className="code-prev-pos" key={`code-aside-${idx}`}>
                  <Showcase idx={idx} key={`Showcase_${idx}`} />
                </aside>
                <Description key={`description_${idx}`} />
              </>
            ) : null
          )}
        </article>
      </>
    );
  };
  return (
    <Boilerplate
      key={`Boilerplate-${location}`}
      returnFunction={returnFunction}
    />
  );
};

export default Code;
