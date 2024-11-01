import React from 'react'

export default function NavLinks() {

    return (
        <div className='collapse navbar-collapse' id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-1">
                <li className="nav-item active">
                    <a 
                        className='nav-link'
                        href='#'
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse.show"
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item active">
                    <a 
                        className='nav-link'
                        href="#about"
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse.show"
                    >
                        About
                    </a>
                </li>
                <li className="nav-item active">
                    <a
                        className='nav-link'
                        href='#learn-more'
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse.show"
                    >
                        Sign Up
                    </a>
                </li>
            </ul>
        </div>
    )

}
