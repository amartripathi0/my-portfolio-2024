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
    <MotionDiv className="max-md:flex-center flex flex-col items-center justify-between gap-[1vw] max-md:h-80 sm:items-end lg:mr-2 lg:h-[28vw]">
      <div className="flex-center relative flex flex-col text-6xl font-bold max-md:mx-auto md:items-end md:text-8xl lg:text-[10vw]">
        <MotionH1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 2 }}
          className="pink-cursor-lg bg-clip-text uppercase leading-none tracking-wider"
        >
          {firstName}{' '}
        </MotionH1>
        <MotionH1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 2.5 }}
          className="pink-cursor-lg bg-gradient-to-b from-neutral-200 to-neutral-700 bg-clip-text uppercase leading-none text-transparent max-md:m-0 md:leading-[110px]"
        >
          {lastName}
        </MotionH1>
      </div>

      <MotionDiv
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: 'easeInOut', duration: 1.5, delay: 3 }}
        className="text-right text-[1.3vw] max-md:mt-6 max-md:text-center max-md:text-sm"
      >
        <div>
          {' '}
          I&apos;m a{' '}
          <TextUnderline
            text="Full-Stack Web Developer"
            textStyles="text-purple-300 font-medium hover:text-purple-400 transition-colors duration-500 md:text-[1.3vw] text-sm"
            underlineStyles="bg-purple-400"
          />
          , turning your ideas into reality.
        </div>
        <TextGenerateEffect
          className="text-right text-[1.3vw] max-md:text-center max-md:text-sm"
          words="Passionate about Coding 👨‍💻, Music  🎵, Video 🎥 ."
        />
      </MotionDiv>
    </MotionDiv>
  )
}

export default HomePageRight
