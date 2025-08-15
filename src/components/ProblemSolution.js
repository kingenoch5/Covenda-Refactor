import React from 'react';
import { AlertTriangle, Target, TrendingUp, Users } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section id="product" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Problem Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-red-400">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">The Problem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Cybersecurity Challenges Are{' '}
                <span className="text-red-400">Escalating</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.8M</div>
                  <div className="text-dark-300">Global cybersecurity workforce shortage</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">$11.36T</div>
                  <div className="text-dark-300">Projected cost of cyberattacks by 2026</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">78%</div>
                  <div className="text-dark-300">Organizations lack adequate threat intelligence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-primary-400">
                <Target className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Our Solution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                AI-Powered{' '}
                <span className="text-primary-400">Automation</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-dark-300 leading-relaxed">
                Covenda AI automates workflows in cybersecurity risk management, 
                delivering proactive threat intelligence, faster risk analysis, and actionable insights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-4">
                  <div className="text-primary-400 font-semibold mb-2">Proactive Intelligence</div>
                  <div className="text-sm text-dark-400">Real-time threat detection and analysis</div>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-4">
                  <div className="text-primary-400 font-semibold mb-2">Risk Assessment</div>
                  <div className="text-sm text-dark-400">Automated vulnerability scanning and scoring</div>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-4">
                  <div className="text-primary-400 font-semibold mb-2">Actionable Insights</div>
                  <div className="text-sm text-dark-400">Clear recommendations and next steps</div>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-4">
                  <div className="text-primary-400 font-semibold mb-2">Workflow Automation</div>
                  <div className="text-sm text-dark-400">Streamlined incident response processes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
