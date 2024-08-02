import { v4 as uuidv4 } from "uuid";

export const content = {
  "ML Pipeline": {
    description: require("./markdown/code/01-MachineLearning.md"),
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
