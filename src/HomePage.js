import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BannerSection from "./components/BannerSection";
import FeaturesSection from './components/FeaturesSection';
import ShopSection from './components/ShopSection';
import FeaturedProducts from './components/FeaturedProducts';
import PrintingSteps from './components/PrintingSteps';
import FeaturesHighlight from './components/FeaturesHighlight';
import HighlightsSection from './components/HighlightsSection'; 
import PricingSection from './components/PricingSection'; 
import JoinSection from './components/JoinSection'; 
import TestimonialsSection from './components/TestimonialsSection'; 
import Footer from './components/Footer';

const apiUrl = 'https://66d384e0184dce1713d0607f.mockapi.io/product/product';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <BannerSection />
      <FeaturesSection />
      <ShopSection />
      <FeaturedProducts products={products} /> {/* Pass products data to FeaturedProducts */}
      <PrintingSteps />
      <FeaturesHighlight />
      <HighlightsSection />
      <JoinSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default HomePage;