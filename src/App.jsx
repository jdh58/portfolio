import SplashPage from './components/SplashPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import ToastNotification from './components/ToastNotification';
import { useEffect, useState } from 'react';
import ProjectOverlay from './components/ProjectOverlay';

function App() {
  const [toastActive, setToastActive] = useState([]);
  const [overlay, setOverlay] = useState({});

  useEffect(() => {
    if (typeof overlay.name === 'string') {
      document.body.style = 'overflow: hidden';
    } else {
      document.body.style = 'overflow: auto';
    }
  }, [overlay]);

  useEffect(() => {
    if (toastActive.length > 0) {
      setTimeout(() => {
        setToastActive(false);
      }, toastActive[1]);
    }
  }, [toastActive]);

  return (
    <div className="App">
      {toastActive.length > 0 ? (
        <ToastNotification
          message={toastActive[0]}
          timeAlive={toastActive[1]}
        />
      ) : null}
      {overlay.name === 'project' ? (
        <ProjectOverlay
          setOverlay={setOverlay}
          video={overlay.video}
          screenshots={overlay.screenshots}
        />
      ) : null}
      <Header />
      <SplashPage />
      <AboutPage />
      <ProjectsPage setOverlay={setOverlay} />
      <ContactPage displayToast={setToastActive} />
    </div>
  );
}

export default App;
