import './style.css';
import React, {useState, useEffect} from 'react';
import getDate from '../../utils/datenow';

import YouTube from './../../img/icons/youtube.svg'
import Facebook from './../../img/icons/little-facebook-logo-svgrepo-com 1.svg'
import Pinterest from './../../img/icons/pinterest-4 1.svg'
import Instagram from './../../img/icons/instagram.svg'
import AlphaRepairLogo from './../../img/LogoMark.png'
import PhoneIcon from './../../img/phone.svg'
import SettingsIcon from './../../img/Settings icon.svg'



const Footer = () => {

  const [currentDate, setCurrentDate] = useState(getDate())

  function getDate(){
    const today = new Date()
    const year = today.getFullYear();
  
    return `${year}`
  }

  return ( 
      <div className='footer'>

        <div className='company-info'>
          <div className='company-info__container container'>

              <ul className='company-info__info-places'>

                <li className='info-places__main-block info-places__location-contacts'>

                  <ul className='location-contacts__list'>     

                    <li className='location-contacts__list-item'>
                      <div className='location-contacts--title-block'>
                          <img alt='AlphaRepairLogo' src={AlphaRepairLogo}></img>
                          <h1 className='location-contacts--title'>
                              ALPHA
                              <span className='location-contacts--title-span'>APPLIANCE REPAIR</span>
                          </h1>
                      </div>
                    </li>

                    <li className='location-contacts__list-item'>
                      <div className='location-contacts--phone'>
                        <img alt='PhoneIcon' src={PhoneIcon}></img>
                        <a className='location-contacts--phone-number' href='tel: +12263700170'>+1 226-370-0170</a>
                      </div>
                    </li>

                    <li className='location-contacts__list-item'>
                      <address>
                        <a href='https://maps.app.goo.gl/WqT4aSKrut6SW7SUA' className='location-contacts--location'>Unit 4, 5267 Explorer drive,
                        Toronto, On L4W 4T7</a>
                      </address>
                    </li>

                    <li className='location-contacts__list-item'>
                      <address>
                        <a href='mailto:info@appliancerepairexpert.ca' className='location-contacts--email'>info@appliancerepairexpert.ca</a>
                      </address>
                    </li>

                    <li className='location-contacts__list-item'>

                      <button className='header__button' type='button'>
                        <img alt='SettingsIcon' src={SettingsIcon}></img>
                        BOOK ONLINE
                      </button>

                    </li>

                  </ul>

                </li>

                <li className='info-places__main-block info-places__about-info'>

                  <nav className='about-info__list-nav'>

                    <ul className='about-info__list'>

                      <li className='about-info__list-item'>
                        <h3 className='about-info--title'>ABOUT COMPANY</h3>
                          <ul className='about-info--item-list'>
                              <li className='about-info--item'><a href='/'>Maintance Plans</a></li>
                              <li className='about-info--item'><a href='/'>Coupons</a></li>
                              <li className='about-info--item'><a href='/'>Review</a></li>
                              <li className='about-info--item'><a href='/'>FaQ</a></li>
                              <li className='about-info--item'><a href='/'>Blog</a></li>
                              <li className='about-info--item'><a href='/'>Contact</a></li>
                          </ul>
                      </li>

                      <li className='about-info__list-item'>
                        <h3 className='about-info--title'>CUSTOMER SERVICES</h3>
                          <ul className='about-info--item-list'>
                            <li className='about-info--item'><a href="/">Residential</a></li>
                            <li className='about-info--item'><a href="/">Commercial</a></li>
                            <li className='about-info--item'><a href="/">Repair</a></li>
                            <li className='about-info--item'><a href="/">Installation</a></li>
                          </ul>
                      </li>

                      <li className='about-info__list-item'>
                        <h3 className='about-info--title'>HELP AND SUPPORTY</h3>
                          <ul className='about-info--item-list'>
                            <li className='about-info--item'><a href="/">Appliance Repair Warranty</a></li>
                            <li className='about-info--item'><a href="/">Cancellation Policy</a></li>
                            <li className='about-info--item'><a href="/">Privacy Policy</a></li>
                            <li className='about-info--item'><a href="/">Careers</a></li>
                          </ul>
                      </li>

                    </ul>

                  </nav>

                  <li className='location-contacts__list-item'>
                      <ul className='location-contacts--social-media-list'>
                        <li className='social-media-list-item'>
                          <a href='/' className='social-media-item-link'>
                            <img className='social-media-icon' alt='YouTube' src={YouTube}></img>
                          </a>
                        </li>
                        <li className='social-media-list-item'>
                          <a href='/'>
                            <img className='social-media-icon' alt='Facebook' src={Facebook}></img>
                          </a>
                        </li>
                        <li className='social-media-list-item'>
                          <a href='/'>                    
                            <img className='social-media-icon' alt='Pinterest' src={Pinterest}></img>
                          </a>
                        </li>
                        <li className='social-media-list-item'>
                          <a href='/'>
                            <img className='social-media-icon' alt='Instagram' src={Instagram}></img>
                          </a>
                        </li>
                      </ul>

                  </li>
                
                </li>

              </ul>

              <div className='company-info__year'>All rights reserved © 2005-{currentDate}</div>
          
          </div>
        </div>
  
      </div>
   );
}
 
export default Footer;