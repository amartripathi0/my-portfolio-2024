import Landing from "./_landing/page";
import About from "./_about/page";
import Skills from "./_skills/page";
import Projects from "./_projects/page";
import Contact from "./_contact/page";
import CustomCursor from "@/components/CustomCursor";

function MainPage() {
  return (
    <div className="relative ">
      <CustomCursor/>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default MainPage;
