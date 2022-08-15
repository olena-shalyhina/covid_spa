import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CountryListComponent from "./CountryListComponent";
import ChartsComponent from "./ChartsComponent";
import { readCovidData } from '../dataService/fileServise';

function BodyComponent() {

  const [selectedCountry, setSelectedCountry] = useState(null);
  // каждый компонент может принимать properties, как любая функция принимает аргументы
  // properties - могут быть любого типа: string, namber и т.д.
  const [covidData, setCovidData] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [countryData, setCountryData] = useState(null);

  function handleCountrySelect (countryKey) {
    setCountryData(covidData[countryKey]);
  }

  async function getData() {
    try {
      const data = await readCovidData();
      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData().then((data) => {
      setCovidData(data);
      const list = [];
      for (const key in data) {
        list.push({ key, name: data[key].location });
      }
      setCountryList(list);
    });

  }, [null]);

  return (
    <Container className="mt-4">
      <CountryListComponent countryList={countryList} handleCountrySelect={handleCountrySelect} />
      <ChartsComponent countryData={countryData} />
    </Container>
  )
}

export default BodyComponent;