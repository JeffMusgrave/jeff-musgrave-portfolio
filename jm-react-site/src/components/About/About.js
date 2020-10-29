import React from "react";
import { useStoreState } from "easy-peasy";

import Boilerplate from "../Boilerplate/Boilerplate";
import Tabs from "../Tabs/Tabs";
import Thumbnail from "../Thumbnail/Thumbnail";
import PageTitle from "../PageTitle/PageTitle";
import ContactForm from "../ContactForm/ContactForm";
import Description from "../Description/Description";

import { Album } from "../Showcase/Showcase.styled";
import {
  Container,
  Blurb,
  ShowcasePos,
  TabPos,
  ThumbPos,
  TitlePos,
} from "./About.styled";

const About = () => {
  const location = useStoreState((state) => state.storeContent.page);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const info = useStoreState((state) => state.storeContent.info);
  const content = useStoreState((state) => state.storeContent.pageContent);
  const theItem = content[info[0]] && content[info[0]]["items"][0];
  const viewWidth = useStoreState((state) => state.storeContent.viewWidth);

  const thePage = () => {
    return (
      <>
        <PageTitle
          pageTitle={activeTab[1] && `# Contact`}
          titlePos={TitlePos}
        />
        <Tabs tabPos={TabPos} />

        <Album quantity={1} showcasePos={ShowcasePos} thumbPos={ThumbPos}>
          <Thumbnail item={theItem} clickable={false} />
        </Album>

        <Container viewWidth={viewWidth} activeTab={activeTab}>
          {!!activeTab[0] && (
            <Description
              blurb={Blurb}
              key={`description_0`}
              staticDesc={content[info[0]]}
            />
          )}
          {!!activeTab[1] && <ContactForm key={`ContactForm_1`} />}
        </Container>
      </>
    );
  };
  return <Boilerplate key={`boilerplate-${location}`} thePage={thePage} />;
};

export default About;
