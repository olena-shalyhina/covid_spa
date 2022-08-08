import { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BarChart } from 'reaviz';

function RankedChartsComponent() {
  const formDom = useRef(null);

  function handleOnInput(e) {
    const [totalNumberoOfdDeaths, totalNumberOfCases, countriesCount] = formDom.current;
    const selectedCountriesCount = [... countriesCount.find(option => option.selected === true)];
    console.log('selectedCountriesCount', selectedCountriesCount.value);
  }
  return (<>
    <Row>

      <Col sm={4}>
        <Form ref={formDom} onInput={handleOnInput}>
          <Form.Check
            type={'radio'}
            name='group1'
            label={'Total number of deaths'}
            defaultChecked={true}
          />
          <Form.Check
            type={'radio'}
            name='group1'
            label={'Total number of cases'}
          />
          <label className="2">Select countries count</label>
          <Form.Select defaultValue='4' aria-label="Default select example" >
            <option>Open this select menu</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
            <option value="3">6</option>
            <option value="3">7</option>
            <option value="3">8</option>
            <option value="3">9</option>
            <option value="3">10</option>
          </Form.Select>
        </Form>
      </Col>
      <Col sm={8}>
      <BarChart
    height={300}
    width={300}
    data={[
      { key: 'DLP', data: 13 },
      { key: 'SIEM', data: 2 },
      { key: 'Endpoint', data: 7 }
    ]}
  />
      </Col>
    </Row>
  </>)
}

export default RankedChartsComponent;