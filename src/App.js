//импортируем стили bootstrap,что-бы react bootstrap правильно оьображал элементы
import 'bootstrap/dist/css/bootstrap.min.css';
//react bootstrap  - готовые компоненты для реакта
import { Container } from 'react-bootstrap';
import BodyComponent from './Body/BodyComponent';
import NavBarComponent from './NavBarComponent';
//функциональный компонент
function App() {
//который возвращает jsx елемент/ React элемент 
//все приложение мы оборачиваем в react bootstrap контейнер для лучшего отображения
//в Container мы поместили наши главные компоненты
  return (
    <Container>
      <NavBarComponent />
      <BodyComponent />
    </Container>
  );
}
//каждый компонент должен экспортироваться  для дальнейшего использования
//export - экспортирует
//defolt - назначает каким образом будет импортироваться
//когда есть default на компоненте или функции то импорт будет без{}
export default App;
