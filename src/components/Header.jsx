import { useState } from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div
        className="about"
        onClick={() => {
          document
            .querySelector('.aboutPage')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p>About</p>
      </div>
      <div
        className="projects"
        onClick={() => {
          document
            .querySelector('.projectsPage')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p>Projects</p>
      </div>
      <div
        className="contact"
        onClick={() => {
          document
            .querySelector('.contactPage')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p>Contact</p>
      </div>
    </header>
  );
}
