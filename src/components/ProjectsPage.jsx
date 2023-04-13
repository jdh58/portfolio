import Project from './Project';
import JS from '../assets/TechLogos/javascript.svg';
import React from '../assets/TechLogos/react.svg';
import Firebase from '../assets/TechLogos/firebase.svg';
import Jest from '../assets/TechLogos/jest.png';
import '../styles/ProjectsPage.css';

export default function ProjectsPage() {
  const coreTechIcons1 = [
    { name: 'Javascript', image: JS },
    { name: 'React', image: React },
    { name: 'Jest', image: Jest },
    { name: 'Firebase', image: Firebase },
  ];

  return (
    <div className="projectsPage page">
      <div className="projectPageHeaderContainer">
        <h1 className="projectPageHeader">Projects</h1>
        {/* <div className="separator"></div> */}
      </div>
      <Project coreTech={coreTechIcons1} />
    </div>
  );
}
