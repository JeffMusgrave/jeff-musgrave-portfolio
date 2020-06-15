const content = {
  "Album Art": {
    heading: "It's the first heading 3",
    description:
      "In this here thing I have some album art that you can clearly see because it was made by me and this sentence shall go on until it ends. Then the next sentence shall begin, only to end abruptly.",
    items: [
      {
        title: "I'm On Fire",
        alt: "I'm On Fire Cover Art",
        image: require("../img/covers/SV1_01_ImOnFire_1000.png"),
        thumbnail: require("../img/covers/SV1_01_ImOnFire_1000.png"),
        id: "1",
      },
      {
        title: "Life's What You Make It",
        alt: "Life's What You Make It Cover Art",
        image: require("../img/covers/SV1_02_LifesWhatYouMakeIt_1000.png"),
        thumbnail: require("../img/covers/SV1_02_LifesWhatYouMakeIt_1000.png"),
        id: "2",
      },
      {
        title: "Protection",
        alt: "Protection Cover Art",
        image: require("../img/covers/SV1_03_Protection_1000.png"),
        thumbnail: require("../img/covers/SV1_03_Protection_1000.png"),
        id: "3",
      },
    ],
  },
  Print: {
    heading: "Hey, a second heading 3",
    description:
      "2 In this here thing I have some print work that you can clearly see because it was made by me and this sentence shall go on until it ends. Then the next sentence shall begin, only to end abruptly.",
    items: [
      {
        title: "No Harm",
        alt: "No Harm Cover Art",
        image: require("../img/covers/SV1_04_NoHarm_1000.png"),
        thumbnail: require("../img/covers/SV1_04_NoHarm_1000.png"),
        id: "4",
      },
      {
        title: "Tilt",
        alt: "Tilt Cover Art",
        image: require("../img/covers/SV1_05_Tilt_1000.png"),
        thumbnail: require("../img/covers/SV1_05_Tilt_1000.png"),
        id: "5",
      },
      {
        title: "I Can't Give Everything Away",
        alt: "I Can't Give Everything Away Cover Art",
        image: require("../img/covers/SV1_06_ICantGiveEverythingAway_1000.png"),
        thumbnail: require("../img/covers/SV1_06_ICantGiveEverythingAway_1000.png"),
        id: "6",
      },
      {
        title: "The Line Begins To Blur",
        alt: "The Line Begins To Blur Cover Art",
        image: require("../img/covers/SV1_07_TheLineBeginsToBlur_1000.png"),
        thumbnail: require("../img/covers/SV1_07_TheLineBeginsToBlur_1000.png"),
        id: "7",
      },
    ],
  },
  Digital: {
    heading: "And a third heading 3",
    description:
      "3 In this here thing I have some digital art that you can clearly see because it was made by me and this sentence shall go on until it ends. Then the next sentence shall begin, only to end abruptly.",
    items: [
      {
        title: "Insurgentes",
        alt: "Insurgentes Cover Art",
        category: "albumArt3",
        image: require("../img/covers/SV1_08_Insurgentes_1000.png"),
        thumbnail: require("../img/covers/SV1_08_Insurgentes_1000.png"),
        id: "8",
      },
    ],
  },
};

function contentLoader() {
  return content;
}

export default contentLoader;