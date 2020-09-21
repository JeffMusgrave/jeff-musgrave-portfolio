import { v4 as uuidv4 } from "uuid";

export const content = {
  about: {
    heading: "About me",
    subheading: "subheading Test",
    description:
      "ABOUT TEST In this here thing I have some print work that you can clearly see because it was made by me and this sentence shall go on until it ends. Then the next sentence shall begin, only to end abruptly.",
    items: [
      {
        image: require("../img/photos/jeff-studio-1.png"),
        imageAlt: "Jeff Musgrave Portrait",
        init: require("../img/photos/init/jeff-studio-1-init.jpg"),
        id: uuidv4(),
      },
    ],
  },
  contact: {
    tabContent: "ContactForm",
    items: [
      {
        image: "0",
      },
    ],
  },
  cv: {
    link: "http://www.jeffmusgrave.com",
    items: [
      {
        image: "0",
      },
    ],
  },
};
