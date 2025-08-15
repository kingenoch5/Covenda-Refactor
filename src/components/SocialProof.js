import React from 'react';
import { Award, Users, Building2 } from 'lucide-react';

const SocialProof = () => {
  const partners = [
    { name: "PwC", type: "Global Consulting Partner" },
    { name: "EY", type: "Strategic Advisory Partner" },
    { name: "Cambridge SupTech Lab", type: "Research Collaborator" }
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-400">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Partners & Collaborators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            We collaborate with global consulting firms, research institutions, and industry experts 
            to deliver cutting-edge cybersecurity solutions.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-dark-700 card-hover text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-10 h-10 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
              <p className="text-dark-300">{partner.type}</p>
            </div>
          ))}
        </div>

        {/* OpenAI Grant Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">OpenAI Cybersecurity Grant Program</h3>
                <p className="text-dark-300">Recognized for innovative AI applications in cybersecurity</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-primary-400 font-semibold uppercase tracking-wider mb-2">
                Grant Recipient
              </div>
              <div className="text-3xl font-bold text-white">2024</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-primary-400">500+</div>
            <div className="text-dark-300">Organizations Protected</div>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-accent-400">99.9%</div>
            <div className="text-dark-300">Uptime SLA</div>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-primary-400">24/7</div>
            <div className="text-dark-300">Expert Support</div>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-accent-400">SOC 2</div>
            <div className="text-dark-300">Type II Certified</div>
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="mt-20 p-8 rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-dark-700">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Industry Recognition & Awards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">Gartner</div>
                <div className="text-dark-300">Cool Vendor Recognition</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-400">Forrester</div>
                <div className="text-dark-300">Emerging Technology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">IDC</div>
                <div className="text-dark-300">Innovation Award</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
