import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import Tabs from "../Tabs/Tabs";
import Showcase from "../Showcase/Showcase";
import Boilerplate from "../Boilerplate/Boilerplate";
import PageTitle from "../PageTitle/PageTitle";
import ContactForm from "../ContactForm/ContactForm";
import Description from "../Description/Description";
// import "./About.css";
import { Container, Blurb, ShowcasePos } from "./About.styled";

const Contact = () => {
  const location = useLocation().pathname.substr(1);
  const pageName = location.charAt(0).toUpperCase() + location.slice(1);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const info = useStoreState((state) => state.storeContent.info);
  const content = useStoreState((state) => state.storeContent.pageContent);

  const thePage = () => {
    return (
      <>
        <PageTitle key={`pagetitle`} pageTitle={pageName} />

        <Showcase
          clickable={false}
          showcasePos={ShowcasePos}
          fixedItem={content[info[0]]["items"][0]}
          idx={0}
          key={`showcase_0`}
        />

        <Container>
          <Tabs />
          {activeTab[0] && <Description blurb={Blurb} key={`description_0`} />}
          {activeTab[1] && <ContactForm key={`ContactForm_1`} />}
          {/* {activeTab.map((e, idx) =>
            idx === 0 ? (
              <Description blurb={Blurb} key={`description_${idx}`} />
            ) : (
              !!idx === 1 && <ContactForm key={`ContactForm_${idx}`} />
            )
          )} */}
        </Container>
      </>
    );
  };
  return <Boilerplate key={`boilerplate-${location}`} thePage={thePage} />;
};

export default Contact;
