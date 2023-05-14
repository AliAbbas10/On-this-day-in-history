import { useState, useContext, useEffect } from "react";
import { HistoryContext } from '../contexts/HistoryContext';

const Tabs = ({ dateKey }) => {
  const [activeTab, setActiveTab] = useState("Events");
  const { data } = useContext(HistoryContext);

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const renderItems = (title, summary) => (
    <>
      <p>{summary}</p>
    </>
  );

//   const renderHistory = () => {
//     const storedData = localStorage.getItem(dateKey);
//     if (storedData) {
//       const history = JSON.parse(storedData);
//       return (
//         <>
//           <p>Events: {history.events}</p>
//           <p>Births: {history.births}</p>
//           <p>Deaths: {history.deaths}</p>
//         </>
//       );
//     } else {
//       return <p>No history data found for the selected date.</p>;
//     }
//   };


    return (
        <>
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
                    {/* <div className={activeTab === 'History' ? 'active' : ''} onClick={() => handleClick("History")}>
                        <p>History</p>
                    </div> */}
                </div>
                <div className='tab-body'>
                    {activeTab === 'Events' && renderItems("Events", data.summaries.events)}
                    {activeTab === 'Births' && renderItems("Births", data.summaries.births)}
                    {activeTab === 'Deaths' && renderItems("Deaths", data.summaries.deaths)}
                    {/* {activeTab === 'History' && renderHistory()} */}
                </div>
            </div>
        </>
    )
}

export default Tabs;