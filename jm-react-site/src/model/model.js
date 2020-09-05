import { action } from "easy-peasy";
import allContent from "../data/content";

const contentModel = {
  pageNotFound: false,
  pageContent: {},
  info: [],
  activeTab: [],
  items: [],
  isloaded: false,

  //actions
  loadContent: action((state, payload) => {
    state.pageContent = allContent[payload];
    state.info = Object.keys(state.pageContent);
    state.activeTab = state.info.map((e, idx) => (idx === 0 ? 1 : 0));
    state.items = state.pageContent[state.info[0]].items;
    state.isLoaded = true;
  }),
  resetContent: action((state) => {
    state.pageContent = {};
    state.info = [];
    state.activeTab = [];
    state.items = [];
    state.isLoaded = false;
  }),

  setActiveTab: action((state, id) => {
    state.activeTab = state.activeTab.map((e, idx) => (idx === id ? 1 : 0));
    state.items = state.pageContent[state.info[id]].items;
  }),

  setNotFound: action((state) => {
    state.pageNotFound = true;
  }),
  setFound: action((state) => {
    state.pageNotFound = false;
  }),
};

export default contentModel;
