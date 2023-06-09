import SplashPage from './components/SplashPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import ToastNotification from './components/ToastNotification';
import { useEffect, useState } from 'react';

function App() {
  const [toastActive, setToastActive] = useState([]);

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
      <Header />
      <SplashPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage displayToast={setToastActive} />
    </div>
  );
}

export default App;
