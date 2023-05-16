import { useState, useContext, useEffect } from "react";
import { HistoryContext } from '../Contexts/HistoryContext.jsx';

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
                </div>
                <div className='tab-body'>
                    {/* {activeTab === 'Events' }
                    {activeTab === 'Births' }
                    {activeTab === 'Deaths' } */}
                    {activeTab === 'Events' && renderItems("Events", data.summaries.events)}
                    {activeTab === 'Births' && renderItems("Births", data.summaries.births)}
                    {activeTab === 'Deaths' && renderItems("Deaths", data.summaries.deaths)}
                    
                </div>
            </div>
        </>
    )
}

export default Tabs;