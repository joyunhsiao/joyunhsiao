import { FooterType } from "@/types";
import { FC } from "react";

interface DesktopBottomNavProps {
  footer: FooterType;
};

const DesktopBottomNav: FC<DesktopBottomNavProps> = ({ footer }) => {
  return (<>
    <div className={`
      mx-auto
      w-full
      max-w-7xl
      px-2
      py-3
      flex
      items-center
      justify-between
    `}>
      <div className={`
        flex
        justify-center
        space-x-6
      `}>
        {footer.socials.map((item) => (
          <a
            key={item.idx}
            href={item.href}
            className={`
              text-stone-400
              hover:text-stone-500
              dark:text-stone-500
              dark:hover:text-stone-400
          `}>
            <span className="sr-only">{item.name}</span>
            <item.icon
              aria-hidden="true"
              className={`
                h-6
                w-6
                rounded-full
            `}/>
          </a>
        ))}
      </div>
      <div className={`
        order-1
        mt-0
      `}>
        <p className={`
          text-center
          text-base
          text-stone-500
          dark:text-stone-400
        `}>
          &copy; {footer.copyright}
        </p>
      </div>
    </div>
  </>);
};

export default DesktopBottomNav;