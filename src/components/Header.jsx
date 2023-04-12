import { useState } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [currentTab, setCurrentTab] = useState(null);

  //TODO: have the onclick just scroll, and set the currenttab based off scroll position

  return (
    <header className="header">
      <a
        href="#aboutPage"
        className={currentTab === 'about' ? 'About active' : 'about'}
        onClick={() => {
          setCurrentTab('about');
        }}
      >
        <p>About</p>
      </a>
      <a
        href="#projectsPage"
        className={currentTab === 'projects' ? 'projects active' : 'projects'}
        onClick={() => {
          setCurrentTab('projects');
        }}
      >
        <p>Projects</p>
      </a>
      <a
        href="#contactPage"
        className={currentTab === 'contact' ? 'contact active' : 'contact'}
        onClick={() => {
          setCurrentTab('contact');
        }}
      >
        <p>Contact</p>
      </a>
    </header>
  );
}
