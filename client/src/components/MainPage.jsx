import { useContext, useEffect } from 'react';
import { WelcomeContext } from '../contexts/welcomeContext';
import { HistoryContext } from '../contexts/historyContext';

const MainPage = () => {
  // const {randomNum} = React.useContext(WelcomeContext);
  // return (
  //   <div className="main-page">
  //     <h1>Main Page</h1>
  //     <p>This is the main page {randomNum}.</p>
  //   </div>
  // );

  
  const { data, error, fetchData } = useContext(HistoryContext);

  useEffect(() => {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const day = today.getDate();
    fetchData(month, day);
  }, [fetchData]);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
};


export default MainPage;


// import React, { useContext, useEffect } from 'react';
// import HistoryContext from '../context/HistoryContext';

// const EventDisplay = () => {
    
// };

// export default EventDisplay;