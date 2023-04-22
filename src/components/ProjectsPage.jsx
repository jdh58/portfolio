import Project from './Project';
import JS from '../assets/TechLogos/javascript.svg';
import TS from '../assets/TechLogos/typescript.svg';
import React from '../assets/TechLogos/react.svg';
import Firebase from '../assets/TechLogos/firebase.svg';
import MongoDB from '../assets/TechLogos/mongodb.svg';
import Express from '../assets/TechLogos/express.png';

import Jest from '../assets/TechLogos/jest.png';
import '../styles/ProjectsPage.css';

export default function ProjectsPage() {
  const coreTechIcons1 = [
    { name: 'Javascript', image: JS },
    { name: 'React', image: React },
    { name: 'Jest', image: Jest },
    { name: 'Firebase', image: Firebase },
  ];
  const coreTechIcons2 = [
    { name: 'Typescript', image: TS },
    { name: 'Native', image: React },
    { name: 'Express', image: Express },
    { name: 'MongoDB', image: MongoDB },
  ];

  return (
    <div className="projectsPage page">
      <div className="projectPageHeaderContainer">
        <h1 className="projectPageHeader">Projects</h1>
        <div className="separator"></div>
      </div>
      <div className="projectSection">
        <Project
          title="Chirper - A Twitter Clone"
          description="Full-stack recreation of the Twitter website. Nearly all of the functionality has been recreated."
          coreTech={coreTechIcons1}
        />
        <Project
          title="CafeCritic - Coffee Rating Mobile App"
          description="Mobile app that lets you view coffee shops near you, read other's reviews, and write your own for anyone to see."
          coreTech={coreTechIcons2}
        />
      </div>
    </div>
  );
}
