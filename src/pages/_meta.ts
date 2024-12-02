export default {
  index: {
    type: "page",
    title: "Home",
    display: "hidden",
    theme: {
      layout: "raw",
    },
  },
  vrc: {
    type: "menu",
    title: "VRChat",
    items: {
      index: {
        title: "About",
        href: "/vrc",
      },
      monoui: {
        title: "Mono UI",
        href: "/vrc/monoui",
      },
    },
  },
  booth: {
    type: "menu",
    title: "Booth.pm",
    items: {
      index: {
        title: "About",
        href: "/booth",
      },
    },
  },
  oss: {
    type: "menu",
    title: "Open Source",
    items: {
      index: {
        title: "About",
        href: "/oss",
      },
    },
  },
};
