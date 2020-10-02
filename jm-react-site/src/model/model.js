import { action } from "easy-peasy";
import allContent from "../data/content";

const contentModel = {
  pageNotFound: false,
  viewWidth: window.innerWidth <= 768,
  page: " ",
  pageContent: {},
  info: [],
  assignTab: null,
  activeTab: [],
  items: [],
  isLoaded: false,
  menu: false,
  lightbox: false,
  srcIndex: 0,
  mobileDevice: null,
  tabSuccess: false,

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
    if (state.pageContent && state.info.length > id) {
      state.items = state.pageContent[state.info[id]].items;
      state.activeTab = state.activeTab.map((e, idx) => (idx === id ? 1 : 0));
      state.tabSuccess = true;
    }
  }),

  setTabSuccess: action((state, payload) => {
    state.tabSuccess = payload;
  }),

  setAssignTab: action((state, payload) => {
    state.assignTab = payload;
  }),

  setNotFound: action((state) => {
    state.pageNotFound = true;
  }),
  setFound: action((state) => {
    state.pageNotFound = false;
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
    state.lightbox = !state.lightbox;
    state.srcIndex = payload;
  }),
};

export default contentModel;
