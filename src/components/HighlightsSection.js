import React from 'react';

const HighlightsSection = () => {
  return (
    <section className="bg-light">
      <div className="container margin_FPS">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src="/assets/imgs/div.elementor-element.svg" alt="Feature Highlight" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6 p-lg-5">
            <p className="sixthsT">
              10,000+ of free<br />images, icons, and<br />graphics
            </p>
            <p className="sixthsTs">
              You’ve got the ideas, we’ve got the tools
            </p>
            <a href="#" className="btn btnl">Get Started</a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HighlightsSection;