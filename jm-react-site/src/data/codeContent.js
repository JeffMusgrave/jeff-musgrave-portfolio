import { v4 as uuidv4 } from "uuid";

export const content = {
  "JeffMusgrave.com": {
    description: require("./markdown/code/01-ThisSite.md"),
    items: [
      {
        title: "Jeff Musgrave - Website Code",
        alt: "JeffMusgrave.com Website Code Example",
        image: require("../img/portfolioItems/code/JeffMusgraveSite.jpg"),
        thumbnail: require("../img/portfolioItems/code/thumbs/JeffMusgraveSite_400.jpg"),
        init: require("../img/portfolioItems/code/init/JeffMusgraveSite_init.jpg"),
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
        image: require("../img/portfolioItems/code/MLScripts.jpg"),
        alt: "Machine Learning Video Pipeline",
        thumbnail: require("../img/portfolioItems/code/thumbs/MLScripts_400.jpg"),
        thumbnailAlt: "Machine Learning Video Pipeline",
        init: require("../img/portfolioItems/code/init/MLScripts_init.jpg"),
        id: uuidv4(),
      },
    ],
    internalLinks: [{ title: "Video Reel", link: "/video", tab: 0 }],
  },
};
