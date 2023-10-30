import '../styles/index.scss';
import logo from '../images/logo-adalab.png';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <>
      <div className='header'>
        <Link className='Link-style' to="/">
          <section className='header__section'>
            <i className='header__section--icon fa-solid fa-laptop-code'></i>
            <p className='header__section--text'>Proyectos Molones</p>
          </section>
        </Link>
        <img className='header__logo' src={logo} alt='' />
      </div>
      <div className='header__presentation'>
        <h1 className='header__presentation--h1'>Proyectos Molones</h1>
        <p className='header__presentation--p'>
          Escaparate en línea para recoger ideas a través de la tecnología.
        </p>
      </div>
    </>
  );
}

export default Header;
