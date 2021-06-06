import React,{ useEffect, useState } from 'react';
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
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Contact</li>
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
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div><button className="btn" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
                            </p>
                            <h4><i className="fa fa-map-marker"></i>123 News Street, NY, USA</h4>
                            <h4><i className="fa fa-envelope"></i>info@example.com</h4>
                            <h4><i className="fa fa-phone"></i>+123-456-7890</h4>
                            <div className="social">
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
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