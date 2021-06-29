import React, { useEffect, useState } from 'react';
import Link from "gatsby-link";
import Layout from '../components/Layout';

export default function aboutPage() {
  useEffect(() => {
    document.getElementById('linkHome').classList.remove('active');
    document.getElementById('linkAbout').classList.add('active');
  });

  return (
    <Layout>
      {/* breadcumb */}
      <div className="breadcrumb-wrap">
        <div className="container">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">About Us</li>
          </ul>
        </div>
      </div>
      {/* breadcumb end */}

      {/* contact */}
      <div className="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="contact-form">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    />
                  </div>
                  <div>
                    <button className="btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  condimentum quam ac mi viverra dictum. In efficitur ipsum
                  diam, at dignissim lorem tempor in. Vivamus tempor hendrerit
                  finibus.
                </p>
                <h4>
                  <i className="fa fa-map-marker" />
                  123 News Street, NY, USA
                </h4>
                <h4>
                  <i className="fa fa-envelope" />
                  info@example.com
                </h4>
                <h4>
                  <i className="fa fa-phone" />
                  +123-456-7890
                </h4>
                <div className="social">
                  <a href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact end */}
    </Layout>
  );
}
