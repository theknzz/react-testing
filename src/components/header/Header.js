import React from 'react'
import './styles.css'

const Header = () => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <h1 data-test="logoH1">Logo</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;