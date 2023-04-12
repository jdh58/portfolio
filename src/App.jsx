import SplashPage from './components/SplashPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import './styles/App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SplashPage />
      <AboutPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
