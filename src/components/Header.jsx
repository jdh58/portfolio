import { useState } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [currentTab, setCurrentTab] = useState(null);

  //TODO: have the onclick just scroll, and set the currenttab based off scroll position

  return (
    <header className="header">
      <a
        href="#aboutPage"
        className="about"
        onClick={() => {
          document
            .querySelector('.aboutPage')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p>About</p>
      </a>
      <a
        href="#projectsPage"
        className="projects"
        onClick={() => {
          document
            .querySelector('.projectsPage')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p>Projects</p>
      </a>
      <a
        href="#contactPage"
        className="contact"
        onClick={() => {
          document
            .querySelector('.contactPage')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p>Contact</p>
      </a>
    </header>
  );
}
