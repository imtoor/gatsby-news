import React from 'react';
import { Link } from 'gatsby';
import Nav from './Nav';
import Footer from './Footer';

import logo from '../assets/images/logo.png';
import adsLogo from '../assets/images/ads-1.jpg';

export default function Layout({ children }) {
  const searchNews = (searchText) => {
    window.location.href = `/search_result?search=${searchText}`;
  };
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Gatsby News</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* top bar start */}
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="tb-contact">
                  <p>
                    <i className="fas fa-envelope" />
                    ardiansyahyusuf1096@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone-alt" />
                    0823-4704-3355
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tb-menu">
                  <a href="">About</a>
                  <a href="">Privacy</a>
                  <a href="">Terms</a>
                  <a href="">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* brand start */}
        <div className="brand">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4">
                <div className="b-logo">
                  <Link to="/">
                    <img
                      id="newsLogo"
                      src={logo}
                      alt="Logo"
                      placeholder="blurred"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="b-ads">
                  <a href="https://htmlcodex.com" target="_blank">
                    <img src={adsLogo} alt="Ads" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="b-search">
                  <input type="text" id="search" name="search" placeholder="cari berita" onKeyUp={(e) => e.key === 'Enter' || e.keyCode === 13 ? searchNews(e.target.value):''}  />
                  <button onClick={e => searchNews(document.querySelector('#search').value)}><i className="fa fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Nav />
        {children}
        <Footer />
      </body>
    </>
  );
}
