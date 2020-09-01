import { action } from "easy-peasy";
import allContent from "../data/content";

// console.log(allContent["code"]);
const contentModel = {
  pageContent: {},
  // activeTab: [],
  //actions
  loadContent: action((state, payload) => {
    // console.log(payload);
    // console.log(state);
    // console.log(allContent[payload]);
    state.pageContent = allContent[payload];
  }),
  // setActiveTab: action((state, payload) => {
  //   Object.keys(state.pageContent).map((e, idx) => (idx === 0 ? 1 : 0));
  // }),
};

export default contentModel;
