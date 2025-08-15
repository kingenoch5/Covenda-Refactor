import React from 'react';
import { Search, MessageSquare, CheckCircle, Zap, ArrowRight } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      icon: Search,
      title: "Threat Intelligence",
      description: "AI algorithms continuously monitor global threat landscapes, analyzing patterns and identifying emerging risks in real-time.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: MessageSquare,
      title: "Risk Assessment",
      description: "Guided conversational interfaces enable comprehensive risk evaluation through natural language processing and automated analysis.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: CheckCircle,
      title: "Verification & Validation",
      description: "Multi-layered verification ensures accuracy with automated compliance checking and policy enforcement across infrastructure.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: Zap,
      title: "Automated Orchestration",
      description: "Intelligent response orchestration automatically executes remediation actions and coordinates incident response workflows.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    }
  ];

  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-400">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Methodology
            </span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A proven four-step process that transforms raw threat data into actionable security intelligence and automated responses.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className={`group relative p-6 rounded-2xl border ${step.borderColor} ${step.bgColor} backdrop-blur-sm card-hover h-full`}>
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Arrow Connector (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center border border-dark-600">
                    <ArrowRight className="w-4 h-4 text-dark-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Description */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-dark-700/50 to-dark-800/50 border border-dark-600">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Continuous Improvement Cycle
            </h3>
            <p className="text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Our methodology doesn't end with automated orchestration. Each response feeds back into our AI models, 
              continuously improving threat detection accuracy and response effectiveness. This creates a virtuous cycle 
              where your security posture strengthens over time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">Real-time</div>
                <div className="text-dark-300">Continuous monitoring and updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-400">Adaptive</div>
                <div className="text-dark-300">Learning from every interaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">Scalable</div>
                <div className="text-dark-300">Grows with your organization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
