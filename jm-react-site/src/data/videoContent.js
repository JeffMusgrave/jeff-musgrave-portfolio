import { v4 as uuidv4 } from "uuid";
export const content = {
  "Machine Learning": {
    description: require("./markdown/video/01-StyleTransfer.md"),
    items: [
      {
        video: require("../img/portfolioItems/video/MLPipelinePreview.mp4"),
        image: require("../img/portfolioItems/video/MLPipelineImage.jpg"),
        alt: "Machine Learning Video Pipeline",
        thumbnail: require("../img/portfolioItems/video/thumbs/MLPipeline_200.jpg"),
        thumbnailAlt: "Machine Learning Video Pipeline",
        init: require("../img/portfolioItems/video/init/MLPipeline_init.jpg"),
        url: "https://www.youtube.com/watch?v=Lht5ijva2Ko",
        id: uuidv4(),
      },
    ],
    internalLinks: [{ title: "Pipeline", link: "/code", tab: 1 }],
  },
  "Macro Video": {
    description: require("./markdown/video/02-MacroVideo.md"),
    items: [
      {
        video: require("../img/portfolioItems/video/MacroVideoPreview.mp4"),
        image: require("../img/portfolioItems/video/MacroVideoImage.jpg"),
        alt: "Macro video and color grading video",
        thumbnail: require("../img/portfolioItems/video/thumbs/MacroVideo_200.jpg"),
        thumbnailAlt: "Macro Video Examples",
        init: require("../img/portfolioItems/video/init/MacroVideo_init.jpg"),
        url: "https://www.youtube.com/watch?v=jNdTX5gTAws",
        id: uuidv4(),
      },
    ],
  },
  Claymation: {
    description: require("./markdown/video/03-StopMotion.md"),
    items: [
      {
        video: require("../img/portfolioItems/video/HighwaymanPreview.mp4"),
        image: require("../img/portfolioItems/video/HighwaymanImage.jpg"),
        alt: "Highwayman",
        thumbnail: require("../img/portfolioItems/video/thumbs/Highwayman_200.jpg"),
        thumbnailAlt: "Highwayman",
        init: require("../img/portfolioItems/video/init/Highwayman_init.jpg"),
        url: "https://www.youtube.com/watch?v=Cik7q3MVcxo",
        id: uuidv4(),
      },
    ],
  },
};
