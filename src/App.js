import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Outcomes from './components/Outcomes';
import Methodology from './components/Methodology';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <Outcomes />
      <Methodology />
      <SocialProof />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
