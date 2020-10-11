import { v4 as uuidv4 } from "uuid";

export const content = {
  "JeffMusgrave.com": {
    description: require("./markdown/code/01-ThisSite.md"),
    items: [
      {
        title: "White Water — Style Pitch",
        alt: "Design for White Water ski resort",
        image: require("../img/portfolioItems/web/WhitewaterStyle.webp"),
        thumbnail: require("../img/portfolioItems/web/thumbs/WhitewaterStyle_200.webp"),
        init: require("../img/portfolioItems/web/init/WhitewaterStyle_init.webp"),
        id: uuidv4(),
      },
    ],
    links: [{ title: "Github", url: "https://github.com/" }],
  },
  "ML Pipeline": {
    description: require("./markdown/code/02-MachineLearning.md"),
    items: [
      {
        video: require("../img/portfolioItems/video/MLPipelinePreview.webm"),
        image: require("../img/portfolioItems/video/MLPipelineImage.webp"),
        imageAlt: "Machine Learning Video Pipeline",
        thumbnail: require("../img/portfolioItems/video/thumbs/MLPipeline_200.webp"),
        thumbnailAlt: "Machine Learning Video Pipeline",
        init: require("../img/portfolioItems/video/init/MLPipeline_init.webp"),
        url: "https://www.youtube.com/watch?v=Lht5ijva2Ko",
        id: uuidv4(),
      },
    ],
    links: [{ title: "Github", url: "https://github.com/" }],
    internalLinks: [{ title: "Video Reel", link: "/video", tab: 0 }],
  },
};
