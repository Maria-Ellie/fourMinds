import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import i18n from '../../i18n'
import Logo from '../../assets/logo/4minds2.jpg'


function MyNavbar() {
    return ( 
            <Navbar  variant="dark" style={{backgroundColor:'#000'}} fixed='top' >
                <Container>
                    <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo}
                        width="90"
                        className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">{i18n.t('about_us')}</Nav.Link>
                        <Nav.Link href="#features">{i18n.t('services')}</Nav.Link>
                        <Nav.Link href="#pricing">{i18n.t('contact')}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
     );
}

export default MyNavbar;