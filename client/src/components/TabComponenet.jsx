import { useState, useContext, useEffect } from "react";
import { HistoryContext } from '../Contexts/HistoryContext.jsx';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Events");
  const { data, history } = useContext(HistoryContext);

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

  // const renderItems = (history) => {
  //   return Object.values(history).map(date => (
  //     <div key={date}>
  //       <h1>{history[date].title}</h1>
  //       <div>
  //         {Object.values(history[date].summaries).map(summaryType => (
  //           <div key={summaryType}>
  //             <h2>{summaryType}</h2>
  //             <p>{history[date].summaries[summaryType]}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   ));
  // };

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
                    {/* <div className={activeTab === 'Previous' ? 'active' : ''} onClick={() => handleClick("Previous")}>
                        <p>Previous</p>
                    </div> */}
                </div>
                <div className='tab-body'>
                    {/* {activeTab === 'Events' }
                    {activeTab === 'Births' }
                    {activeTab === 'Deaths' } */}
                    {activeTab === 'Events' && <p>{data.summaries.events}</p>}
                    {activeTab === 'Births' && <p>{data.summaries.births}</p>}
                    {activeTab === 'Deaths' && <p>{data.summaries.deaths}</p>}
                    {/* {activeTab === 'Previous' && renderItems({history})} */}
                    
                </div>
            </div>
        </>
    )
}

export default Tabs;