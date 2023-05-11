import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { WelcomeProvider } from './providers/welcomeProvider';
import WelcomePage from './pages/WelcomePage';
import OtdPage from './pages/otdPage';
import HistoryProvider from './providers/historyProvider'; // Make sure to import HistoryProvider

function App() {
  return (
    <WelcomeProvider>
      <div className="App">
        <Router>
          <HistoryProvider>
            <Routes>
              <Route exact path="/" element={<WelcomePage />} />
              <Route path="/otd" element={<OtdPage />} />
              <Route path="/otd/:month/:day" element={<OtdPage />} />
            </Routes>
          </HistoryProvider>
        </Router>
      </div>
    </WelcomeProvider>
  );
}

export default App;