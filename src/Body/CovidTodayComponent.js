import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../styles/CovidToday.scss';
import { getTodayCovidData } from '../dataService/apiService';

function CovidTodayComponent () {
  const [covidTodayData, setCovidTodayData] = useState(null);
  useEffect(() => {
    getTodayCovidData().then(data => setCovidTodayData(data));
  }, []);
 return (
  <Carousel className="wrapper">
  <Carousel.Item>
    <Carousel.Caption className="caption">
      <h1>Today Deaths</h1>
      <p>{covidTodayData?.todayDeaths}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Carousel.Caption className="caption">
      <h1>Today Cases</h1>
      <p>{covidTodayData?.todayCases}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Carousel.Caption className="caption">
      <h1>Today Recovered</h1>
      <p>{covidTodayData?.todayRecovered}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}
 

export default CovidTodayComponent;