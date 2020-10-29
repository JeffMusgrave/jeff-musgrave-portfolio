import { v4 as uuidv4 } from "uuid";

export const content = {
  about: {
    description: require("./markdown/about/01-AboutMe.md"),
    items: [
      {
        image: require("../img/photos/jeff-studio-1.png"),
        alt: "Jeff Musgrave Portrait",
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
};
