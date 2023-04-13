import TechIcon from './TechIcon';
import Screenshot from '../assets/screenshot.png';
import Link from '../assets/Link.svg';
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
        <h2 className="projectHeader">Chirper - A Twitter Clone</h2>
        <p className="projectDescription">
          Fullstack recreation of the Twitter website. Nearly all of the
          functionality has been recreated.
        </p>
        <div className="coreTech">
          <h3 className="coreTechHeader">Core Technologies</h3>
          <div className="separator"></div>
          <div className="coreTechIcons">{techIcons}</div>
        </div>
        <div className="links">
          <a href="" className="projectLink">
            <p>Check it out</p> <img src={Link} alt="" className="linkIcon" />
          </a>
          <a href="" className="projectLink">
            <p>GitHub Repo</p> <img src={Link} alt="" className="linkIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}
