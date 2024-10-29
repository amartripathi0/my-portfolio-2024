import Landing from './(pages)/_landing/page'
import Skills from './(pages)/_skills/page'
import Projects from './(pages)/_projects/page'
import Contact from './(pages)/_contact/page'
import CustomCursor from '@/components/CustomCursor'
import WorkExp from './(pages)/_work/page'

function MainPage() {
  return (
    <main className="relative mx-0 flex flex-col px-4 pt-20 sm:px-8 md:px-10 lg:mx-28 gap-8">
      <CustomCursor />
      <Landing />
      {/* <About /> */}
      <WorkExp />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default MainPage
