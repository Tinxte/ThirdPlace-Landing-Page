import React from 'react'
import navLogo from "../../assets/logo-with-type.png"

export default function Logo() {

    return (

        <a class="navbar-brand" href='#'>
            <img 
                src={navLogo}
                className='d-inline-block align-top'
            />
        </a>

    )
}
