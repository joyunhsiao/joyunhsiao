"use client";

import footer from "@/config/footer";
import menus from "@/config/menu";
import { DesktopBottomNav } from "../navigations/desktop";
import { MobileBottomNav } from "../navigations/mobile";

const MainFooter = () => {
  return (<>
    <footer className={`
      sticky
      bottom-0
      z-40
      border-y-[1.2px]
      border-stone-300
      bg-neutral-50
      shadow-t-sm
      dark:border-stone-600/50
      dark:bg-stone-800
      dark:shadow-stone-900
    `}>
      <nav className={`
        mx-auto
        hidden
        max-w-5xl
        items-center
        justify-between
        md:flex
      `}>
        <DesktopBottomNav footer={footer} />
      </nav>
      <nav className={`
        mx-auto
        max-w-5xl
        items-center
        justify-between
        md:hidden
      `}>
        <MobileBottomNav menus={menus} />
      </nav>
    </footer>
  </>);
};

export default MainFooter;