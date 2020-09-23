import { v4 as uuidv4 } from "uuid";
export const content = {
  Neural: {
    heading: "Machine Learning Video Pipeline",
    subheading:
      "Music videos and neural networks. Machine learning for the arts.",
    description:
      "0. labore aliqua voluptate et sunt amet. Velit aliquip ex consectetur aute dolore duis consectetur deserunt fugiat aute sint.",
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
  },
  Macro: {
    heading: "Macro Videography",
    subheading: "A galactic burst of color",
    subheadingtwo: "Through paint bubbles",
    description:
      "1. Ipsum  Esse tempor aliqua consectetur excepteur sit fugiat deserunt dolor. Dolore culpa sit dolor magna cillum ut eiusmod.",
    items: [
      {
        video: require("../img/portfolioItems/video/MacroVideoPreview.webm"),
        image: require("../img/portfolioItems/video/MacroVideoImage.webp"),
        imageAlt: "Macro video and color grading video",
        thumbnail: require("../img/portfolioItems/video/thumbs/MacroVideo_200.webp"),
        thumbnailAlt: "Macro Video Examples",
        init: require("../img/portfolioItems/video/init/MacroVideo_init.webp"),
        url: "https://www.youtube.com/watch?v=jNdTX5gTAws",
        id: uuidv4(),
      },
    ],
  },
  "Stop Motion": {
    heading: "Stop Motion",
    subheading: "Claymation",
    subheadingtwo: "Stop Motion Photography",
    description:
      "2. Duis sunt sunt magna ut veniam ipsum adipisicing aliquip qui cupidatat. Dolor tempor consectetur cillum excepteur officia laborum est tempor ullamco sit tempor.lorem ipsum dolor",
    items: [
      {
        video: require("../img/portfolioItems/video/HighwaymanPreview.webm"),
        image: require("../img/portfolioItems/video/HighwaymanImage.webp"),
        imageAlt: "Highwayman",
        thumbnail: require("../img/portfolioItems/video/thumbs/Highwayman_200.webp"),
        thumbnailAlt: "Highwayman",
        init: require("../img/portfolioItems/video/init/Highwayman_init.webp"),
        url: "https://www.youtube.com/watch?v=Cik7q3MVcxo",
        id: uuidv4(),
      },
    ],
  },
};
