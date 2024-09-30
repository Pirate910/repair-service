import './style.css'

import Logo from './../../img/Logo.png'
import PhoneIcon from './../../img/phone.svg'
import SearchIcon from './../../img/Search icon.svg'
import SettingsIcon from './../../img/Settings icon.svg'

const Header = () => {
  return ( 
      <div className='header'>
        <div className='header__container container'>


          <div className='header__place header-top'>

              <a href='/'><img alt='logo' className='header--item header-logo' src={Logo}></img></a>

              <div className='header--item header-search'>
                <input type='text' className='header-search-item header-search-place' placeholder='Enter City/Postal Code' ></input>
                <button type='click' className='header-search-btn'>
                   <img alt='SearchPlace' className='header-search-item header-search-icon' src={SearchIcon}></img>
                </button>
              </div>

              <div className='header--item header-contact'>
                <img alt='PhoneIcon' src={PhoneIcon}></img>
                <a className='header-contact-item header-call-phone' href='tel:+12263700170'>+1 226-370-0170</a>
              </div>

          </div>
          
          <div className='header__place header-below'>

            <nav className='header__nav header-nav'>

              <ul className='header__menu header-menu'>
                
                <li className='header__menu--item'><a className='header__menu--item-link' href='/'>Appliance Service</a></li>
                <li className='header__menu--item'><a className='header__menu--item-link' href='/'>Brands</a></li>
                <li className='header__menu--item'><a className='header__menu--item-link' href='/'>Maintance Plans</a></li>
                <li className='header__menu--item'><a className='header__menu--item-link' href='/'>Coupons</a></li>
                <li className='header__menu--item'><a className='header__menu--item-link' href='/'>Reviews</a></li>
                <li className='header__menu--item'><a className='header__menu--item-link' href='/'>About</a></li>
                <li className='header__menu--item'><a className='header__menu--item-link' href='/'>Contact</a></li>
              
              </ul>

            </nav> 

              <button className='header__button' type='button'>
                <img alt='SettingsIcon' src={SettingsIcon}></img>
                BOOK ONLINE
              </button>

          </div>

          

        </div>
      </div>
   );
}
 
export default Header;