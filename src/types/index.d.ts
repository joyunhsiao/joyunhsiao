import { Icon } from "@heroicons/react";

type ProjectItemTechStack = {
  title: string;
  stacks: string[];
  idx: number;
};

export type ProjectItemType = {
  title: string;
  iconUrl: string;
  iconDescription: string;
  screenShotUrl: string;
  screenShotDescription: string;
  link: string;
  type: string;
  date: string;
  techStacks: ProjectItemTechStack[];
  keywords: string[];
  idx: number;
};

export type MenuType = {
  title: string;
  url: string;
  idx: number;
  icon: Icon;
};

export type FooterType = {
  socials: SocialType[];
  copyright: string;
};

export type SocialType = {
  name: string;
  href: string;
  icon: Icon;
  idx: number;
};