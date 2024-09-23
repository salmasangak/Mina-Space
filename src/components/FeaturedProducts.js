import React from 'react';

const FeaturedProducts = ({ products }) => {
  return (
    <div className='container text-center'>
      <div className=" margin_FPS">
        <p className="forths_black">Featured Products</p>
        <p className="forthss">What’s more, we do it right!</p>
      </div>
      <div className='row'>
        {products.map(product => (
          <div key={product.id} className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className="featured-products">
              <img src={product.img} alt={product.name} className="img-fluid" />
              <p className='fiths'>{product.name}</p>
                <p className='fiths'>
                {product.price}
                {product.oldprice && ` - ${product.oldprice}`}
              </p>            
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;