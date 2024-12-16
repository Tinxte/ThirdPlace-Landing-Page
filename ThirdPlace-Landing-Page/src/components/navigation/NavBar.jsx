import React from 'react'
import Logo from './Logo'

export default function NavBar() {
    return (
        
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Logo/>
                <p className='coming-soon'>Coming Soon</p>
            </div>
        </nav>

    )
}
