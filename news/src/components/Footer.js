import React from 'react';

export default function Footer() {
    return (
<>
{/* footer start */}
<div className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <h3 className="title">Get in Touch</h3>
                    <div className="contact-info">
                        <p><i className="fa fa-map-marker"></i>123 News Street, NY, USA</p>
                        <p><i className="fa fa-envelope"></i>info@example.com</p>
                        <p><i className="fa fa-phone"></i>+123-456-7890</p>
                        <div className="social">
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <h3 className="title">Useful Links</h3>
                    <ul>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Pellentesque</a></li>
                        <li><a href="#">Aenean vulputate</a></li>
                        <li><a href="#">Vestibulum sit amet</a></li>
                        <li><a href="#">Nam dignissim</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <h3 className="title">Quick Links</h3>
                    <ul>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Pellentesque</a></li>
                        <li><a href="#">Aenean vulputate</a></li>
                        <li><a href="#">Vestibulum sit amet</a></li>
                        <li><a href="#">Nam dignissim</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <h3 className="title">Newsletter</h3>
                    <div className="newsletter">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed porta dui. ClassName aptent taciti sociosqu
                        </p>
                        <form>
                            <input className="form-control" type="email" placeholder="Your email here" />
                            <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* footer bottom */}
<div className="footer-bottom">
    <div className="container">
        <div className="row">
            <div className="col-md-6 copyright">
                <p>Copyright &copy; <a href="https://htmlcodex.com">HTML Codex</a>. All Rights Reserved</p>
            </div>

            <div className="col-md-6 template-by">
                <p>Template By <a href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
        </div>
    </div>
</div>

<a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
</>
    );
}