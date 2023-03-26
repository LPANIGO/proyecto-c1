import CartWidget from "./CartWidget"
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/productos/porcelanato" className="nav__link">Porcelanato</Link>
      <Link to="/productos/griferia" className="nav__link">Grifería</Link>
      <NavLink to="/productos/calefaccion" className="nav__link">Calefacción</NavLink>      
      <CartWidget/>
    </nav>
  )
}

export default NavBar