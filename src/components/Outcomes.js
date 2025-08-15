import React from 'react';
import { TrendingUp, Clock, Shield, BarChart3, Zap, Target } from 'lucide-react';

const Outcomes = () => {
  const outcomes = [
    {
      icon: Clock,
      metric: "4x faster",
      title: "Threat Intelligence",
      description: "Real-time threat detection and analysis that keeps you ahead of emerging risks",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      metric: "10x faster",
      title: "Risk Assessment",
      description: "Automated vulnerability scanning and scoring for rapid decision-making",
      color: "text-green-400"
    },
    {
      icon: BarChart3,
      metric: "Data-driven",
      title: "Decisions",
      description: "Evidence-based insights that eliminate guesswork from security strategies",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      metric: "Reduced",
      title: "Breach Risks",
      description: "Proactive threat prevention and automated response orchestration",
      color: "text-red-400"
    }
  ];

  const additionalStats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: Zap },
    { number: "24/7", label: "Monitoring", icon: Clock },
    { number: "95%", label: "False Positive Reduction", icon: Target }
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-400">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Results & Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Security Posture
            </span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            See measurable improvements in your cybersecurity operations with AI-powered automation and intelligence.
          </p>
        </div>

        {/* Main Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-dark-700 card-hover"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-dark-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <outcome.icon className="w-8 h-8 text-primary-400" />
              </div>

              {/* Metric */}
              <div className={`text-3xl font-bold ${outcome.color} mb-2`}>
                {outcome.metric}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {outcome.title}
              </h3>

              {/* Description */}
              <p className="text-dark-300 text-sm leading-relaxed">
                {outcome.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalStats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="w-10 h-10 text-primary-400" />
              </div>
              <div className="text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-lg text-dark-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ROI Section */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Return on Investment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">$2.5M</div>
                <div className="text-dark-300">Average annual savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400">85%</div>
                <div className="text-dark-300">Reduction in response time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">3.2x</div>
                <div className="text-dark-300">ROI within first year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
