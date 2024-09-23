import React from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <div className="container pt-lg-4">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="d-flex align-items-start gap-3">
              <div>
                <img src="/assets/imgs/second_s/Link → SVG.svg" alt="Top quality" />
              </div>
              <div className="col">
                <p className="Texts">Top quality</p>
                <p className="Textss">Lorem ipsum det, consec tetur <br /> adipiscing elit duis nec fringi</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-12">
            <div className="d-flex align-items-start gap-3">
              <div>
                <img src="/assets/imgs/second_s/Link → SVG (1).svg" alt="Mix and match" />
              </div>
              <div>
                <p className="Texts">Mix and match</p>
                <p className="Textss">Lorem ipsum det, duis nec fringi <br /> consec tetur adipiscing elit</p>
              </div>
            </div>
          </div>
          
          {/* Third Column */}
          <div className="col-lg-4 col-12">
            <div className="d-flex align-items-start gap-3">
              <div>
                <img src="/assets/imgs/second_s/Clip path group.svg" alt="Shipping worldwide" />
              </div>
              <div>
                <p className="Texts">Shipping worldwide</p>
                <p className="Textss">Lorem ipsum det, adipiscing elit <br /> duis nec fringi consec tetur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </section>
  );
};

export default FeaturesSection;