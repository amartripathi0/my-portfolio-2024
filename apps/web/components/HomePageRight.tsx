import TextUnderline from './shared/TextUnderline'
import { TextGenerateEffect } from './ui/TextGenEffect'
import { MotionDiv, MotionH1 } from './shared/Motion'

function HomePageRight({
  firstName,
  lastName,
}: {
  firstName: string
  lastName: string
}) {
  return (
    <MotionDiv className="max-md:flex-center flex flex-col items-center justify-between gap-[1vw] max-md:h-72 sm:items-end lg:h-[28vw]">
      <div className="flex flex-col items-center text-6xl font-bold uppercase leading-none max-md:mx-auto md:items-end md:text-8xl lg:text-[10vw]">
        <MotionH1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className="pink-cursor-lg w-fit tracking-wider"
        >
          {firstName}{' '}
        </MotionH1>
        <MotionH1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.8}}
          className="pink-cursor-lg select-text bg-gradient-to-b from-neutral-200 to-neutral-700 bg-clip-text leading-[0.75] text-transparent selection:text-white"
        >
          {lastName}
        </MotionH1>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 1.5, delay: 1.5 }}
        className="text-right text-[1.3vw] max-md:mt-6 max-md:text-center max-md:text-sm"
      >
        {/* {' '} */}
        {/* I&apos;m a{' '} */}
        <TextUnderline
          text="Full-Stack Web Developer"
          textStyles="text-purple-300 font-medium hover:text-purple-400 transition-colors duration-500 md:text-[1.3vw] text-sm"
          underlineStyles="bg-purple-400"
        />{' '}
        based in{' '}
        <TextUnderline
          text="India"
          textStyles="font-medium transition-colors duration-500 md:text-[1.3vw] text-sm"
          underlineStyles="bg-gradient-to-r from-orange-500 via-blue-600 to-green-700"
        />
        , turning your ideas into reality.
        <TextGenerateEffect
          className="text-right text-[1.3vw] max-md:text-center max-md:text-sm"
          words="Passionate about Coding 👨‍💻, Music 🎵, and Video 🎥."
        />
      </MotionDiv>
    </MotionDiv>
  )
}

export default HomePageRight
