"use client";

import menus from "@/config/menu";
import { Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import { Logo, Toggle } from "../navigations/core";
import { DesktopNav } from "../navigations/desktop";
import { MobileMenuButton, MobileNav } from "../navigations/mobile";

const MainHeader = () => {
  return (<>
    <div className={`
      border-y-1
      sticky
      top-0
      z-50
      border-black/5
      bg-neutral-50
      shadow-sm
      shadow-neutral-300
      dark:border-white/10
      dark:bg-stone-800
      dark:shadow-stone-900/60
    `}>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <nav className={`
              mx-auto
              flex
              max-w-5xl
              items-center
              justify-between
              px-2
              py-4
            `}>
              {/* Logo */}
              <div className={`
                flex
                flex-1
                justify-start
                pl-2
              `}>
                <Logo />
              </div>

              {/* Navigation */}
              <div className={`
                hidden
                gap-x-6
                md:flex
                md:flex-1
              `}>
                <DesktopNav menus={menus} />
              </div>

              {/* Color Mode */}
              <div className={`
                hidden
                justify-end
                pr-2
                md:flex
                md:flex-1
              `}>
                <Toggle />
              </div>
              {/* Mobile Menu */}
              <div className={`
                flex
                flex-1
                justify-end
                pr-2
                md:hidden
              `}>
                <MobileMenuButton open={open} />
              </div>
            </nav>

            {/* <!-- Mobile Navigation --> */}
            <MobileNav fragment={Fragment} menus={menus} />
          </>
        )}
      </Disclosure>
    </div>
  </>);
};

export default MainHeader;
