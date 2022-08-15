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

//Запускаем запрос на получение данных, дожидаемся ответа и возвращаем результат
//try пытается выполнить все,а
//catch - выдаст нам ошибку и передаст ее в  error переменную если будут проблемы с запросом
  async function getData() {
    try {
      const data = await readCovidData();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
//useEffect - это хукБ который запускается, только после того как компонент обработался
//в отличие от useState не запускает новую обработку документа
//в useEffect - можно поставить триггеры которые будут управлять его запуском
//мы установили null, чтобы он запустился только один раз при первой обрааботке компонента
//then - запускается, когда предидущая функция выполнила return
//then - принимает и передает ответ с предидущей функции
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