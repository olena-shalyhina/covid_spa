import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// NavBarComponent - компонент который содержит навигацию и лого
// Все изображения находятся в папке pablic
// Navbar.Brand - ссылка

function NavBarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="50"
            height="50"
            className="d-inline-block"
            alt="React Bootstrap logo"
          />
          Covid Spa Information
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;