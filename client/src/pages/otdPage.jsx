import { useContext, useEffect} from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import { useParams } from 'react-router-dom';

const OtdPage = () => {
  console.log("otd rendered");
  const { data, error, fetchData } = useContext(HistoryContext);
  const { month, day } = useParams();

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

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!data || !data.summaries) {
    return <div>Loading data...</div>;
  }
  
  const renderItems = (title, summary) => (
    <>
      <h2>{title}</h2>
      <p>{summary}</p>
    </>
  );

  return (
    <div>
    <h1>{data.title}</h1>
    {renderItems("Events", data.summaries.events)}
    {renderItems("Births", data.summaries.births)}
    {renderItems("Deaths", data.summaries.deaths)}
  </div>
  );
};


export default OtdPage;

