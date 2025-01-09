import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <>
      <Link href="/" className={`
        mr-4
        flex
        items-center
      `}>
        <div className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
        `}>
          <Image
            width={44}
            height={44}
            src="/images/authors/joyun.jpg"
            alt="I'm Jo Yun Hsiao."
            priority={true}
            className={`
              mx-auto
              rounded-full
              shadow-sm
              shadow-neutral-800/50
              ring-1
              ring-neutral-900/5
              dark:ring-white/10
            `}
          />
        </div>
        <div className={`
          ml-2
          text-lg
          text-neutral-600
          dark:text-stone-400
        `}>
          Jo Yun
        </div>
      </Link>
    </>
  )
}
export default Logo