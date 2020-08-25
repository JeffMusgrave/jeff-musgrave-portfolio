const GetContent = (content, info, idx, inputFunc) => {
  let {
    heading,
    subheading,
    subheadingtwo,
    description,
    items,
    items: [{ video, image, imageAlt, thumbnail, thumbnailAlt, init, url, id }],
  } = content[info[idx]];
  const contentProps = {
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
  };
  return inputFunc({ ...contentProps });
};

export default GetContent;
