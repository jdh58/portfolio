import Project from './Project';
import JS from '../assets/TechLogos/javascript.svg';
import TS from '../assets/TechLogos/typescript.svg';
import React from '../assets/TechLogos/react.svg';
import Firebase from '../assets/TechLogos/firebase.svg';
import MongoDB from '../assets/TechLogos/mongodb.svg';
import Express from '../assets/TechLogos/express.png';
import CPP from '../assets/TechLogos/cpp.svg';
import PostgreSQL from '../assets/TechLogos/postgreSQL.svg';
import VS from '../assets/TechLogos/visualstudio.svg';

import chirper1 from '../assets/chirper1.png';
import chirper2 from '../assets/chirper2.png';
import chirper3 from '../assets/chirper3.png';
import chirperVideo1 from '../assets/chirperPreview.webm';
import chirperVideo2 from '../assets/chirperPreview.mp4';

import rlstat1 from '../assets/rlstat1.png';
import rlstat2 from '../assets/rlstat2.png';
import rlstat3 from '../assets/rlstat3.png';

import sportsball1 from '../assets/sportsball1.png';
import sportsball2 from '../assets/sportsball2.png';
import sportsball3 from '../assets/sportsball3.png';
import sportsballPreviewWEBM from '../assets/sportsballPreview.webm';
import sportsballPreviewMP4 from '../assets/sportsballPreview.mp4';

import Jest from '../assets/TechLogos/jest.png';
import '../styles/ProjectsPage.css';

export default function ProjectsPage({ setOverlay }) {
  const coreTechIcons1 = [
    { name: 'Javascript', image: JS },
    { name: 'React', image: React },
    { name: 'Jest', image: Jest },
    { name: 'Firebase', image: Firebase },
  ];
  const coreTechIcons2 = [
    { name: 'C++', image: CPP },
    { name: 'PostgreSQL', image: PostgreSQL },
    { name: 'VS', image: VS },
  ];
  const coreTechIcons3 = [
    { name: 'Typescript', image: TS },
    { name: 'React', image: React },
    { name: 'Express', image: Express },
    { name: 'MongoDB', image: MongoDB },
  ];

  const screenshots1 = [chirper3, chirper2];
  const screenshots2 = [rlstat3, rlstat2, rlstat1];
  const screenshots3 = [sportsball2, sportsball1];

  return (
    <div className="projectsPage page">
      <div className="projectPageHeaderContainer">
        <h1 className="projectPageHeader">Projects</h1>
        <div className="separator"></div>
      </div>
      <div className="projectSection">
        <Project
          title="SportsBallGame.com"
          description="Full stack sports game site. Complete with unique games, user accounts, and leaderboards."
          coreTech={coreTechIcons3}
          video={[sportsballPreviewWEBM, sportsballPreviewMP4]}
          screenshots={screenshots3}
          livePreview={'https://sportsballgame.com'}
          github={'https://github.com/jdh58/sportsballgame'}
          setOverlay={setOverlay}
        />
        <Project
          title="Chirper - A Twitter Clone"
          description="Full recreation of the Twitter website. Nearly all of the functionality has been recreated."
          coreTech={coreTechIcons1}
          video={[chirperVideo1, chirperVideo2]}
          screenshots={screenshots1}
          livePreview={'https://chirper.jonathanhawes.dev'}
          github={'https://github.com/jdh58/chirper'}
          setOverlay={setOverlay}
        />
        <Project
          title="RLStatSaver"
          description="A Rocket League plugin that tracks player stats and saves them to a custom .csv file after each game."
          coreTech={coreTechIcons2}
          video={null}
          screenshots={screenshots2}
          livePreview={'https://github.com/jdh58/rl-stat-saver'}
          github={'https://github.com/jdh58/rl-stat-saver'}
          setOverlay={setOverlay}
        />
      </div>
    </div>
  );
}
