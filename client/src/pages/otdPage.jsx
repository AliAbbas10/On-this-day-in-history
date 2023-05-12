import { useContext, useEffect} from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import { useParams } from 'react-router-dom';

const OtdPage = () => {
  const { data, error, fetchData } = useContext(HistoryContext);
  const { month, day } = useParams();

  useEffect(() => {
    if (month && day) {
      fetchData(month, day);
    } 
    else {
      const today = new Date();
      const month = today.toLocaleString('default', { month: 'long' });
      const day = today.getDate();
      fetchData(month, day);
    }
  }, [fetchData, month, day]);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })
      }</p>
    </div>
  );
};


export default OtdPage;

