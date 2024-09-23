import React from 'react';

const Footer = () => {
  return (
    <section>
      <div className="footer pt-2 text-center text-md-start">
        <div className="container d-flex">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="log">
                <img src="/assets/imgs/footer_logo.svg" alt="logo" />
                <div className="Textss p-lg-2">hello@minaspace.io</div>
                <div className="boldBLackFont p-lg-2">+02 036 038 3996</div>
                <div className="Textss p-lg-2">
                  3665 Paseo Place, Suite 0960
                  <br />
                  San Diego
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="info">
                <div className="boldBLackFont p-lg-2">Information</div>
                <div className="Textss p-lg-2">About us</div>
                <div className="Textss p-lg-2">Our Blog</div>
                <div className="Textss p-lg-2">Start a Return</div>
                <div className="Textss p-lg-2">Contact Us</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="useful">
                <div className="boldBLackFont p-lg-2">Useful links</div>
                <div className="Textss p-lg-2">My Account</div>
                <div className="Textss p-lg-2">Print Provider</div>
                <div className="Textss p-lg-2">Become a Partner</div>
                <div className="Textss p-lg-2">Custom Products</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="newsletter">
                <div className="boldBLackFont p-lg-2">Newsletter</div>
                <div className="Textss p-lg-2">
                  Get the latest news, events & more delivered to your inbox.
                </div>

                <div className="footerIcons">
                  <i className="bi bi-arrow-right"></i>
                </div>
                <div className="form-floating">
                  <input className="form-control" placeholder="Your email address" type="email" />
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <img src="/assets/imgs/footer-payment-method.png.svg" alt="footer_icons" />
              <div className="Textss mt-4">© 2022 MinaSpace. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;