import { useState } from "react";
import Form from 'react-bootstrap/Form';

function RadioComponent() {

  const [deathCount, setDeathCount] = useState(true);
  const [confirmedCases, setConfirmedCases] = useState(false);
  const [dailyValue, setDailyValue] = useState(true);
  const [cumulativeValue, setCumulativeValue] = useState(false);
 
 
  return (
    
    <Form>

      <Form.Check
        // checked={deathCount}
        onChange={(e) => {setDeathCount(e.target.checked); console.log(1)}}
        type={'radio'}
        name="group1"
        id={`death count`}
        label={`death count`}
        />
      
      <Form.Check
        // checked={confirmedCases}
        onChange={(e) => setConfirmedCases(e.target.checked)}
        type={'radio'}
        name="group1"
        id={`confirmed cases`}
        label={`confirmed cases`}
      />

      <Form.Check
        // checked={dailyValue}
        onChange={(e) => setDailyValue(e.target.checked)}
        type={'radio'}
        name="group2"
        id={`daily new values`}
        label={`daily new values`}
        />

      <Form.Check
        // checked={cumulativeValue}
        onChange={(e) => setCumulativeValue(e.target.checked)}
        type={'radio'}
        name="group2"
        id={`cumulative mode`}
        label={`cumulative mode`}
      />
     
    </Form>
  );
}

export default RadioComponent;