import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <a href="#aboutPage" className="About">
        <p>About</p>
      </a>
      <a href="#projectsPage" className="Projects">
        <p>Projects</p>
      </a>
      <a href="#contactPage" className="Contact">
        <p>Contact</p>
      </a>
    </header>
  );
}
