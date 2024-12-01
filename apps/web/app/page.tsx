import Landing from './(pages)/_landing/page'
import Skills from './(pages)/_skills/page'
import Projects from './(pages)/_projects/page'
import Contact from './(pages)/_contact/page'
import CustomCursor from '@/blocks/CustomCursor'
import WorkExp from './(pages)/_work/page'
import Freelance from './(pages)/_freelance/page'

function MainPage() {
  return (
    <main className="relative mx-0 flex flex-col gap-8 sm:gap-24 px-4 pt-20 sm:px-8 md:px-10 lg:mx-28 3xl:gap-28">
      <CustomCursor />
      <Landing />
      {/* <About /> */}
      <WorkExp />
      <Projects />
      <Freelance/>
      <Skills />
      <Contact />
    </main>
  )
}

export default MainPage
