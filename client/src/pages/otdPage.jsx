import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { HistoryContext } from '../Contexts/HistoryContext.jsx';
import Tabs from '../Components/TabComponenet.jsx';
import LoadingScreen from '../Components/LoadingComponent.jsx';

const OtdPage = () => {
  console.log("otd rendered");
  const { data, error, fetchData } = useContext(HistoryContext);
  const { month, day } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [dateKey, setDateKey] = useState('');

  useEffect(() => {
    const controller = new AbortController(); 

    const fetchAndRenderData = async (month, day, signal) => {
      setIsLoading(true);
      await fetchData(month, day, signal);
      setIsLoading(false);
    };

    if (month && day) {
      console.log("called if fetch");
      fetchAndRenderData(month, day, controller.signal);
    } else {
      console.log("called else fetch");
      const today = new Date();
      const month = today.toLocaleString("default", { month: "long" });
      const day = today.getDate();
      fetchAndRenderData(month, day, controller.signal);
    }

    return () => {
      controller.abort(); // Abort the fetch request when the component is unmounted
    };
  }, [month, day, fetchData]);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!data || !data.summaries || isLoading) {
    return <div><LoadingScreen /></div>;
  }

  return (
    <div>
      <div className="tab-container">
        <h1 className='dateTitle'>{data.title}</h1> 
        <Tabs dateKey={dateKey} />
        <div>
          <img src={`${process.env.PUBLIC_URL}/pillar.png`}
            alt="Pillar-right"
            className="right-pillar"/>
          <img src={`${process.env.PUBLIC_URL}/pillar.png`}
          alt="Pillar-left"
          className="left-pillar"/>
        </div>
      </div>
    </div>
  );
};
export default OtdPage;

