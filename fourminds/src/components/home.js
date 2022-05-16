import React, { useState } from 'react';
import { Navbar, Container, Nav, Image, Col, Form, Row, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import i18n from '../i18n'
import Logo from '../assets/logo/4minds2.jpg'
import "../css/home.css"

import L_chr from '../assets/Images/Logos clientes/chr.svg'
import L_heb from '../assets/Images/Logos clientes/heb.png'
import L_nuvoCargo from '../assets/Images/Logos clientes/nuvocargo.png'
import L_PG from '../assets/Images/Logos clientes/PG.png'
import L_racingCargo from '../assets/Images/Logos clientes/racingCargo.png'
import L_soriana from '../assets/Images/Logos clientes/soriana.png'
import L_walmart from '../assets/Images/Logos clientes/walmart.png'

import I_sprinter from '../assets/Images/vehiculos/Recurso 4.svg'

import I_single from '../assets/Images/svgs/person-outline.svg'
import I_team from '../assets/Images/svgs/people-outline.svg'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Home() {

    const [phone, setPhone] = useState('')
    const [servicio, setServicio] = useState('Single Driver')

    return (
        <div >
            <div className='padding60 viewheight100 contenedor1'>
                <h2>4Minds</h2>

                <h3>{i18n.t('header')}</h3>
            </div>

            {/* <div className='padding60 viewheight100 contenedor2'>
                <h2>{i18n.t('about_us')}</h2>
            </div> */}

            <div className='clients'>
                <h2>{i18n.t('clients')}</h2>
                <div className='list'>
                    <Image src={L_heb} height={50} />
                    <Image src={L_soriana} height={50} />
                    <Image src={L_walmart} height={50} />
                    <Image src={L_chr} height={50} />
                    <Image src={L_PG} height={70} />
                    <Image src={L_nuvoCargo} height={30} />
                    <Image src={L_racingCargo} height={50} />
                </div>
            </div>

            <div className='padding60 servicios'>
                <h2>{i18n.t('services')}</h2>
                <h4>{i18n.t('service_description')}</h4>

                <div className='typeServicesList'>
                    <div>
                        <h3>Single Driver</h3>
                        <div className='imageDummy' style={{ backgroundColor: 'transparent' }}><Image src={I_single} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} /></div>

                    </div>
                    <div>
                        <h3>Team Driver</h3>
                        <div className='imageDummy' style={{ backgroundColor: 'transparent' }}><Image src={I_team} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} /></div>
                    </div>
                </div>

                <h3>{i18n.t('available_units')}</h3>

                <div className='list'>
                    <div className='imageDummy' style={{ backgroundColor: 'transparent' }}>
                        <h4 classname="nameTransport" >Sprinter</h4>
                        <Image src={I_sprinter} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} />
                    </div>
                    <div className='imageDummy' style={{ backgroundColor: 'transparent' }}>
                        <h4 classname="nameTransport" >Small Truck</h4>
                        <Image src={I_sprinter} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} />
                    </div>
                    <div className='imageDummy' style={{ backgroundColor: 'transparent' }}>
                        <h4 classname="nameTransport" >Straigh truck</h4>
                        <Image src={I_sprinter} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} />
                    </div>
                    <div className='imageDummy' style={{ backgroundColor: 'transparent' }}>
                        <h4 classname="nameTransport" >Large</h4>
                        <Image src={I_sprinter} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} />
                    </div>
                    <div className='imageDummy' style={{ backgroundColor: 'transparent' }}>
                        <h4 classname="nameTransport" >53 DV</h4>
                        <Image src={I_sprinter} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} />
                    </div>
                    <div className='imageDummy' style={{ backgroundColor: 'transparent' }}>
                        <h4 classname="nameTransport" >48 & 53 flatbed</h4>
                        <Image src={I_sprinter} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} />
                    </div>
                    <div className='imageDummy' style={{ backgroundColor: 'transparent' }}>
                        <h4 classname="nameTransport" >3.5 t. cerrado</h4>
                        <Image src={I_sprinter} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} />
                    </div>
                    <div className='imageDummy' style={{ backgroundColor: 'transparent' }}>
                        <h4 classname="nameTransport" >3.5 plataforma abierta</h4>
                        <Image src={I_sprinter} style={{ stroke: "#fff", color: "#fff", fill: "#fff" }} />
                    </div>
                </div>
            </div>

            <div className='padding60 cotizacion'>
                <h2>{i18n.t('quote')}</h2>
                <br />
                <h4>Informacion cliente</h4>
                <Row>
                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="formBasicEmail" >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" />
                        </Form.Group>
                    </Col>
                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col sm={6} xs={12}>
                        <Form.Label>Phone</Form.Label>
                    </Col>
                    <Col sm={6} xs={12}>
                        <Form.Label>Servicios</Form.Label>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} xs={12} className="input">
                        <PhoneInput
                            country={'us'}
                            value={phone}
                            onChange={phone => setPhone(phone)}
                            inputClass='inputClass'
                        />
                    </Col>

                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <DropdownButton id="dropdown-basic-button" title={servicio} style={{ width: '100%' }}>
                                <Dropdown.Item onClick={() => setServicio('Single Driver')} >Single Driver</Dropdown.Item>
                                <Dropdown.Item onClick={() => setServicio('Team Driver')} >Team Driver</Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="formBasicEmail" >
                            <Form.Label>Origin address</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Destination address</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="formBasicEmail" >
                            <Form.Label>Origin Zip code</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Destination Zip code</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>

                <hr />

                <h4>Informacion Paquete</h4>

                <Row>
                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="formBasicEmail" >
                            <Form.Label>Peso</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Dimenciones</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} xs={12} className="input">
                        <Form.Group className="mb-6" controlId="formBasicEmail" >
                            <Form.Label>Tipo de mercancia</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="input">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Indicaciones especiales</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>

                <div className="d-grid gap-2 input">
                    <center>
                        <Button className='btnCotizar' >
                            Cotizar
                        </Button>
                    </center>
                </div>


            </div>
        </div>

    );
}

export default Home;