import "./style/navBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"

const NavBar = ({background}) =>{

    return(

            <header className = {`head background--${background}`}>
                <div className="header-container">

                    <div className="menu-button" size="lg" color="white">
                        <FontAwesomeIcon icon= {faBars} sixze="lg" color="white"/>
                        <small>Menú</small>
                    </div>

                    <nav>
                        <ul className="nav-container">
                            <li>
                                <a href="/">Inicio</a>
                            </li>
                            <li className="product-items">
                                <a href="/">
                                    Productos
                                    <span className="arrow"></span>
                                </a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <a href="/">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="logo-container">
                    </div>

                    <div>
                        <CartWidget />
                    </div>


                </div>
        </header> 

    )
}

export default NavBar