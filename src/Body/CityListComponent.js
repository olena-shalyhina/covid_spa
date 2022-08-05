import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function CityListComponent(props) {
  const [inputValue, setInputValue] = useState('');

  const cityes = [
    'Tallinn',
    'Parnu',
    'Tartu'
  ]

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>Select City</InputGroup.Text>
      <Form.Control onChange={(e) => setInputValue(e.target.value)} aria-label="Search City" />
      <Form.Select onChange={(e) => props.setSelectedCity(e.target.value)} aria-label="Default select example">
        <option value=''>Open this select menu</option>
        {cityes.filter(city => city.includes(inputValue)).map(city => (<option key={city} value={city}>{city}</option>))}
      </Form.Select>
    </InputGroup>
  )
}

export default CityListComponent;