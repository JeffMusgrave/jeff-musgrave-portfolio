import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const Boilerplate = ({ returnFunction }) => {
  let location = useLocation().pathname.substr(1);
  const content = useStoreState((state) => state.storeContent.pageContent);
  const activeTab = useStoreState((state) => state.storeContent.activeTab);
  const info = useStoreState((state) => state.storeContent.info);
  // const items = useStoreState((state) => state.storeContent.items);
  const loadContent = useStoreActions(
    (actions) => actions.storeContent.loadContent
  );
  const setActiveTab = useStoreActions(
    (actions) => actions.storeContent.setActiveTab
  );
  useEffect(() => {
    loadContent(location);
    // eslint-disable-next-line
  }, []);

  // const [activeTab, setActiveTab] = useState([]);
  const tabDisplay = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theProps = { tabDisplay, activeTab, content, info };

  if (info.length > 0) {
    // if (activeTab.length === 0) {
    //   setActiveTab(info.map((e, idx) => (idx === 0 ? 1 : 0)));
    // }
    return returnFunction(content, info, activeTab, theProps);
  } else {
    return null;
  }
};

export default Boilerplate;
