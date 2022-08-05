import { useState } from "react";
import { Container } from "react-bootstrap";
import CityListComponent from "./CityListComponent";
import ChartsComponent from "./ChartsComponent";

function BodyComponent() {

  const [selectedCity, setSelectedCity] = useState('Tallinn');
  
  return (
    <Container className="mt-4">
      <CityListComponent
        setSelectedCity={setSelectedCity} />
      <ChartsComponent />
    </Container>
  )
}

export default BodyComponent;