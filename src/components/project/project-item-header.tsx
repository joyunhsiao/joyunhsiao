import Image from "next/image";
import { FC } from "react";

interface ProjectItemHeaderProps {
  title: string;
  keywords: string[];
  iconUrl: string;
  iconDescription: string;
  type: string;
}

const ProjectItemHeader: FC<ProjectItemHeaderProps> = ({
  title,
  keywords,
  iconUrl,
  iconDescription,
  type,
}) => {
  return (<>
    <div className={`
      relative
      p-3
    `}>
      <div className={`
        relative
        flex
        flex-col
        items-center
        justify-center
        gap-6
        rounded-xl
        border
        border-dashed
        border-stone-500/50
        p-4
        dark:border-white/10
        sm:flex-row
      `}>
        <div className={`
          text-normal
          absolute
          left-2.5
          top-0
          -translate-y-1/2
          bg-white
          px-2
          font-normal
          text-stone-500
          dark:bg-stone-800
        `}>
          {type === "Web" ? "Website" : "Mobile App"}
        </div>
        <Image
          src={iconUrl}
          alt={iconDescription}
          width={80}
          height={80}
          priority={true}
          className="rounded-full"
        />
        <div className={`
          flex-auto
          text-center
          sm:text-left
        `}>
          <h3 className={`
            text-xl
            font-semibold
            tracking-tight
            text-stone-900
            dark:text-stone-100
          `}>
            {title}
          </h3>
          <p className="mt-2">
            {keywords.map((keyword, idx) => (
              <span
                key={idx}
                className={`
                  mr-1
                  inline-flex
                  items-center
                  rounded-full
                  bg-neutral-50
                  px-2
                  py-1
                  text-sm
                  font-medium
                  text-stone-500
                  ring-1
                  ring-inset
                  ring-neutral-500/10
                  dark:bg-stone-700/30
                  dark:ring-white/10
              `}>
                {keyword}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  </>);
};

export default ProjectItemHeader;
