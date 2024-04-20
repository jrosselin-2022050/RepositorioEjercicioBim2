import './Navbar.css'
import logo from '../../assets/img/LogoKinal.jpg'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-content'>
            <span>
                <h1>Kinal Currency Converter</h1>
            </span>
            <img src={logo} alt='LogoKinal'/>
        </div>
    </nav>
  )
}
