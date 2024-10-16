import {
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiJquery,
  SiPostman,
  SiTypescript,
  SiJavascript,
  SiThreedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const About = () => {
  const techStack = [
    {
      id: 1,
      name: "React.js",
      path: <FaReact className="w-full h-full text-teal-400" />,
    },
    {
      id: 2,
      name: "jQuery",
      path: <SiJquery className="w-full h-full text-blue-500" />,
    },
    {
      id: 3,
      name: "Three.js",
      path: <SiThreedotjs className="w-full h-full text-white" />,
    },
    {
      id: 4,
      name: "Next JS",
      path: (
        <SiNextdotjs className="w-full h-full text-black bg-white rounded-full" />
      ),
    },
  ];

  const languages = [
    {
      id: 1,
      name: "HTML",
      path: <FaHtml5 className="w-full h-full text-orange-500" />,
    },
    {
      id: 2,
      name: "CSS",
      path: <IoLogoCss3 className="w-full h-full text-blue-500" />,
    },
    {
      id: 3,
      name: "Bootstrap",
      path: (
        <FaBootstrap className="w-full h-full text-white bg-purple-500 rounded-md" />
      ),
    },
    {
      id: 4,
      name: "JavaScript",
      path: <SiJavascript className="w-full h-full text-yellow-400" />,
    },
    {
      id: 5,
      name: "TypeScript",
      path: (
        <SiTypescript className="w-full h-full text-blue-500 rounded-md bg-white" />
      ),
    },
    {
      id: 6,
      name: "TailwindCSS",
      path: <RiTailwindCssFill className="w-full h-full text-blue-400" />,
    },
  ];

  const tools = [
    {
      id: 1,
      name: "Vite",
      path: <img src="/vite.svg" alt="vite" />,
    },
    {
      id: 2,
      name: "Git",
      path: <FaGitAlt className="w-full h-full text-red-500" />,
    },
    {
      id: 3,
      name: "GitHub",
      path: <FaGithub className="w-full h-full text-white" />,
    },
    {
      id: 4,
      name: "VSCode",
      path: <VscVscode className="w-full h-full text-blue-500" />,
    },
    {
      id: 5,
      name: "Postman",
      path: (
        <SiPostman className="w-full h-full text-orange-500 rounded-full bg-white" />
      ),
    },
    {
      id: 6,
      name: "NPM",
      path: <FaNpm className="w-full h-full text-red-500" />,
    },
  ];

  return (
    <section className="c-space pt-20" id="about">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/girl-2.jpg"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Asma Shaik</p>
              <p className="grid-subtext">
                Senior Front-End Developer with 5 years of experience, I have
                worked in both frontend and backend dev, creating dynamic and
                responsive websites.
              </p>
              <p className="grid-subtext mt-4">
                My expertise lies in leveraging ReactJS, along with JavaScript
                and CSS to build modern and responsive web applications. I have
                experience in developing reusable and scalable components,
                implementing state management, and integrating with backend
                APIs.
              </p>
              <p className="grid-subtext mt-4">
                As an enthusiastic learner, I enjoy exploring new technologies,
                and enhancing my skills. I'm a quick learner and collaborate
                with team & clients to solve complex challenges & create
                exceptional user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/techstack-1.jpg"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript with a focus on frameworks like
                React.js, Next.js, and Three.js and below tools & languages.
              </p>

              <div className="flex flex-col justify-between flex-wrap gap-5 mt-4">
                <div className="flex items-center gap-3">
                  {techStack.map((tag, index) => (
                    <div key={index} className="tech-logo">
                      {tag.path}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {languages.map((tag, index) => (
                    <div key={index} className="tech-logo">
                      {tag.path}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {tools.map((tag, index) => (
                    <div key={index} className="tech-logo">
                      {tag.path}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
