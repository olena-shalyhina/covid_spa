import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/ReportedCases.scss';

function CountryListComponent(props) {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputGroup className="mb-3 d-flex ">
      <InputGroup.Text>Select Country</InputGroup.Text>
      <Form.Control
        aria-label="First name"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Form.Select
        className="form-select-reported"
        onChange={(e) => props.handleCountrySelect(e.target.value)}
        aria-label="Default select example"
        defaultValue={props.country}
      >
        <option className="" value="">
          Open this select menu
        </option>
        {props.countryList
          .filter((country) => country.name.includes(inputValue))
          .map((country) => (
            <option key={country.key} id={country.key} value={country.key}>
              {country.name}
            </option>
          ))}
      </Form.Select>
    </InputGroup>
  );
}

export default CountryListComponent;
