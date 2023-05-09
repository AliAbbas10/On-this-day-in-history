import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { WelcomeProvider } from './providers/welcomeProvider';
import WelcomePage from './components/welcomePage';
import MainPage from './components/MainPage';

function App() {
  return (
    <WelcomeProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </WelcomeProvider>
  )
};

export default App;