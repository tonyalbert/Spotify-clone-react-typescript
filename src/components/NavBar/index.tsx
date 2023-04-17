import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';
import './styles.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar id="nav">
        <Container>
          <Navbar.Brand href="#home">
            <div id="navegar">
                <a href="/"><BiLeftArrowCircle /></a>
                <a href="/"><BiRightArrowCircle /></a>
            </div>
          </Navbar.Brand>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;