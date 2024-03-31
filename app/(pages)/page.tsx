import Landing from "./_landing/page";
import About from "./_about/page";
import Skills from "./_skills/page";
import Projects from "./_projects/page";

function page() {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default page;
