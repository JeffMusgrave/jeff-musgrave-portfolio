const GetContent = (content, info, idx, inputFunc) => {
  let {
    heading,
    subheading,
    subheadingtwo,
    description,
    items: [{ video, image, imageAlt, thumbnailAlt, init, url, id }],
  } = content[info[idx]];
  return inputFunc(
    {
      heading,
      subheading,
      subheadingtwo,
      description,
      video,
      image,
      imageAlt,
      thumbnailAlt,
      init,
      url,
      id,
    },
    idx
  );
};

export default GetContent;
