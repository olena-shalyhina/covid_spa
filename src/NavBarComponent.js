import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTheme } from "./ReduxState";

function NavBarComponent() {
  //useSelector хук позволяет нам следить за состоянием и возвращает нам нужный элемент
  const countryId = useSelector(state => state.countryId);
  const numberOf = useSelector(state => state.numberOf);
  const theme = useSelector(state => state.theme);
  // dispatch - функция отправки действия, он принимает action, который нужно выполнить
  const dispatch = useDispatch();

  function handleClick() {
    if (theme === 'light') {
      //createAction создал нам функцию, которую мы передали в dispatch
      //который отправил нам его в  redux и запустил с новыми данными
      //которые передались в с новы redux через action.payload
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  }
  // document.body.style.background = 'black';
  // document.getElementsByClassName('navbar-brand')[0].style.color = 'white';
  // document.querySelectorAll('.form-check-label').forEach(elem => elem.style.color = '#0b67a8');
  // document.body.style.background = 'white';
  // document.getElementsByClassName('navbar-brand')[0].style.color = 'black';
  // document.querySelectorAll('.form-check-label').forEach(elem => elem.style.color = 'black');
  return (
    <Navbar bg={theme} expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.svg"
            width="50"
            height="50"
            className="d-inline-block"
            alt="React Bootstrap logo"
          />
          Covid Spa Information
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/reported-cases/' + countryId} className="nav-link">Reported cases Estonia</Link>
            <Link to={'/ranked-charts/' + (numberOf === 'total_cases' ? 'total_cases' : 'total_deaths') + '/20'} className="nav-link">Ranked charts</Link>
          </Nav>
        </Navbar.Collapse>
        <Form.Check
          type="switch"
          id="theme-switch"
          onClick={() => handleClick()}
        />
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;