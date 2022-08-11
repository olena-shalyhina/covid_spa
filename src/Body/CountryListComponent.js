import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


function CountryListComponent(props) {
  const [inputValue, setInputValue] = useState("");

console.log(props.countryList);
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>Select country</InputGroup.Text>
      <Form.Control onChange={(e) => setInputValue(e.target.value)} aria-label="Search Country" />
      <Form.Select onChange={(e) => props.handleCountrySelect(e.target.value)} aria-label="Default select example">
        <option value="">Open this select menu</option>
        {props.countryList
        .filter(country => country.name.includes(inputValue))
        .map(country => (<option key={country.key} value={country.key}>{country.name}</option>))}
      </Form.Select>
    </InputGroup>
  )
}

export default CountryListComponent;