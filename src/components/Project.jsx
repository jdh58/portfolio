import TechIcon from './TechIcon';
import Screenshot from '../assets/screenshot.png';
import '../styles/Project.css';

export default function Project() {
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
        <a href="" className="projectLink">
          <p>Check it out</p> <img src="" alt="" className="linkIcon" />
        </a>
        <a href="" className="projectLink">
          <p>GitHub Repo</p> <img src="" alt="" className="linkIcon" />
        </a>
      </div>
      <div className="rightSide">
        <h2 className="projectHeader">Chirper - A Twitter Clone</h2>
        <p className="projectDescription">
          Fullstack recreation of the Twitter website. Nearly all of the
          functionality has been recreated.
        </p>
        <div className="coreTech">
          <h3 className="coreTechHeader">Core Technologies</h3>
          <div className="coreTechIcons">
            <TechIcon />
            <TechIcon />
            <TechIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
