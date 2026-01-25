import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import profilePicture from './assets/profile-picture.jpg'
import linkedinLogo from './assets/linkedin-logo.svg'
import githubLogo from './assets/github-logo.svg'
import emailLogo from './assets/email-logo.svg'

import mcgillUniversityLogo from './assets/mcgill-university-logo.png'
import cegepHeritageCollegeLogo from './assets/cegep-heritage-college-logo.png'

import pythonLogo from './assets/python-logo.svg'
import htmlLogo from './assets/html-5-logo.svg'
import cssLogo from './assets/css-3-logo.svg'
import javascriptLogo from './assets/javascript-logo.svg'
import bashLogo from './assets/bash-logo.svg'
import cLogo from './assets/c-logo.svg'
import javaLogo from './assets/java-logo.svg'
import cSharpLogo from './assets/c-sharp-logo.svg'

import tailwindCSSLogo from './assets/tailwind-css-logo.svg'
import nodeJSLogo from './assets/node-js-logo.svg'
import unityLogo from './assets/unity-logo.svg'
import gitLogo from './assets/git-logo.svg'

import minesweeperLogo from './assets/minesweeper-logo.png'
import mcgillAerialDesignLogo from './assets/mcgill-aerial-design-logo.jpg'
import portfolioScreenshot from './assets/portfolio-screenshot.png'

import piano from './assets/piano.jpg'
import mathematics from './assets/mathematics.jpg'

function useInView(options) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // trigger only once
        }
      },
      { threshold: 0.3, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, inView];
}

