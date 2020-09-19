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

  const thePage = () => {
    const tabTest = info[activeTab.filter((e, idx) => idx)];
    console.log(tabTest);
    return (
      <>
        <PageTitle key={`pagetitle`} pageTitle={pageName} />
        {activeTab.map(
          (e, idx) =>
            !!e && (
              <Showcase
                clickable={false}
                showcasePos={ShowcasePos}
                idx={idx}
                key={`showcase_${idx}`}
              />
            )
        )}
        <Container>
          <Tabs />
          {activeTab.map((e, idx) =>
            !!e && tabTest === "about" ? (
              <Description blurb={Blurb} key={`description_${idx}`} />
            ) : (
              <p>TEST</p>
              // <ContactForm key={`ContactForm_${idx}`} />
            )
          )}
        </Container>
      </>
    );
  };
  return <Boilerplate key={`boilerplate-${location}`} thePage={thePage} />;
};

export default Contact;

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useStoreState } from "easy-peasy";
// import NavTabs from "../NavTabs/NavTabs";
// import Showcase from "../Showcase/Showcase";
// import Boilerplate from "../Boilerplate/Boilerplate";
// import Description from "../Description/Description";
// import PageTitle from "../PageTitle/PageTitle";
// //
// import "./About.css";

// const About = () => {
//   const location = useLocation().pathname.substr(1);
//   const pageName = location.charAt(0).toUpperCase() + location.slice(1);
//   const activeTab = useStoreState((state) => state.storeContent.activeTab);

//   // useEffect(() => {
//   //   console.log("CODE MOUNT");
//   //   return () => {
//   //     console.log("CODE unmount");
//   //   };
//   // });

//   const thePage = () => {
//     return (
//       <>
//         <PageTitle key={`pagetitle`} pageTitle={pageName} />
//         <article>
//           <NavTabs />

//           {activeTab.map((e, idx) =>
//             e ? (
//               <React.Fragment key={`fragment-${idx}`}>
//                 <aside className="code-prev-pos" key={`code-aside-${idx}`}>
//                   <Showcase idx={idx} key={`showcase_${idx}`} />
//                 </aside>
//                 <Description key={`description_${idx}`} />
//               </React.Fragment>
//             ) : null
//           )}
//         </article>
//       </>
//     );
//   };
//   return <Boilerplate key={`boilerplate-${location}`} thePage={thePage} />;
// };

// export default About;
