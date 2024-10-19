import Landing from './_landing/page'
import Skills from './_skills/page'
import Projects from './_projects/page'
import Contact from './_contact/page'
import CustomCursor from '@/components/CustomCursor'
import WorkExp from './_work/page'

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
