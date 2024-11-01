import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'

export default function NavBar() {
    return (
        
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Logo/>
                <button 
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <NavLinks/>
                </div>
            </div>
        </nav>

    )
}
