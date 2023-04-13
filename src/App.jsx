import SplashPage from './components/SplashPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SplashPage /> */}
      {/* <AboutPage /> */}
      <ProjectsPage />
    </div>
  );
}

export default App;
