import React from 'react';

const ShopSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className="sec_one">
              <button className="btn-light thirdbutn">Shop Hoodies</button>
            </div>
            <div className="sec_two">
              <button className="btn-light thirdbutn">Shop Tanktop</button>
            </div>
          </div>
          
          <div className="col-lg-6 col-12">
            <div className="sec_three">
              <button className="btn-light third_butn">Shop Tanktop</button>
            </div>
          </div>
          
          <div className="col-lg-3 col-12">
            <div className="sec_four">
              <button className="btn-light thirdbutn">Shop Sweater</button>
            </div>
            <div className="sec_five">
              <button className="btn-light thirdbutn">Shop Designer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;