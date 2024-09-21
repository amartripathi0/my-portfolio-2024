import Landing from './_landing/page'
import About from './_about/page'
import Skills from './_skills/page'
import Projects from './_projects/page'
import Contact from './_contact/page'
import CustomCursor from '@/components/CustomCursor'
import ProjectCard from '@/components/project-card'
import WorkExp from './_work/page'

function MainPage() {
  return (
    <div className="relative" role="main">
      <CustomCursor />
      <Landing />
      {/* <About /> */}
      <WorkExp/>
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default MainPage
