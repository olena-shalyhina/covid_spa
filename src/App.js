import logo from './logo.svg';
import './App.css';
//Импортируем компонент FComponent в наш главный компонент App
import FComponent from './FComponent';
import HComponent from './HComponent';

// Функция, которая описывает наш компонент
// Классы в React  - className
// При каждом сохранении страница перезапускается
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <FComponent firstName="Rasim" lastName="Mexhtijev"/>
          <FComponent firstName="Rasim" lastName="Mexhtijev"/>
          <FComponent firstName="Rasim" lastName="Mexhtijev"/>
          <FComponent firstName="55" lastName="88"/>
          <FComponent />
        </div>
        <div>
          <FComponent />
          <HComponent addMe="Add me"/>
          <FComponent />
          <HComponent addMe="Add me"/>          
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
