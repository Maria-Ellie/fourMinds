import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import i18n from '../../i18n'
import Logo from '../../assets/logo/4minds2.jpg'


function MyNavbar() {
    return ( 
            <Navbar collapseOnSelect expand="md"  variant="dark" style={{backgroundColor:'#000'}} fixed='top' >
                <Container>
                    <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo}
                        width="90"
                        className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'end'}}>
                        <Nav >
                            <Nav.Link href="#home">{i18n.t('about_us')}</Nav.Link>
                            <Nav.Link href="#features">{i18n.t('services')}</Nav.Link>
                            <Nav.Link href="#pricing">{i18n.t('contact')}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
     );
}

export default MyNavbar;
