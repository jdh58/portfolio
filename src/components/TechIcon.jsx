import '../styles/TechIcon.css';

export default function TechIcon({ imgURL, name }) {
  return (
    <div className="techIcon">
      <div className="iconContainer">
        <img src={imgURL} alt="" />
      </div>
      <h3 className="technologyName">{name}</h3>
    </div>
  );
}
