import Close from '../assets/close.svg';
import '../styles/ProjectOverlay.css';

export default function ProjectOverlay({ setOverlay, video, screenshots }) {
  const screenshotList = screenshots.map((ss) => {
    return (
      <div className="previewContainer">
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
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ) : null}

      {screenshotList}
    </div>
  );
}
