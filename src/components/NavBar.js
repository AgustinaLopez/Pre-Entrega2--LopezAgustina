import '../App.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <div>
      <nav className='navbar navbar-expand-lg navbar-light sticky-top nav-style'>
        <Link to= "/">
          <div>
            <a className="navbar-brand" href="index.html">
              <img src='https://res.cloudinary.com/dvg9bxeas/image/upload/v1669666949/REACT%20-%20Limonero/logo_ljpgru.png' alt="Logo Limonero"/>
            </a>  
          </div>
        </Link>
        <div>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <Link to="/category/Juguetes">
              <li className='nav-item'>
                Juguetes  
              </li>
            </Link>
            <Link to="/category/Cesteria">
              <li className='nav-item'>
                Canastos
              </li>
            </Link>
            <Link to="/category/Decoracion">
              <li className='nav-item'>
                Decoracion
              </li>
            </Link>
          </ul>
               
        </div>
      <CartWidget/>
      </nav>
       
    </div>
};

export default Navbar;