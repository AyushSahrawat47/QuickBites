import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './media/logo.png'

function Navbar({ setCountry, setValue }) {
    const handleCountryChange = (event) => {
        setCountry(event.target.id);
    }
    const value0 = () => {
        setValue('');
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img 
                            src={Logo} 
                            alt="QuickBites Logo" 
                            width="30" 
                            height="30" 
                            className="d-inline-block align-top me-2"
                        />
                        QuickBites
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li onClick={value0} className="nav-item text-light"> 
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li onClick={value0} className="nav-item text-light"> 
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li onClick={value0} className="nav-item text-light"> 
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li onClick={value0} className="nav-item text-light"> 
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li onClick={value0} className="nav-item text-light"> 
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li onClick={value0} className="nav-item dropdown">
                                <Link 
                                    className="nav-link dropdown-toggle" 
                                    to="#" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Country
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link onClick={handleCountryChange} id="in" className="dropdown-item">India</Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleCountryChange} id="us" className="dropdown-item">United States</Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleCountryChange} id="jp" className="dropdown-item">Japan</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;


