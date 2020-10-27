import { v4 as uuidv4 } from "uuid";

export const content = {
  "JeffMusgrave.com": {
    description: require("./markdown/code/01-ThisSite.md"),
    items: [
      {
        title: "Jeff Musgrave - Website Code",
        alt: "JeffMusgrave.com Website Code Example",
        image: require("../img/portfolioItems/code/JeffMusgraveSite.webp"),
        thumbnail: require("../img/portfolioItems/code/thumbs/JeffMusgraveSite_400.webp"),
        init: require("../img/portfolioItems/code/init/JeffMusgraveSite_init.webp"),
        id: uuidv4(),
      },
    ],
    links: [
      {
        title: "Github",
        url: "https://github.com/JeffMusgrave/jeff-musgrave-portfolio",
      },
    ],
  },
  "ML Pipeline": {
    description: require("./markdown/code/02-MachineLearning.md"),
    items: [
      {
        image: require("../img/portfolioItems/code/MLScripts.webp"),
        altimageAlt: "Machine Learning Video Pipeline",
        thumbnail: require("../img/portfolioItems/code/thumbs/MLScripts_400.webp"),
        init: require("../img/portfolioItems/code/init/MLScripts_init.webp"),
        id: uuidv4(),
      },
    ],
    internalLinks: [{ title: "Video Reel", link: "/video", tab: 0 }],
  },
};
