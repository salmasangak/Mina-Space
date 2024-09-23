import React from 'react';

const PricingSection = () => {
  return (
    <section >
      <div className="back_main pt-lg-5">
        <div className="text-center ">
          <div className="forths_black pt-lg-5 ">Simple pricing for everyone</div>
          <p className="forthss mt-lg-2">Choose a plan and get started</p>
        </div>
        <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-4 col-xl-4">
                <div className="card border-0 last_card">
                  <div className="card-body text-center bo">
                    <div className="card_H p-lg-4 mt-lg-4">Personal</div>
                    <div className='mb-lg-5'>
                    <h2 className="card-title card_T_B">$12.99</h2>
                    <p className="m_team">/user</p>
                    </div>

                    <hr />

                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Free licensed icons</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Fast and free standard shipping</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>No credit card required</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Friendly support</p>
                    </div>
                    <a href="#" className="btn glast_btn mb-lg-2">Get Started</a>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-lg-4 col-xl-4 p-lg-4">
                <div className="card border-0 last_card">
                  <div className="card-body text-center bo">
                    <div className="black_back ">Popular</div>
                    <div className="card_H p-lg-4">Professional</div>
                    <div className='mb-lg-5'>
                    <h2 className="card-title card_T_B">$59.99</h2>
                    <p className="m_team">/team</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Full access to all features</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Fast and free standard shipping</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>No credit card required</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Use on unlimited projects</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Team collaboration feature</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Friendly support</p>
                    </div>
                    <br />
                    <a href="#" className="btn last_btn">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-xl-4">
                <div className="card border-0 last_card">
                  <div className="card-body text-center bo">
                    <h6 className="card_H p-lg-4 mt-lg-4">Enterprise</h6>
                    <div className='mb-lg-5'>
                    <h2 className="card-title  card_T_B">$99.99</h2>
                    <p className="m_team">/team</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>All features in Pro Plan</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Use on unlimited projects</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Team collaboration feature</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span className="box_grey">&#10003;</span>
                      <p>Friendly support</p>
                    </div>
                    <a href="#" className="btn glast_btn  mb-lg-2">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default PricingSection;