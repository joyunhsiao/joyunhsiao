import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface MainWrapperProps {
  children: ReactNode;
  className?: string;
}

const MainWrapper: FC<MainWrapperProps> = ({
  children,
  className = ""
}) => {
  return (<>
    <div
      className={cn(`
        min-h-full
        bg-white
        antialiased
        selection:bg-blue-500/10
        selection:text-blue-500
        dark:bg-stone-800
        dark:selection:bg-amber-500/10
        dark:selection:text-amber-500
        `,
        className
      )}
    >
      {children}
    </div>
  </>);
};

export default MainWrapper;