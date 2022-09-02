import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTheme } from "./ReduxState";
import "./styles/NavBar.scss";

function NavBarComponent() {
  // const url = process.env.REACT_APP_HOME_URL;
  // const url  = '/covid_spa';
  const countryId = useSelector(state => state.countryId);
  const numberOf = useSelector(state => state.numberOf);
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  function handleClick() {
    if (theme === 'light') {
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
      <Container className="nav-brend-container">
        <Link className="navbar-brand" to="/">
          <img 
            src="/covid8.jpg"
            // src={`${url}/covid8.jpg`}
            width="50"
            height="50"
            className="nav-brand-logo d-inline-block m-2"
            alt="Covid Spa Information logo"
          />
          Covid Spa Information
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/reported-cases/" + countryId} className="nav-link">Reported cases Estonia</Link>
            <Link to={"/ranked-charts/" + (numberOf === 'total_cases' ? 'total_cases' : 'total_deaths') + '/20'} className="nav-link">Ranked charts</Link>
            {/* <Link to={`${url}/reported-cases/` + countryId} className="nav-link">Reported cases Estonia</Link>
            <Link to={`${url}/ranked-charts/` + (numberOf === 'total_cases' ? 'total_cases' : 'total_deaths') + '/20'} className="nav-link">Ranked charts</Link> */}
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