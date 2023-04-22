import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css';
import Arrow from '../Arrow/index'

function NavBar() {
  return (
    <>
      <Navbar id="nav">
        <Container>
          <Navbar.Brand href="#home">
            <Arrow />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;