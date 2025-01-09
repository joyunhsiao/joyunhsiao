import { GithubIcon, LinkedInIcon } from "@/icons";
import { FooterType } from "@/types";

const footer: FooterType = {
  copyright: "2025 Jo Yun Hsiao. All rights reserved. No Cookies.",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/joyunhsiao",
      icon: GithubIcon,
      idx: 0
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jo-yun-hsiao",
      icon: LinkedInIcon,
      idx: 1
    },
  ],
};

export default footer;