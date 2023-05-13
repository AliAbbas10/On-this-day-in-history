import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import OtdPage from './pages/OtdPage';
import { HistoryProvider } from "./contexts/HistoryContext"
import { DateSelectProvider } from './contexts/DateSelectContext';

function App() {
  console.log("app render")
  return (
      <div className="App">
        <Router>
          <HistoryProvider>
          <DateSelectProvider>  
              <Routes>
                <Route exact path="/" element={<WelcomePage />} />
                <Route path="/otd" element={<OtdPage />} />
                <Route path="/otd/:month/:day" element={<OtdPage />} />
              </Routes>
          </DateSelectProvider> 
          </HistoryProvider>
        </Router>
      </div>
  );
}

export default App;