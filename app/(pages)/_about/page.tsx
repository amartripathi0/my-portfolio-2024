const About = () => {
  return (
    <div
      id="about"
      className=" mx-40 h-screen  pt-36
    flex flex-col gap-10 
    "
    >
      <h1 className="text-7xl font-semibold">About Me</h1>

      <div className="w-full border rounded-3xl bg-black flex flex-col gap-5">
        👋
        <h2 className="text-2xl">
          👋 Hi there! I'm Amar Tripathi, a third-year Computer Science student
          from India, deeply passionate about coding, music (listening and
          production), and food. My journey into full-stack web development has
          been exhilarating, constantly pushing the boundaries of what's
          possible.
        </h2>

        <div>
  <h3 className="text-2xl">My Journey</h3>
  <p>
    My adventure began during my first year of college, and since then, I've
    worked on diverse web development projects, honing my skills and seeking
    innovative solutions. I take pride in my work's ability to make a
    difference and create impactful results.
  </p>
</div>
<div>
  <h3 className="text-2xl">My Philosophy</h3>
  <p>
    At the heart of my work is a simple philosophy: to deliver high-quality
    solutions with a user-centric approach. This belief drives every project I
    undertake, ensuring timely delivery and creative problem-solving.
  </p>
</div>
<div>
  <h3 className="text-2xl">Beyond Work</h3>
  <p>
    When I'm not coding, you can find me exploring new music, experimenting in
    the kitchen, or enjoying the vibrant culture of India. These activities
    recharge my batteries and bring a fresh perspective to my professional
    endeavors.
  </p>
</div>

      </div>
    </div>
  );
};

export default About;
