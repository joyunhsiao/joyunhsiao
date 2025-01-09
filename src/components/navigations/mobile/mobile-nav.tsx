import { MenuType } from "@/types";
import { DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { ExoticComponent, FC, ReactNode } from "react";

interface MobileNavProps {
  fragment: ExoticComponent<{
    children?: ReactNode | undefined;
  }>;
  menus: MenuType[];
};

const MobileNav: FC<MobileNavProps> = ({ fragment, menus }) => {
  const router = useRouter();

  return (<>
    <Transition
      as={fragment}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <DisclosurePanel className={`
        border-t
        border-dashed
        border-stone-400
        dark:border-stone-400/40
        md:hidden
      `}>
        {menus.map((item) => (
          <DisclosureButton
            key={item.idx}
            as="a"
            onClick={() => router.push(item.url)}
          >
            <div className={`
              group
              flex
              items-center
              gap-x-6
              border-b
              border-dashed
              border-black/30
              bg-neutral-50
              p-3
              text-base
              font-semibold
              leading-7
              text-neutral-600
              transition-colors
              hover:bg-neutral-200
              dark:border-stone-400/40
              dark:bg-stone-800
              dark:text-stone-400
              dark:hover:bg-stone-700
            `}>
              <div className={`
                flex
                h-11
                w-11
                flex-none
                items-center
                justify-center
                rounded-lg
                border
                border-black/10
                bg-neutral-100
                shadow-md
                shadow-black/5
                transition
                duration-200
                group-hover:bg-neutral-50
                dark:border-white/10
                dark:bg-stone-700
                dark:shadow-stone-900/80
                dark:group-hover:bg-stone-700
              `}>
                <item.icon
                  className={`
                    h-6
                    w-6
                    text-neutral-600
                    dark:text-stone-400
                  `}
                  aria-hidden="true"
                />
              </div>
              {item.title}
            </div>
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Transition>
  </>);
};

export default MobileNav;