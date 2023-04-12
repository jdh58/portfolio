import TechIcon from './TechIcon';
import JS from '../assets/TechLogos/javascript.svg';
import '../styles/AboutPage.css';

export default function AboutPage() {
  return (
    <div className="aboutPage page">
      <div className="aboutContainer">
        <div className="aboutHeader">
          <img src="" alt="" className="portrait" />
          <h1>About Me</h1>
        </div>
        <div className="separator"></div>
        <div className="aboutText">
          I'm a software developer in Portland, Oregon. Currently, I hold an
          Associate's of Science in Computer Science, and am pursuing the
          Bachelor's at Portland State University. Outside of my education, I
          have been learning Web Development technologies and building projects.
          This site serves as my personal portfolio, and hosts my projects.
          Please enjoy!
        </div>
      </div>
      <div className="techContainer">
        <h2 className="techHeader">Technologies</h2>
        <div className="techGrid">
          <TechIcon imgURL={JS} name="Javascript" />
          <TechIcon />
          <TechIcon />
          <TechIcon />
          <TechIcon />
        </div>
      </div>
      <div className="softwareContainer">
        <h2 className="softwareHeader">Software</h2>
        <TechIcon />
        <TechIcon />
        <TechIcon />
      </div>
    </div>
  );
}
