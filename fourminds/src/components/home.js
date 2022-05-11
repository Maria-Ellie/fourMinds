import React from 'react';
import {Navbar, Container, Nav, Image} from 'react-bootstrap'
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
function Home() {
    return ( 
        <div >
            <div className='padding60 viewheight100 contenedor1'>
                <h2>4Minds</h2>
            </div>

            <div className='padding60 viewheight100 contenedor2'>
                    <h2>{i18n.t('about_us')}</h2>
            </div>

            <div className='clients'>
                <h2>{i18n.t('clients')}</h2>
                <div className='list'>
                    <Image src={L_heb} height={50}/>
                    <Image src={L_soriana} height={50}/>
                    <Image src={L_walmart} height={50}/>
                    <Image src={L_chr} height={50}/>
                    <Image src={L_PG} height={70}/>
                    <Image src={L_nuvoCargo} height={30}/>
                    <Image src={L_racingCargo} height={50}/>
                </div>
            </div>

            <div className='padding60 servicios'>
                <h2>{i18n.t('services')}</h2>
                <h4>{i18n.t('service_description')}</h4>

                <div className='typeServicesList'>
                    <div>
                        <h3>Single Driver</h3>
                        <div className='imageDummy'/>

                    </div>
                    <div>
                        <h3>Team Driver</h3>
                        <div className='imageDummy'/>
                    </div>
                </div>

                <h3>{i18n.t('available_units')}</h3>

                <div className='list'>
                    <div className='imageDummy'/>
                    <div className='imageDummy'/>
                    <div className='imageDummy'/>
                    <div className='imageDummy'/>
                    <div className='imageDummy'/>
                    <div className='imageDummy'/>
                    <div className='imageDummy'/>
                    <div className='imageDummy'/>
                </div>
            </div>
        </div>
        
     );
}

export default Home;