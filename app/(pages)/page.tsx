import Landing from "./_landing/page";
import About from "./_about/page";
import Skills from "./_skills/page";
import Projects from "./_projects/page";
import Contact from "./_contact/page";

function MainPage() {
  return (
    <div className="relative ">
      {/* <Landing /> */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="h-screen"></div>
    </div>
  );
}

export default MainPage;
