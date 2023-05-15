import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage.jsx';
import OtdPage from './pages/OtdPage.jsx';
import { HistoryProvider } from "./contexts/HistoryContext.jsx"
import { DateSelectProvider } from './contexts/DateSelectContext.jsx';

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