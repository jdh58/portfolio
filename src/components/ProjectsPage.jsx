import Project from './Project';
import '../styles/ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <div className="projectsPage page">
      <div className="projectPageHeaderContainer">
        <h1 className="projectPageHeader">Projects</h1>
        <div className="separator"></div>
      </div>
      <Project />
    </div>
  );
}
