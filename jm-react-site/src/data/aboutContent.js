const content = {
  // about: {
  //   title: "Test",
  //   subTitle: "Subtitle",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis minima error corporis laudantium! Maxime, cum molestias atque odit, amet fuga doloremque esse enim temporibus aut ducimus eos, tempore consequatur? \nAs far as I'm aware, it was nobody's favorite in the game Maxime, cum molestias atque odit, amet fuga doloremque esse enim temporibus aut ducimus eos, tempore consequatur? Maxime, cum molestias atque odit, amet fuga doloremque esse enim temporibus aut ducimus eos, tempore consequatur?",
  //   portrait: {
  //     one: require("../img/photos/jeff-studio-1.png"),
  //     init: require("../img/photos/init/jeff-studio-1-init.jpg"),
  //     title: "Jeff Musgrave",
  //     alt: "Portrait of Jeff Musgrave",
  //   },
  // },
  // contact: "contact",

  about: {
    heading: "About me",
    subheading: "subheading Test",
    description:
      "ABOUT TEST In this here thing I have some print work that you can clearly see because it was made by me and this sentence shall go on until it ends. Then the next sentence shall begin, only to end abruptly.",
    items: [
      {
        image: require("../img/photos/jeff-studio-1.png"),
        imageAlt: "Jeff Musgrave Portrait",
        init: require("../img/photos/init/jeff-studio-1-init.jpg"),
        id: "0-0",
      },
    ],
  },
  contact: "contact",
};

function contentLoader() {
  return content;
}

export default contentLoader;
