import TechIcon from './TechIcon';
import Bash from '../assets/TechLogos/bash.svg';
import CPP from '../assets/TechLogos/cpp.svg';
import CSS from '../assets/TechLogos/css.svg';
import Express from '../assets/TechLogos/express.png';
import Figma from '../assets/TechLogos/figma.svg';
import Firebase from '../assets/TechLogos/firebase.svg';
import Git from '../assets/TechLogos/git.svg';
import GitHub from '../assets/TechLogos/github.svg';
import HTML from '../assets/TechLogos/html.svg';
import JS from '../assets/TechLogos/javascript.svg';
import Jest from '../assets/TechLogos/jest.png';
import MongoDB from '../assets/TechLogos/mongodb.svg';
import PostgreSQL from '../assets/TechLogos/postgreSQL.svg';
import Node from '../assets/TechLogos/nodejs.svg';
import NPM from '../assets/TechLogos/npm.svg';
import Photoshop from '../assets/TechLogos/photoshop.png';
import React from '../assets/TechLogos/react.svg';
import Redux from '../assets/TechLogos/redux.svg';
import Tailwind from '../assets/TechLogos/tailwind.svg';
import TS from '../assets/TechLogos/typescript.svg';
import Vim from '../assets/TechLogos/vim.svg';
import VSCode from '../assets/TechLogos/vscode.svg';
import Webpack from '../assets/TechLogos/webpack.png';
import VS from '../assets/TechLogos/visualstudio.svg';
import '../styles/AboutPage.css';

export default function AboutPage() {
  return (
    <div className="aboutPage page">
      <div className="aboutContainer">
        <div className="aboutHeader">
          <div className="headerContainer">
            <h1>About Me</h1>
            <div className="separator"></div>
          </div>
        </div>
        <div className="aboutText">
          I'm a software developer in Portland, Oregon. I hold an Associate of
          Science in Computer Science, and am currently pursuing the Bachelor's
          at Portland State University. Outside of my education, I have been
          learning more about development and building projects. This site
          serves as my personal portfolio and hosts said projects. Please enjoy!
        </div>
      </div>
      <div className="techContainer">
        <h2 className="techHeader">Technologies</h2>
        <div className="techGrid">
          <TechIcon imgURL={HTML} name="HTML" />
          <TechIcon imgURL={CSS} name="CSS" />
          <TechIcon imgURL={Tailwind} name="Tailwind" />
          <TechIcon imgURL={JS} name="Javascript" />
          <TechIcon imgURL={TS} name="Typescript" />
          <TechIcon imgURL={React} name="React" />
          <TechIcon imgURL={Redux} name="Redux" />
          <TechIcon imgURL={Node} name="Node.js" />
          <TechIcon imgURL={Express} name="Express" />
          <TechIcon imgURL={MongoDB} name="MongoDB" />
          <TechIcon imgURL={Jest} name="Jest" />
          <TechIcon imgURL={NPM} name="NPM" />
          <TechIcon imgURL={CPP} name="C++" />
          <TechIcon imgURL={PostgreSQL} name="PostgreSQL" />
          <TechIcon imgURL={Firebase} name="Firebase" />
          <TechIcon imgURL={Webpack} name="Webpack" />
          <TechIcon imgURL={Git} name="Git" />
          <TechIcon imgURL={Bash} name="Bash" />
        </div>
        <h2 className="softwareHeader">Software</h2>
        <div className="softwareGrid">
          <TechIcon imgURL={Photoshop} name="Photoshop" />
          <TechIcon imgURL={Figma} name="Figma" />
          <TechIcon imgURL={Vim} name="Vim" />
          <TechIcon imgURL={VSCode} name="VSCode" />
          <TechIcon imgURL={VS} name="VS" />
          <TechIcon imgURL={GitHub} name="GitHub" />
        </div>
      </div>
    </div>
  );
}
