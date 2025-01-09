import { MenuType } from "@/types";
import {
  UserCircleIcon as AboutIcon,
  Squares2X2Icon as BlogIcon,
  PaperAirplaneIcon as ContactIcon,
  HomeIcon as HomeIcon,
} from "@heroicons/react/24/outline";

const menuConfig: MenuType[] = [
  {
    title: "Home",
    url: "/",
    idx: 0,
    icon: HomeIcon,
  },
  {
    title: "About",
    url: "/about",
    idx: 1,
    icon: AboutIcon,
  },
  {
    title: "Blog",
    url: "/blog",
    idx: 2,
    icon: BlogIcon,
  },
  {
    title: "Contact",
    url: "/contact",
    idx: 3,
    icon: ContactIcon,
  },
];

export default menuConfig;