import TechIcon from './TechIcon';
import Screenshot from '../assets/screenshot.png';
import Link from '../assets/Link.svg';
import GitHub from '../assets/TechLogos/github.svg';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Project.css';

export default function Project({
  title,
  description,
  coreTech,
  screenshots,
  livePreview,
  github,
  video,
  setOverlay,
}) {
  const techIcons = coreTech.map((iconInfo) => {
    return (
      <TechIcon name={iconInfo.name} imgURL={iconInfo.image} key={uuidv4()} />
    );
  });

  const screenshotList = screenshots.map((ss) => {
    return (
      <div className="previewContainer" key={uuidv4()}>
        <img src={ss} alt="" className="previewImage" />
      </div>
    );
  });

  return (
    <div className="project">
      <div className="leftSide">
        <div
          className="projectPreview"
          onClick={() => {
            setOverlay({ name: 'project', video, screenshots });
          }}
        >
          {screenshotList}
          {video === null ? null : (
            <div className="previewContainer">
              <video width="100%" autoPlay muted loop>
                <source src={video[0]} type="video/webm" />
                {video.length > 1 ? (
                  <source src={video[1]} type="video/mp4" />
                ) : null}
              </video>
            </div>
          )}
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
          <a href={livePreview} className="projectLink">
            <div className="background"></div>
            <p>Check it out</p> <img src={Link} alt="" className="linkIcon" />
          </a>
          <a href={github} target="_blank" className="projectLink">
            <div className="background"></div>
            <p>GitHub Repo</p> <img src={GitHub} alt="" className="linkIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}
