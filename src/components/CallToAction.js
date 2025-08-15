import React from 'react';
import { ArrowRight, Shield, Zap, Brain } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-900/20 to-accent-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to strengthen your{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                cybersecurity with AI?
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of organizations already protecting their digital assets with Covenda AI. 
              See the difference AI-powered automation can make in your security operations.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button className="button-primary group text-lg px-8 py-4">
              Request a Demo
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="button-secondary group text-lg px-8 py-4">
              Schedule a Call
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 border-t border-dark-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">Enterprise Security</div>
                  <div className="text-xs text-dark-400">Bank-grade protection</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">Rapid Deployment</div>
                  <div className="text-xs text-dark-400">Live in 30 days</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">AI-Powered</div>
                  <div className="text-xs text-dark-400">Continuous learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="pt-8">
            <div className="inline-flex items-center space-x-2 text-sm text-dark-400">
              <span>✓</span>
              <span>Free 30-day trial</span>
              <span>•</span>
              <span>No credit card required</span>
              <span>•</span>
              <span>Full support included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
