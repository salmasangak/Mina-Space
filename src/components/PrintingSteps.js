import React from 'react';

const PrintingSteps = () => {
  return (
    <section>
      <div className="sixths mt-lg-5">
        <div className="container">
          <div className="text-center pt-lg-5">
            <p className="container d-flex flex-row justify-content-center sixthsT">
              T-shirt printing made easy.
            </p>
            <p className="container d-flex flex-row justify-content-center sixthsTs">
              Let us show you how your product comes to life.
            </p>
          </div>
        </div>
        <div className="container d-flex flex-row">
          <br /><br />
          <div className="row">
            <div className="col-lg-6 col-12 p-lg-5">
              <div className="heading p-lg-4">
                <span className="nums">1</span>
                <div className="numsText">
                  Choose from 412 custom products in our<br />catalog
                </div>
              </div>
              <div className="heading p-lg-4">
                <span className=" nums">2</span>
                <div className="numsText">
                  Customize your design with graphics, text<br />or your own uploaded images.
                </div>
              </div>
              <div className="heading p-lg-4">
                <span className=" nums">3</span>
                <div className="numsText">
                  Order prints by selecting your preferred T-<br />shirt size, style, and quantity.
                </div>
              </div>
              <div className=" p-lg-4">
                <span className=" nums">4</span>
                <div className="numsText">
                  Get your order sent to your door with free<br />standard shipping.
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <img
                src="/assets/imgs/sixth_s/div.haru-steps__image.svg"
                className="img-fluid"
                alt="Steps for T-shirt Printing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingSteps;