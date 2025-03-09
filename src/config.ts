import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://frostfoe.netlify.app/",
  author: "FrostFoe",
  profile: "https://frostfoe.netlify.app/",
  desc: "A blog dedicated to ethical hacking, cybersecurity news, and analysis.",
  title: "0day!",
  ogImage: "0day-og-image.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  editPost: {
    url: "https://github.com/FrostFoe/",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/FrostFoe",
    linkTitle: `FrostFoe on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/thnbangladesh",
    linkTitle: `FrostFoe on Facebook`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:frostfoe@gmail.com",
    linkTitle: `Send an email to FrostFoe`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/FrostFoe",
    linkTitle: `FrostFoe on Telegram`,
    active: true,
  },
];
