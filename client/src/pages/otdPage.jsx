import { useContext, useEffect, useRef, useState } from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import { useParams } from 'react-router-dom';

const OtdPage = () => {
  console.log("otd rendered");
  const { data, error, fetchData } = useContext(HistoryContext);
  const { month, day } = useParams();

  const [activeTab, setActiveTab] = useState("Events");

  useEffect(() => {
    if (month && day) {
      console.log("called if fetch")
      fetchData(month, day);
    } else {
      console.log("called else fetch")
      const today = new Date();
      const month = today.toLocaleString("default", { month: "long" });
      const day = today.getDate();
      fetchData(month, day);
    }
  }, [month, day]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!data || !data.summaries) {
    return <div>Loading data...</div>;
  }

  const renderItems = (title, summary) => (
    <>
      <p>{summary}</p>
    </>
  );

  return (
    <div>
      <div className="tab-container"> 
        <div className='tabs'>
          <div className='tab-header'>
            <div className={activeTab === 'Events' ? 'active' : ''} onClick={() => handleClick("Events")}>
              <p>Events</p>
            </div>
            <div className={activeTab === 'Births' ? 'active' : ''} onClick={() => handleClick("Births")}>
              <p>Births</p>
            </div>
            <div className={activeTab === 'Deaths' ? 'active' : ''} onClick={() => handleClick("Deaths")}>
              <p>Deaths</p>
            </div>
            <div className={activeTab === 'History' ? 'active' : ''} onClick={() => handleClick("History")}>
              <p>History</p>
            </div>
          </div>
          <div className='tab-body'>
            {activeTab === 'Events' && renderItems("Events", data.summaries.events)}
            {activeTab === 'Births' && renderItems("Births", data.summaries.births)}
            {activeTab === 'Deaths' && renderItems("Deaths", data.summaries.deaths)}
            {activeTab === 'History'}
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/pillar.png`}
            alt="Pillar-right"
            className="right-pillar"/>
          {/* <h1 className='otd-date'>{data.title}</h1> */}
          <img src={`${process.env.PUBLIC_URL}/pillar.png`}
          alt="Pillar-left"
          className="left-pillar"/>
        </div>
      </div>
    </div>
  );
};

export default OtdPage;