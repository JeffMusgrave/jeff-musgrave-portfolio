const GetContent = (content, info, idx, inputFunc, e = null) => {
  let {
    heading,
    subheading,
    subheadingtwo,
    description,
    items,
    items: [{ video, image, imageAlt, thumbnail, thumbnailAlt, init, url, id }],
  } = content[info[idx]];
  let tabName = Object.keys(content)[idx] ? Object.keys(content)[idx] : null;
  console.log(tabName);
  console.log(e);
  const contentProps = {
    tabName,
    heading,
    subheading,
    subheadingtwo,
    description,
    items,
    video,
    image,
    imageAlt,
    thumbnail,
    thumbnailAlt,
    init,
    url,
    id,
    e,
  };
  return inputFunc({ ...contentProps });
};

export default GetContent;
