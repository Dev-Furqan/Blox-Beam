// src/App.jsx
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import GameSelectionModal from './components/GameSelectionModal';

import './App.css';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [showGameModal, setShowGameModal] = useState(false);

  // Initialize AOS once on mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 80,
    });
  }, []);

  const handleLoginClick = () => setCurrentView('auth');
  const handleGetStarted = () => setCurrentView('auth');
  const handleGameSelectClick = () => setShowGameModal(true);
  const handleCloseModal = () => setShowGameModal(false);
  const handleLogoClick = () => setCurrentView('landing');

  // Handler to close auth modal (passed to AuthPage)
  const handleAuthClose = () => setCurrentView('landing');

  return (
    <div className="min-h-screen bg-dark text-white">
      <Header
        onLoginClick={handleLoginClick}
        onGameSelectClick={handleGameSelectClick}
        onLogoClick={handleLogoClick}
      />

      <main>
        {currentView === 'landing' ? (
          <LandingPage onGetStarted={handleGetStarted} />
        ) : (
          <AuthPage onClose={handleAuthClose} />
        )}
      </main>

      <Footer />

      <GameSelectionModal
        isOpen={showGameModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
