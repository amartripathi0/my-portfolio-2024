import Landing from './(pages)/_landing/page'
import Skills from './(pages)/_skills/page'
import Projects from './(pages)/_projects/page'
import Contact from './(pages)/_contact/page'
import CustomCursor from '@/components/CustomCursor'
import WorkExp from './(pages)/_work/page'

function MainPage() {
  return (
    <main className="relative">
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
