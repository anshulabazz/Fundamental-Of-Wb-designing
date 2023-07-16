import style from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Navbars = () => {
    return (
        <Navbar sticky="top" className={style.navbar} data-bs-theme="dark">
            
            <Container>
                <Navbar.Brand className={style.navv} href="#home">Nivana Hillls</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`{me-auto} ${style.nnav}`}>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                        <Nav.Link>Carrier</Nav.Link>
                        
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
}
export default Navbars