import { cn } from "@/lib/utils";
import { MenuType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface DesktopNavProps {
  menus: MenuType[];
}

const DesktopNav: FC<DesktopNavProps> = ({ menus }) => {
  const currentPath = usePathname();
  let path;

  if (currentPath.split("/").length > 1) {
    path = `/${currentPath.split("/")[1]}`;
  } else {
    path = currentPath;
  }

  return (<>
    <div className={`
      flex
      gap-x-6
    `}>
      {menus.map(({ url, title, idx }) => (
        <Link
          href={url}
          key={idx}
          className={`
            relative
            group
            px-4
            py-1
            text-base
            font-medium
            text-neutral-600
            transition
            duration-200
            active:scale-[96%]
            dark:text-stone-400
        `}>
          {title}
          <span
            aria-hidden="true"
            className={cn(`
              absolute
              left-0
              bottom-0
              w-full
              h-1
              rounded-full
            `,
            {
              "bg-amber-200 dark:bg-amber-500/50":
                path === url,
            },
            {
              "group-hover:bg-stone-200 group-hover:dark:bg-stone-500/50":
                path !== url,
            },
          )}></span>
        </Link>
      ))}
    </div>
  </>);
};

export default DesktopNav;
