import Close from '../assets/close.svg';
import { v4 as uuidv4 } from 'uuid';
import '../styles/ProjectOverlay.css';

export default function ProjectOverlay({ setOverlay, video, screenshots }) {
  const screenshotList = screenshots.map((ss) => {
    return (
      <div className="previewContainer" key={uuidv4()}>
        <img src={ss} alt="" className="previewImage" />
      </div>
    );
  });

  return (
    <div className="overlay projectOverlay">
      <div
        className="closeContainer"
        onClick={() => {
          setOverlay({});
        }}
      >
        <img src={Close} alt="Close" />
      </div>
      {video ? (
        <div className="previewContainer">
          <video width="100%" autoPlay muted controls loop>
            <source src={video[0]} type="video/webm" />
            {video.length > 1 ? (
              <source src={video[1]} type="video/mp4" />
            ) : null}
          </video>
        </div>
      ) : null}

      {screenshotList}
    </div>
  );
}
