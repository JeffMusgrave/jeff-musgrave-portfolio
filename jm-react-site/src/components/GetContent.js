import { useStoreState } from "easy-peasy";

const GetContent = (info, idx, inputFunc, e = null) => {
  const content = useStoreState((state) => state.storeContent.pageContent);

  let { heading, subheading, subheadingtwo, description, items } = content[
    info[idx]
  ];
  let tabName = Object.keys(content)[idx] ? Object.keys(content)[idx] : null;
  const contentProps = {
    tabName,
    heading,
    subheading,
    subheadingtwo,
    description,
    items,
    e,
    idx,
  };
  return inputFunc({ ...contentProps });
};

export default GetContent;
