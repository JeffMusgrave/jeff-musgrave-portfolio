import { action } from "easy-peasy";
import allContent from "../data/content";

const contentModel = {
  viewWidth: window.innerWidth <= 768,
  page: " ",
  pageContent: {},
  info: [],
  assignTab: -1,
  activeTab: [],
  items: [],
  menu: false,
  lightbox: false,
  srcIndex: 0,
  mobileDevice: null,

  //actions
  loadContent: action((state, payload) => {
    state.pageContent = allContent[payload];
    state.info = Object.keys(state.pageContent);
    state.activeTab = state.info.map((e, idx) => (idx === 0 ? 1 : 0));
    state.items = state.pageContent[state.info[0]].items;
  }),

  resetContent: action((state) => {
    state.pageContent = {};
    state.info = [];
    state.activeTab = [];
    state.items = [];
  }),

  setActiveTab: action((state, id) => {
    if (state.pageContent && state.info.length > id) {
      state.items = state.pageContent[state.info[id]].items;
      state.activeTab = state.activeTab.map((e, idx) => (idx === id ? 1 : 0));

      if (state.assignTab !== -1) {
        state.assignTab = -1;
      }
    }
  }),

  setAssignTab: action((state, payload) => {
    state.assignTab = payload;
  }),

  setViewWidth: action((state, payload) => {
    state.viewWidth = payload;
  }),

  setMenu: action((state, payload) => {
    state.menu = payload;
  }),

  setPage: action((state, payload) => {
    state.page = payload;
  }),

  setMobileDevice: action((state, payload) => {
    state.mobileDevice = payload;
  }),

  setLightbox: action((state, payload) => {
    state.srcIndex = payload;
    state.lightbox = !state.lightbox;
  }),
};

export default contentModel;