function Expandable() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-center mt-4">
      {expanded && (
        <section className="flex justify-center gap-16 !p-8">
          <div className="personal-box">
            <img src={piano} />
            <br />
            <h4>I used to teach piano!</h4>
            <br />
            <p className="text-left">I used to spend a lot of time practicing piano during high school. In the end, I obtained a Diploma of preparatory studies in music, which is the equivalent of a grade 10 level. After graduating, I started to teach piano to elementary school students as a part-time job, and I even got the chance to monitor a muscial summer by being one of the main piano teacher!</p>
          </div>
          <div className="personal-box">
            <img src={mathematics} />
            <br />
            <h4>I am decently good at math...</h4>
            <br />
            <p className="text-left">During my time in high school and cégep, I have participated to several mathematical contests organized by several universities. Among them, there was one where I was pretty good at: the ones organized by the University of Waterloo. In fact, I have won the school champion medal every year (by scoring the highest score in my grade). Those competitions include Pascal, Cayley, Fermat, Euclid and CSMC.</p>
          </div>
        </section>
      )}

      {/* Minimalist Black & White Arrow Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex justify-center items-center mx-auto w-16 h-16 rounded-full border-2 border-black hover:bg-gray-100 transition-colors"
      >
        <svg
          className={`w-8 h-8 transform transition-transform duration-300 ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(false);

  const [refMcGill, inViewMcGill] = useInView();
  const [refCegep, inViewCegep] = useInView();

  const [refPortfolio, inViewPortfolio] = useInView();
  const [refMcGillAerialDesign, inViewMcGillAerialDesign] = useInView();
  const [refMinesweeper, inViewMinesweeper] = useInView();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <header className="fixed bg-gray-900 w-full py-4 px-16 opacity-100 z-100">
        <nav>  
          <ul className="flex justify-end gap-12 text-white">
            <li><a href="#education" className="nav-bar-item">Education</a></li>
            <li><a href="#technical-skills" className="nav-bar-item">Technical Skills</a></li>
            <li><a href="#projects" className="nav-bar-item">Projects</a></li>
            <li><a href="#introduction" className="nav-bar-item">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className={`w-full min-h-screen flex flex-col gap-8 pt-32 scroll-smooth transition-all duration-1500 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
        {/* Introduction Section */}
        <section className="flex justify-center items-center gap-12" id="introduction">
          <img 
            src={profilePicture} 
            alt="Profile Picture" 
            className="w-xs rounded-full"
          />
          {/* Right Side */}
          <div className="w-lg flex flex-col gap-4 items-start">
            <h1 className="text-left">
              Welcome to my website!
              <br></br>
              I am William Li
            </h1>
            <p className="text-xl text-left">I am an aspiring software developer, currently exploring the exciting world of computer science. I enjoy learning new concepts and tackling coding challenges both inside and outside the classroom.</p>
            {/* Social Links */}
            <div className="flex gap-8">
              <a 
                className="social-link-container" 
                href="https://www.linkedin.com/in/williamli218/" 
                target="_blank"
              >
                <img className="w-12"
                  src={linkedinLogo} 
                  alt="LinkedIn Logo"
                />
                LinkedIn
              </a>
              <a 
                className="social-link-container" 
                href="https://github.com/williamli218" 
                target="_blank"
              >
                <img className="w-12"
                  src={githubLogo} 
                  alt="GitHub Logo"
                />
                GitHub
              </a>
              <a 
                className="social-link-container"
                href="mailto:william.jy.li@gmail.com"
              >
                <img className="w-12"
                  src={emailLogo} 
                  alt="Email Logo"
                />
                Email
              </a>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section className="bg-black flex flex-col items-center gap-12" id="education">
          <h2 className="text-white text-4xl font-bold">Education</h2>
          {/* Education Cards */}
          <div className="flex gap-16 text-md">
            {/* McGill University Card */}
            <div
              ref={refMcGill}
              className={`university-card transition-all duration-700 ease-out transform ${
              inViewMcGill ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
                <div className="flex justify-center">
                  <img
                    src={mcgillUniversityLogo}
                    alt="McGill University Logo"
                    className="university-logo"
                  />
                </div>
                <br></br>
                <h4 className="font-bold text-lg">Bachelor of Engineering - Software Engineering Co-op</h4>
                <p>McGill University</p>
                <p>Montreal, Canada</p>
                <p>2025-2029</p>
                <br></br>
                <hr></hr>
                <br></br>
                <p>GPA: 4.0/4.0</p>
                <p>Richard Karper Scholarship in Engineering</p>
                <br></br>
                <p>Relevant Coursework: Introduction to Computer Programming, Object-Oriented Programming, Introduction to Software Systems, Communication in Engineering, Introduction to the Engineering Profession.</p>
            </div>
            {/* Cégep Heritage College Card */}
            <div
              ref={refCegep}
              className={`university-card transition-all duration-700 ease-out transform delay-200 ${
              inViewCegep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
                <div className="flex justify-center">
                  <img
                    src={cegepHeritageCollegeLogo}
                    alt="Cégep Heritage College Logo"
                    className="university-logo"
                  />
                </div>
                <br></br>
                <h4 className="font-bold text-lg">Diploma of College Studies - Science Program</h4>
                <p>Cégep Heritage College</p>
                <p>Gatineau, Canada</p>
                <p>2023-2025</p>
                <br></br>
                <hr></hr>
                <br></br>
                <p>R score: 36.840</p>
                <p>Mathematics Academic Achievement Awards</p>
                <p>Biology Academic Achievement Awards</p>
                <p>Dean's Honour Roll (all 4 semesters)</p>
                <br></br>
                <p>STEM courses peer tutor</p>
                <p>Fullfilled CRLA's international Tutor Training Program Certification and completed ITTPC training requirements.</p>
                <br></br>
                <p>Relevant Coursework: Calculus I, Calculus II, Calculus III, Linear Algebra, Mechanics, Electricity and Magnetism, Waves, Optics and Modern Physics, General Chemistry, Chemistry of Solutions, Organic Chemistry I, General Biology I, General Biology II.</p>
            </div>
          </div>
        </section>
        {/* Technical Skills Section */}
        <section className="flex flex-col items-center gap-12" id="technical-skills">
          <h2 className="text-4xl font-bold">Technical Skills</h2>
          <div className="technical-skills-section-grid">
            <h3 className="text-2xl font-bold">Languages</h3>
            {/* Languages Logos */}
            <div className="technical-skills-container">
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={pythonLogo} alt="Python Logo" />
                <p className="techincal-skills-text">Python</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={htmlLogo} alt="HTML5 Logo" />
                <p className="techincal-skills-text">HTML</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={cssLogo} alt="CSS3 Logo" />
                <p className="techincal-skills-text">CSS</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={javascriptLogo} alt="JavaScript Logo" />
                <p className="techincal-skills-text">JavaScript</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={bashLogo} alt="Bash Logo" />
                <p className="techincal-skills-text">Bash</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={javaLogo} alt="Java Logo" />
                <p className="techincal-skills-text">Java</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={cLogo} alt="C Logo" />
                <p className="techincal-skills-text">C</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={cSharpLogo} alt="C# Logo" />
                <p className="techincal-skills-text">C#</p>
              </div>
            </div>
          </div>
          {/* Frameworks & Tools Logos */}
          <div className="technical-skills-section-grid">
            <h3 className="text-2xl font-bold">Frameworks & Tools</h3>
            <div className="technical-skills-container">
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={reactLogo} alt="React Logo" />
                <p className="techincal-skills-text">React</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={tailwindCSSLogo} alt="Tailwind CSS Logo" />
                <p className="techincal-skills-text">Tailwind CSS</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={nodeJSLogo} alt="Node.js Logo" />
                <p className="techincal-skills-text">Node.js</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={unityLogo} alt="Unity Logo" />
                <p className="techincal-skills-text">Unity</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={gitLogo} alt="Git Logo" />
                <p className="techincal-skills-text">Git</p>
              </div>
              <div className="techincal-skills-item">
                <img className="techincal-skills-logo" src={githubLogo} alt="GitHub Logo" />
                <p className="techincal-skills-text">GitHub</p>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section className="bg-black flex flex-col items-center gap-12" id="projects">
          <h2 className="text-white">Projects</h2>
          <div className="grid grid-cols-3 gap-16">
            {/* Portfolio */}
            <div
              ref={refPortfolio}
              className={`project transition-all duration-700 ease-out transform ${
                inViewPortfolio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="project-icon-container">
                <img 
                  src={portfolioScreenshot} 
                  alt="Portfolio Website Screenshot" 
                  className="project-icon"
                />
              </div>
              <br />
              <h4>Front-End Portfolio (which is this website!)</h4>
              <br />
              <hr />
              <br />
              <p>Developed a personal portfolio website using HTML, CSS, CSS Tailwind, JavaScript and React with Node.js used for development tooling and build processes.</p>
              <br />
              <p><a href ="https://github.com/williamli218/Portfolio" target="_blank" className="project-link">GitHub Link</a></p>
              <p><a href="https://williamli218.github.io/Portfolio/" target="_blank" className="project-link">Portfolio Link</a></p>
              <br />
              <div className="flex gap-2">
                <img src={htmlLogo} alt="HTML Logo" className="skills-icons" />
                <img src={cssLogo} alt="CSS Logo" className="skills-icons" />
                <img src={javascriptLogo} alt="JavaScript Logo" className="skills-icons" />
                <img src={tailwindCSSLogo} alt="Tailwind CSS Logo" className="skills-icons" />
                <img src={reactLogo} alt="React Logo" className="skills-icons" />
                <img src={nodeJSLogo} alt="Node.js Logo" className="skills-icons" />
              </div>
            </div>
            {/* McGill Aerial Design */}
            <div
              ref={refMcGillAerialDesign}
              className={`project transition-all duration-700 ease-out transform delay-200 ${
                inViewMcGillAerialDesign ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="project-icon-container">
                <img 
                  src={mcgillAerialDesignLogo} 
                  alt="McGill Aerial Design Logo" 
                  className="project-icon"
                />
              </div>
              <br />
              <h4>Ground Station & Operator UX</h4>
              <p>McGill Aerial Design</p>
              <br />
              <hr />
              <br />
              <p>Developed plugins and UI enhancements for MissionPlanner to improve operator usabilitiy and workflow.</p>
              <br />
              <p>Collaborate with team members through weekly technical meetings to design and implement a fully functional ground station system.</p>
              <br />
              <p><a href="https://github.com/McGill-Aerial-Design/Mission-Planner-MAVlinkListener-Plugin" target="_blank" className="project-link">GitHub Link</a></p>
              <br />
              <img 
                src={cSharpLogo} 
                alt="C# Logo" 
                className="skills-icons"
              />
            </div>
            {/* Minesweeper */}
            <div
              ref={refMinesweeper}
              className={`project transition-all duration-700 ease-out transform delay-400 ${
                inViewMinesweeper ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="project-icon-container">
                <img 
                  src={minesweeperLogo} 
                  alt="Minesweeper Logo" 
                  className="project-icon"
                />
              </div>
              <br />
              <h4>Minesweeper Design</h4>
              <br />
              <hr />
              <br />
              <p>Designed and implemented a basic Minesweeper game in Python, including a simplified automated bot that plays the game using fundamental algorithmic logic.</p>
              <br />
              <p><a href="https://github.com/williamli218/Minesweeper" target="_blank" className="project-link">GitHub Link</a></p>
              <br />
              <img 
                src={pythonLogo} 
                alt="Python Logo" 
                className="skills-icons"
              />
            </div>
          </div>
        </section>
        {/* Personal Section */}
        <h3 className="text-center">Learn more about me outside of the professional world!</h3>
        <Expandable />
      </main>
      <footer className="p-9">
        <p className="flex justify-end font-bold pr-40">Copyright © 2026 William Li. All rights reserved.</p>
      </footer>
    </>
  )
}
