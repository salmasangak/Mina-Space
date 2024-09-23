import React from "react";


function Header() {
return (
    <section>
      <div className="headT">
        <div className="container d-flex flex-row justify-content-between">
          <div className="col-lg-4">
            <img src="/assets/imgs/twitter.svg" alt="Image 1" className="p-lg-3" />
            <img src="/assets/imgs/fb.svg" alt="Image 2" className="p-lg-3" />
            <img src="/assets/imgs/insta.svg" alt="Image 3" className="p-lg-3" />
            <img src="/assets/imgs/youtube.svg" alt="Image 4" className="p-lg-2" />
          </div>
          <div className="col-lg-4 mx-lg-5 d-none d-md-block">
            <div className="mainf">
              <img src="/assets/imgs/fire.svg" alt="fire" / >
              <p className="Tex mt-3">Free shipping on all U.S. orders $50+</p>
            </div>
          </div>
          <div className="col-lg-4 mx-lg-5">
            <button type="button" className="btn btn-light mt-2 my-2">
              Login
            </button>
            <button type="button" className="btn btn-dark mt-2 my-2">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
);
}

export default Header;