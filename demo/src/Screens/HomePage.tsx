import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Workflow, 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const navigationCards = [
    {
      id: 1,
      title: "Current Manual Process",
      description: "See how supplier registration works today - paper-based, time-consuming, and error-prone.",
      icon: FileText,
      color: "from-red-500 to-orange-500",
      stats: "5-7 days",
      route: "/manual-process"
    },
    {
      id: 2,
      title: "Digitized Workflow",
      description: "Discover the transformed digital process using Microsoft 365 and intelligent automation.",
      icon: Workflow,
      color: "from-blue-500 to-cyan-500",
      stats: "1-2 days",
      route: "/digital-workflow"
    },
    {
      id: 3,
      title: "Copilot in Action",
      description: "Experience AI-powered assistance with natural language queries and smart responses.",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
      stats: "4 demos",
      route: "/copilot-demo"
    },
    {
      id: 4,
      title: "Automation Showcase",
      description: "See auto-generation, smart routing, and SharePoint integration working seamlessly.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      stats: "3 automations",
      route: "/automation"
    },
    {
      id: 5,
      title: "Output Examples",
      description: "View generated forms, summaries, emails, workflows, and structured data outputs.",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      stats: "5 outputs",
      route: "/outputs"
    },
    {
      id: 6,
      title: "Before vs After",
      description: "Compare metrics and see the dramatic efficiency improvements from digitization.",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      stats: "71% faster",
      route: "/comparison"
    }
  ];

  const benefits = [
    { icon: Clock, label: "71% Faster Processing", value: "1-2 days" },
    { icon: CheckCircle, label: "90% Error Reduction", value: "<2% errors" },
    { icon: BarChart3, label: "82% Cost Savings", value: "R370 saved" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Department of Land Reform & Rural Development
                </h1>
                <p className="text-sm text-gray-600 mt-1">Microsoft Copilot Digitization Demo</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">AI-Powered</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Supplier Registration Transformation
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            From Paper to Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mt-2">
              with Microsoft Copilot
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience how artificial intelligence transforms manual supplier registration 
            into an intelligent, automated workflow that saves time, reduces errors, and 
            improves compliance.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{benefit.label}</p>
                    <p className="text-3xl font-bold text-green-600">{benefit.value}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Cards */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore the Demo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationCards.map((card) => {
              const Icon = card.icon;
              const isHovered = hoveredCard === card.id;
              
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => navigate(card.route)}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
                  
                  <div className="p-6">
                    {/* Icon and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {card.stats}
                      </span>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {card.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-green-600 font-semibold text-sm">
                      <span className="group-hover:translate-x-1 transition-transform">
                        Explore
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Use Case Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Use Case: Supplier Registration Process
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This demonstration focuses on transforming the supplier/vendor registration 
                process for the Department of Land Reform and Rural Development. Currently, 
                this process involves manual paper forms, physical document routing, and 
                spreadsheet-based tracking—resulting in delays, errors, and compliance gaps.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>Before:</strong> 5-7 business days, 15-20% error rate, manual tracking
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    <strong>After:</strong> 1-2 business days, &lt;2% error rate, automated workflow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ready to see the transformation?</p>
          <button onClick={() => navigate('/manual-process')} className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto space-x-2">
            <span>Start with Manual Process</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © 2025 Department of Land Reform and Rural Development
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Microsoft Copilot Demo - For Internal Presentation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Demo Mode Active</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;