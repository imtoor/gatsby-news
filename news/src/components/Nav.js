import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    return (
        <div className="nav-bar">
            <div className="container">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <Link href="#" className="navbar-brand">MENU</Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <Link to="/" id="linkHome" className="nav-item nav-link">Home</Link>
                            <Link to="/about" id="linkAbout" className="nav-item nav-link">About Us</Link>
                        </div>
                        <div className="social ml-auto">
                            <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}