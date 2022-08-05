import { useState } from "react";
import { Container } from "react-bootstrap";
import CityListComponent from "./CityListComponent";


function BodyComponent() {

  const [selectedCity, setSelectedCity] = useState('Tallinn');
  const [searchCity, setSearchCity] = useState('');
  return (
    <Container className="mt-4">
      <CityListComponent
        setSearchCity={setSearchCity}
        setSelectedCity={setSelectedCity} />
      <h2>{selectedCity}</h2>
      <h2>{searchCity}</h2>
    </Container>
  )
}

export default BodyComponent;