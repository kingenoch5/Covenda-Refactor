import React from 'react';
import { ArrowRight, Shield, Zap, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-full px-4 py-2 text-sm text-dark-300">
            <Shield className="w-4 h-4 text-primary-400" />
            <span>AI-Powered Cybersecurity</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Automating Cybersecurity Risk Management{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Workflows with AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Covenda AI empowers defenders in finance and healthcare with AI-driven automation, 
            saving organizations millions in cyber defense costs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="button-primary group">
              Request a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="button-secondary group">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">4x</div>
              <div className="text-sm text-dark-400">Faster Threat Intelligence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">10x</div>
              <div className="text-sm text-dark-400">Faster Risk Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">$11.36T</div>
              <div className="text-sm text-dark-400">Cyberattack Cost by 2026</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dark-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
