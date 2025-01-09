import { Main, MainContainer, MainFooter, MainGrid, MainHeader } from "@/components/main";
import { ProjectItem } from "@/components/project";
import homePageConfig from "@/config/home";
import projectPageConfig from "@/config/project";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";

const HomePage = () => {
  return (<>
    <div className={`
      min-h-screen
      flex
      flex-col
    `}>
      <div className="flex-grow">
        <MainHeader />
        <MainContainer>
          <MainGrid>
            <Main>
              <div className={`
                mx-auto
                mb-4
                text-center
              `}>
                <Image
                  src={homePageConfig.profileImage ?? ""}
                  alt={homePageConfig.profileImageDescription ?? ""}
                  width={96}
                  height={96}
                  priority={true}
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(256, 256),
                  )}`}
                  className={`
                    mx-auto
                    mb-2
                    rounded-full
                    shadow-sm
                    shadow-neutral-800/50
                    ring-1
                    ring-neutral-900/5
                    dark:ring-white/10
                `}/>

                <h1 className={`
                  mb-2
                  text-balance
                  text-4xl
                  tracking-tight
                  text-stone-900
                  dark:text-stone-100
                `}>
                  {homePageConfig.title}
                </h1>

                <span className={`
                  text-balance
                  text-lg
                  leading-8
                  text-stone-600
                  dark:text-stone-500
                `}>
                  {homePageConfig.subTitle}
                </span>
              </div>
              {projectPageConfig.map((project, idx) => (
                <ProjectItem
                  key={idx}
                  project={project}
                  isLastItem={idx === projectPageConfig.length - 1}
                />
              ))}
            </Main>
          </MainGrid>
        </MainContainer>
      </div>
      <MainFooter />
    </div>
  </>);
}

export default HomePage;
