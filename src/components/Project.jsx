import TechIcon from './TechIcon';
import Screenshot from '../assets/screenshot.png';
import Link from '../assets/Link.svg';
import GitHub from '../assets/TechLogos/github.svg';
import '../styles/Project.css';

export default function Project({ title, description, coreTech }) {
  const techIcons = coreTech.map((iconInfo) => {
    return <TechIcon name={iconInfo.name} imgURL={iconInfo.image} />;
  });

  return (
    <div className="project">
      <div className="leftSide">
        <div className="projectPreview">
          <div className="previewContainer">
            <img src={Screenshot} alt="" className="previewImage" />
          </div>
          <div className="previewContainer">
            <img src={Screenshot} alt="" className="previewImage" />
          </div>
          <div className="previewContainer">
            <img src={Screenshot} alt="" className="previewImage" />
          </div>
        </div>
      </div>
      <div className="rightSide">
        <h2 className="projectHeader">{title}</h2>
        <p className="projectDescription">{description}</p>
        <div className="coreTech">
          <h3 className="coreTechHeader">Core Technologies</h3>
          <div className="separator"></div>
          <div className="coreTechIcons">{techIcons}</div>
        </div>
        <div className="links">
          <a href="" className="projectLink">
            <div className="background"></div>
            <p>Check it out</p> <img src={Link} alt="" className="linkIcon" />
          </a>
          <a
            href="https://github.com/jdh58/chirper"
            target="_blank"
            className="projectLink"
          >
            <div className="background"></div>
            <p>GitHub Repo</p> <img src={GitHub} alt="" className="linkIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}
