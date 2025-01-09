import { cn } from "@/lib/utils";
import { DisclosureButton } from "@headlessui/react";
import { FC } from "react";

interface MobileMenuButtonProps {
  open: boolean;
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({ open }) => {
  return (<>
    <DisclosureButton className={cn(`
      inline-flex
      h-10
      w-10
      items-center
      justify-center
      rounded-md
      text-neutral-500
      shadow-md
      shadow-black/5
      ring-1
      ring-black/10
      dark:text-stone-400
      dark:ring-white/10
    `)}>
      <span
        aria-hidden="true"
        className={cn(`
          absolute
          block
          h-0.5
          w-5
          bg-current
          transition-transform
          duration-500
          ease-in-out
          `,
          { "rotate-45": open },
          { "-translate-y-1.5": !open }
        )}
      ></span>
      <span
        aria-hidden="true"
        className={cn(`
          absolute
          block
          h-0.5
          w-5
          bg-current
          transition-transform
          duration-500
          ease-in-out
          `,
          { "opacity-0": open }
        )}
      ></span>
      <span
        aria-hidden="true"
        className={cn(`
          absolute
          block
          h-0.5
          w-5
          bg-current
          transition-transform
          duration-500
          ease-in-out
          `,
          { "-rotate-45": open },
          { "translate-y-1.5": !open }
        )}
      ></span>
    </DisclosureButton>
  </>);
};

export default MobileMenuButton;