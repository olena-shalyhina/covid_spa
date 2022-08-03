import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import FComponent from './FComponent';
// import CComponent from './CComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />Главный компонент, который и отображает страницу */}
    <App />
    {/* <FComponent /> */}
    {/* Можно копировать компонент сколько угодно раз */}
    {/* <FComponent />
    <FComponent />
    <FComponent />
    <FComponent />
    <CComponent />
    <FComponent />
    <FComponent />
    <FComponent />
    <FComponent /> */}
  </React.StrictMode>
);
//НАЗНАЧЕНИЕ ПАПОК, которые генерируются в папке нашего проекта при запуске команды: npx create-react-app covid_spa
//node_modules - находится весь react + дополнительные модули; 

//public - находится информация, которая доступна всем (html, изображения, шрифты и т.п.);

//src - хранится весь исходный код, и из нее генерируется когда мы даем команду npm start;

//gitignore - нужна, что-бы git не отправлял ненужные файлы (например из папки node_modules)

//package-lock.json - хранится вся информация о библиотеках, которые используются и их версия;

//package.json - хранится вся информация о библиотеках, которые используются и их версия;

//README.md - элементарная документация нашего проекта, первое что увидит человек когда зайдет в наш git репозиторий;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
