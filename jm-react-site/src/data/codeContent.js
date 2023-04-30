import { v4 as uuidv4 } from "uuid";

export const content = {
  "btcsecuritybudget.com": {
    description: require("./markdown/code/03-BtcSecurityBudget.md"),
    items: [
      {
        title: "BtcSecurityBudget.com",
        alt: "BtcSecurityBudget.com Website",
        image: require("../img/portfolioItems/code/btcsecuritybudget.jpg"),
        thumbnail: require("../img/portfolioItems/code/thumbs/btcsecuritybudget_400.jpg"),
        init: require("../img/portfolioItems/code/init/btcsecuritybudget_init.jpg"),
        id: uuidv4(),
      },
    ],
    links: [
      {
        title: "Github",
        url: "https://github.com/creamofthecoin/btcsecuritybudget",
      },
    ],
  },
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
