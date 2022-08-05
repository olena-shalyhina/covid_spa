import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//Компонент принимает properties - c bodyComponent и назначает их в один объект который мы назвали props
//properties нельзя изменить.
function CityListComponent(props) {
  const [inputValue, setInputValue] = useState('');

  const cityes = [
    'Tallinn',
    'Parnu',
    'Tartu'
  ]
  // onChange, onClick, onSelect - события которые приходят от браузера и в свою очередь от пользователя
  //Как только пользователь сделал что-либо в браузере, браузер отправляет это к нам на обработчики.
  //Браузер также отправляет объект со всеми возможными данными о нем
  //обработчики - функции которые назначенные к нашим тригерам onChange, onClick, onSelec
  //target  - содержит в себе тот элемент в котором произошел элемент

  //function filter работает только для массива и запускает цикл, который проходит по каждому зннвачению массива
  //эта функция ожидает что вернут true или fals, и на основе этого создается новый массив
  //true или fals -  решает добавлять значение в новый массив или нет

  //В нашем примере мы возвращаем, есть ли введенный пользователем текст в одном из городов
  //когда мы используем циклы для генерации элементов  в jsx или react элементе обязательно мы должны передать, генерируемому элементу property key={} уникальное значение
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