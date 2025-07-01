import React from 'react';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import CoreFeatures from './CoreFeatures';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import CallToAction from './CallToAction';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="page-content">
        <div className="container">
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <CoreFeatures />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home; 