export const fadeSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const hoverSettings = {
  hover: {
    opacity: 1,
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

export const lightboxOptions = {
  settings: {
    lightboxTransitionTimingFunction: "easeInOut",
    slideAnimationType: "slide",
    lightboxTransitionSpeed: 0.4,
  },
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showThumbnailsButton: false,
  },
  caption: {
    captionFontFamily: "Barlow, sans-serif",
  },
  thumbnails: {
    thumbnailsGap: ".5em",
    thumbnailsSize: ["5em", "5em"],
  },
};
