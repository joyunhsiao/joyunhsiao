import { cn } from "@/lib/utils";
import { MenuType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface MobileBottomNavProps {
  menus: MenuType[];
}

const MobileBottomNav: FC<MobileBottomNavProps> = ({ menus }) => {
  const currentPath = usePathname();

  return (<>
    <div className={`
      sticky
      bottom-0
      left-0
      h-16
      w-full
      dark:bg-stone-80
    `}>
      <div className={`
        mx-auto
        grid
        h-full
        max-w-lg
        grid-cols-4
        font-medium
      `}>
        {menus.slice(0, 4).map((item) => (
          <Link
            href={item.url}
            key={item.idx}
            scroll={true}
            className={cn(`
              inline-flex
              flex-col
              items-center
              justify-center
              px-5
              `,
              {
                "bg-gradient-to-bl from-neutral-300 via-neutral-200 to-neutral-100 dark:bg-gradient-to-t dark:from-stone-700 dark:via-stone-700 dark:to-stone-800":
                  currentPath.split("/")[1] === item.url.split("/")[1],
              },
            )}
          >
            <item.icon
              className={cn(`
                h-6
                w-6
                `,
                {
                  "text-stone-700 dark:text-stone-300":
                    currentPath.split("/")[1] === item.url.split("/")[1],
                },
                {
                  "text-stone-600 dark:text-stone-400":
                    currentPath.split("/")[1] != item.url.split("/")[1],
                },
              )}
              aria-hidden="true"
            />
            <span
              className={cn(`
                font-regular
                text-base
                `,
                {
                  "text-stone-700 dark:text-stone-300":
                    currentPath.split("/")[1] === item.url.split("/")[1],
                },
                {
                  "text-stone-600 dark:text-stone-400":
                    currentPath.split("/")[1] != item.url.split("/")[1],
                },
              )}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </>);
};

export default MobileBottomNav;