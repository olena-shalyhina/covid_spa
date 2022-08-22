import { useEffect } from "react";
import { getTodayCovidData } from "../dataService/apiService";
import Carousel from 'react-bootstrap/Carousel';
import '../styles/CovidToday.scss';

function CovidTodayComponent (props) {
 return (
  <Carousel className="wrapper">
  <Carousel.Item>
    <Carousel.Caption className="caption">
      <h1>Today Deaths</h1>
      <p>{props.covidTodayData?.todayDeaths}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Carousel.Caption className="caption">
      <h1>Today Cases</h1>
      <p>{props.covidTodayData?.todayCases}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Carousel.Caption className="caption">
      <h1>Today Recovered</h1>
      <p>{props.covidTodayData?.todayRecovered}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}
 

export default CovidTodayComponent;