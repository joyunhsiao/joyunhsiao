import { ProjectItemTechStack } from "@/types";
import { FC } from "react";

interface ProjectItemTechStacksProps {
  techStacks: ProjectItemTechStack[];
}

const ProjectItemTechStacks: FC<ProjectItemTechStacksProps> = ({
  techStacks,
}) => {
  return (<>
    <div className={`
      relative
      p-3
    `}>
      <div className={`
        relative
        mt-6
        flex
        flex-col
        gap-4
        rounded-xl
        border
        border-dashed
        border-stone-500/50
        p-4
        sm:mx-0
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
          Tech Stacks
        </div>

        {techStacks.map((techStack) => (
          <div key={techStack.idx} className={`
            flex
            flex-col
            gap-1.5
          `}>
            <p className={`
              text-lg
              font-semibold
              leading-6
              text-stone-800
              dark:text-stone-200
            `}>
              {techStack.title}
            </p>
            <dd className={`
              text-medium
              text-stone-600
              dark:text-stone-400
            `}>
              {techStack.stacks.join(", ")}
            </dd>
          </div>
        ))}
      </div>
    </div>
  </>);
};

export default ProjectItemTechStacks;