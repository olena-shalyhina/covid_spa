import { useEffect, useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BarChart } from 'reaviz';
import { useParams } from 'react-router-dom';
import '../styles/RankedCharts.scss';
import LoaderComponent from './LoaderComponent';

function RankedChartsComponent(props) {
  const formDom = useRef(null);
  const [chartData, setChartData] = useState(null);
  const { cases, count } = useParams();

  useEffect(() => {
    setChartData(
      Object.values(props.covidData)
        .slice(0, count || props.initialCountryCount)
        .map((data) => {
          let objectData = 'total_deaths';
          if (cases) {
            objectData = 'total_cases';
          }
          return {
            key: data.location,
            data: data.data.reverse()[0][objectData] || 0,
          };
        })
    );
  }, [props.covidData, count, cases, props.initialCountryCount]);

  function handleOnInput(e) {
    const [, totalNumberOfCases, countriesCount] = formDom.current;

    let objectData = 'total_deaths';
    if (totalNumberOfCases.checked) {
      objectData = 'total_cases';
    }
    const selectedCountriesCount = [...countriesCount].find(
      (option) => option.selected === true
    );

    setChartData(
      Object.values(props.covidData)
        .slice(0, selectedCountriesCount.value)
        .map((data) => {
          return {
            key: data.location,
            data: data.data.reverse()[0][objectData] || 0,
          };
        })
    );
  }

  const countryListCount = [];
  for (let i = 1; i <= props.countryCount; i++) {
    countryListCount.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <Row>
        <Col sm={4}>
          <Form ref={formDom} onInput={handleOnInput}>
            <Form.Check
              type="radio"
              name="group1"
              label={`Total number of deaths`}
              defaultChecked={cases === 'total_deaths'}
            />
            <Form.Check
              type="radio"
              name="group1"
              label={`Total number of cases`}
              defaultChecked={cases === 'total_cases'}
            />
            <label className="select_label m-2">Select countries count</label>
            {countryListCount.length ? (
              <Form.Select
                className="form-select-ranked mb-5"
                defaultValue={count}
              >
                {countryListCount}
              </Form.Select>
            ) : (
              <LoaderComponent />
            )}
          </Form>
        </Col>
        <Col sm={8}>
          {chartData ? <BarChart data={chartData} height="50vh" /> : ''}
        </Col>
      </Row>
    </>
  );
}

RankedChartsComponent.defaultProps = {
  initialCountryCount: 20,
};

export default RankedChartsComponent;
