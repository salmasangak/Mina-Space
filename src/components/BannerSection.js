import React from "react";

function BannerSection() {
  return (
    <section>
      <div className="row">
        <div className="col-lg-6 col-12">
          <img src="/assets/imgs/header/bannerL.jpg.svg" alt="image_l" className="card-img p-lg-0" />
          <div className="position-absolute mx-lg-5">
            <p className="cad-title">T-shirt printing<br />made easy.</p>
            <p className="cad-small-title">Create your design for<br />your online business</p>
            <a href="#" className="btn btnBanner">Create a T-shirt</a>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <img src="/assets/imgs/header/bannerR.jpg.svg" alt="image_l" className="card-img p-lg-0" />
          <div className="position-absolute mx-lg-5 ">
            <p className="cad-title">Bring your ideas<br />to life in minutes</p>
            <p className="cad-small-title">Print shirts for yourself or<br />your creative works</p>
            <a href="#" className="btn btnBanner">Shop Now</a>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </section>
  );
}

export default BannerSection;