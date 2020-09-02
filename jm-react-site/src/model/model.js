import { action } from "easy-peasy";
import allContent from "../data/content";

const contentModel = {
  pageContent: {},
  info: [],
  items: [],
  activeTab: [],

  //actions
  loadContent: action((state, payload) => {
    state.pageContent = allContent[payload];
    state.info = Object.keys(state.pageContent);
    state.activeTab = state.info.map((e, idx) => (idx === 0 ? 1 : 0));
    state.items = state.pageContent[state.info[0]].items;
  }),
  setActiveTab: action((state, id) => {
    state.activeTab = state.activeTab.map((e, idx) => (idx === id ? 1 : 0));
    state.items = state.pageContent[state.info[id]].items;
  }),
};

export default contentModel;
