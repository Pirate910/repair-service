import './styles/main.css'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import stuffPhoto from './img/img.png'

import BasicPhone from './img/phone-basic.svg'

function App() {
  return (
    <div className="App">
       <Header />

       <div className='main'>
          <section className='repair-service'>
            <div className='repair-service__container container'>
              <div className='repair-service__side repair-service--info-side'>
                
                <h1 className='repair-service__title'>Appliance Repair Service</h1>
                <h3 className='repair-service__sub-title'>Your Local Appliance Repair Company</h3>

                <ul className='repair-service__efforts-journal'>
                    <li className='repair-service__efforts-item'>
                        Repair of any complexity of all brands of equipment
                    </li>
                    <li className='repair-service__efforts-item'>
                        Affordable rates for various appliance repairs
                    </li>
                    <li className='repair-service__efforts-item'>
                        Licensed, trained techs with years of experience
                    </li>
                    <li className='repair-service__efforts-item'>
                        Same/next-day appointment
                    </li>
                </ul>
                <button className='repair-service__request-call'>
                    <img alt='BasicPhone' src={BasicPhone}></img>
                    Request a call
                </button>
              </div>
            </div>
            <div className='repair-service__side repair-service--stuff-side'>
                <div className='repair-service--stuff-photo'>
                </div>
            </div>
          </section>
       </div>

       <Footer />

    </div>
  );
}

export default App;
