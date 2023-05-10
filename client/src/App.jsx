import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { WelcomeProvider } from './providers/welcomeProvider';
import WelcomePage from './components/WelcomePage';
import MainPage from './components/MainPage';
import HistoryProvider from './providers/historyProvider'; // Make sure to import HistoryProvider

function App() {
  return (
    <WelcomeProvider>
      <div className="App">
        <Router>
          <HistoryProvider>
            <Routes>
              <Route exact path="/" element={<WelcomePage />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
          </HistoryProvider>
        </Router>
      </div>
    </WelcomeProvider>
  );
}

export default App;