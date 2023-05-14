import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { HistoryContext } from '../contexts/HistoryContext';
import Tabs from '../components/TabComponenet';
import LoadingScreen from '../components/LoadingComponent';

const OtdPage = () => {
  console.log("otd rendered");
  const { data, error, fetchData } = useContext(HistoryContext);
  const { month, day } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [dateKey, setDateKey] = useState('');

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController

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

// const OtdPage = () => {
//   console.log("otd rendered");
//   const { data, error, fetchData } = useContext(HistoryContext);
//   const { month, day } = useParams();
//   const [isLoading, setIsLoading] = useState(false);
//   const [dateKey, setDateKey] = useState('');
//   // const [localData, setLocalData] = useState(null);
//   useEffect(() => {
//     if (month && day) {
//       console.log("called if fetch")
//       setIsLoading(true);
//       await fetchData(month, day, signal);
//       setIsLoading(false);
//     } 
//     else {
//       console.log("called else fetch")
//       const today = new Date();
//       const month = today.toLocaleString("default", { month: "long" });
//       const day = today.getDate();
//       fetchData(month, day);
//     }
//   }, [month, day]);

//   // useEffect(() => {
//   //   const fetchAndStoreData = async (month, day) => {
//   //     const key = `${month}-${day}`;
//   //     setDateKey(key);
//   //     const storedData = localStorage.getItem(key);
    
//   //     if (storedData) {
//   //       console.log("Data loaded from localStorage");
//   //       const parsedData = JSON.parse(storedData);
//   //       setLocalData(parsedData);
//   //     } else {
//   //       console.log("Data fetched from API");
//   //       const fetchedData = await fetchData(month, day);
    
//   //       Store data in the correct structure
//   //       const historyData = {
//   //         events: fetchedData.summaries.events,
//   //         births: fetchedData.summaries.births,
//   //         deaths: fetchedData.summaries.deaths,
//   //       };
    
//   //       setLocalData(historyData);
//   //       localStorage.setItem(key, JSON.stringify(historyData));
//   //     }
//   //   };
    
//   //   if (month && day) {
//   //     fetchAndStoreData(month, day);
//   //   } 
//   //   else {
//   //     const today = new Date();
//   //     const month = today.toLocaleString("default", { month: "long" });
//   //     const day = today.getDate();
//   //     fetchAndStoreData(month, day);
//   //   }
//   // }, [month, day]);

//   if (error) {
//     return <div>Error fetching data: {error.message}</div>;
//   }

//   if (!data || !data.summaries || isLoading) {
//     return <div><LoadingScreen /></div>;
//   }

//   return (
//     <div>
//       <div className="tab-container">
//         <h1 className='dateTitle'>{data.title}</h1> 
//         <Tabs dateKey={dateKey} />
//         <div>
//           <img src={`${process.env.PUBLIC_URL}/pillar.png`}
//             alt="Pillar-right"
//             className="right-pillar"/>
//           {/* <h1 className='otd-date'>{data.title}</h1> */}
//           <img src={`${process.env.PUBLIC_URL}/pillar.png`}
//           alt="Pillar-left"
//           className="left-pillar"/>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default OtdPage;




// import { useContext, useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import { HistoryContext } from '../contexts/HistoryContext';
// import Tabs from '../components/TabComponenet';


// const OtdPage = () => {
//   console.log("otd rendered");
//   const { data, error, fetchData } = useContext(HistoryContext);
//   const { month, day } = useParams();
//   const [dateKey, setDateKey] = useState('');

//   useEffect(() => {
//     if (month && day) {
//       console.log("called if fetch")
//       fetchData(month, day);
//     } else {
//       console.log("called else fetch")
//       const today = new Date();
//       const month = today.toLocaleString("default", { month: "long" });
//       const day = today.getDate();
//       fetchData(month, day);
//     }
//   }, [month, day]);

//   if (error) {
//     return <div>Error fetching data: {error.message}</div>;
//   }

//   if (!data || !data.summaries) {
//     return <div>Loading data...</div>;
//   }

//   return (
//     <div>
//       <div className="tab-container"> 
//         <Tabs />
//         <div>
//           <img src={`${process.env.PUBLIC_URL}/pillar.png`}
//             alt="Pillar-right"
//             className="right-pillar"/>
//           {/* <h1 className='otd-date'>{data.title}</h1> */}
//           <img src={`${process.env.PUBLIC_URL}/pillar.png`}
//           alt="Pillar-left"
//           className="left-pillar"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtdPage;