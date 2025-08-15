import React from 'react';
import { Brain, MessageSquare, Shield, TrendingUp, Zap, Eye, Lock, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-powered Threat Intelligence",
      description: "Advanced machine learning algorithms analyze global threat landscapes in real-time, providing predictive insights and early warning systems.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: MessageSquare,
      title: "Guided Conversational Risk Assessment",
      description: "Natural language processing enables intuitive risk evaluation through conversational interfaces, making complex assessments accessible to all team members.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Shield,
      title: "ML-powered Security Auditor",
      description: "Automated security compliance checking with continuous monitoring and real-time policy enforcement across your entire infrastructure.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: TrendingUp,
      title: "Automated Risk Predictions & Response",
      description: "Predictive analytics identify potential threats before they materialize, with automated response orchestration to minimize impact.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    }
  ];

  return (
    <section id="technology" className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-400">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Product Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Powered by Advanced{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              AI Technology
            </span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools transforms how organizations approach cybersecurity risk management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border ${feature.borderColor} ${feature.bgColor} backdrop-blur-sm card-hover`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-dark-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Capabilities */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto">
              <Eye className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Real-time Monitoring</h3>
            <p className="text-dark-300">24/7 surveillance of your digital assets with instant alerting</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8 text-accent-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Zero Trust Architecture</h3>
            <p className="text-dark-300">Continuous verification and least-privilege access controls</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto">
              <BarChart3 className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Advanced Analytics</h3>
            <p className="text-dark-300">Deep insights into security posture and risk trends</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
