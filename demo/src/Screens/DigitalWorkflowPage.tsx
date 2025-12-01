import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Cloud, 
  Workflow, 
  Zap,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Users,
  FileText,
  Bell,
  Database,
  Sparkles,
  Shield,
  TrendingUp
} from 'lucide-react';

const DigitalWorkflowPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const digitalSteps = [
    {
      id: 1,
      title: "Online Form Submission",
      description: "Supplier completes digital form via Microsoft Forms with real-time validation",
      icon: FileText,
      tool: "Microsoft Forms",
      duration: "10 minutes",
      benefits: ["Auto-validation", "Mobile-friendly", "Save & resume"]
    },
    {
      id: 2,
      title: "AI Data Extraction",
      description: "Copilot automatically extracts and validates data from uploaded documents",
      icon: Sparkles,
      tool: "Microsoft Copilot",
      duration: "Instant",
      benefits: ["99% accuracy", "OCR scanning", "Smart verification"]
    },
    {
      id: 3,
      title: "Auto-Storage & Tagging",
      description: "Documents automatically saved to SharePoint with metadata tags",
      icon: Database,
      tool: "SharePoint",
      duration: "Instant",
      benefits: ["Searchable", "Versioned", "Secure backup"]
    },
    {
      id: 4,
      title: "Automated Routing",
      description: "Power Automate triggers approval workflow based on supplier category",
      icon: Workflow,
      tool: "Power Automate",
      duration: "Instant",
      benefits: ["Smart routing", "Parallel approvals", "SLA tracking"]
    },
    {
      id: 5,
      title: "Real-Time Notifications",
      description: "Stakeholders receive instant Teams notifications and email updates",
      icon: Bell,
      tool: "Microsoft Teams",
      duration: "Instant",
      benefits: ["Push notifications", "Mobile alerts", "Chat integration"]
    },
    {
      id: 6,
      title: "Certificate Generation",
      description: "Approved suppliers automatically receive registration certificates",
      icon: CheckCircle,
      tool: "Power Automate",
      duration: "Instant",
      benefits: ["Auto-generated", "Digital signature", "PDF delivery"]
    }
  ];

  const m365Tools = [
    {
      name: "Microsoft Forms",
      icon: FileText,
      purpose: "Data Collection",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Copilot AI",
      icon: Sparkles,
      purpose: "Intelligent Processing",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "SharePoint",
      icon: Database,
      purpose: "Document Management",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Power Automate",
      icon: Workflow,
      purpose: "Workflow Automation",
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Teams",
      icon: Users,
      purpose: "Collaboration",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "1-2 Days",
      description: "From submission to approval",
      metric: "71% faster",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: CheckCircle,
      title: "<2% Errors",
      description: "AI-powered validation",
      metric: "90% reduction",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "R80 Cost",
      description: "Per application",
      metric: "82% savings",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Shield,
      title: "98% Compliance",
      description: "Complete documentation",
      metric: "51% increase",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
            <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <Workflow className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Digital Workflow</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Cloud className="w-4 h-4" />
            <span>Requirement #2: Digitized Solution</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Digitized Workflow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mt-2">
              Powered by Microsoft 365
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform supplier registration with intelligent automation, 
            real-time tracking, and seamless collaboration.
          </p>
        </div>

        {/* Key Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div 
                key={index}
                className={`${advantage.bgColor} rounded-xl p-6 border-2 border-transparent hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1`}
              >
                <Icon className={`w-10 h-10 ${advantage.color} mb-3`} />
                <h3 className={`text-2xl font-bold ${advantage.color} mb-1`}>
                  {advantage.title}
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  {advantage.description}
                </p>
                <div className="bg-white px-3 py-1 rounded-full inline-block">
                  <span className="text-xs font-semibold text-green-700">
                    {advantage.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Microsoft 365 Integration */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Microsoft 365 Tools Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {m365Tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-600">{tool.purpose}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Digital Workflow Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Automated Digital Process
          </h2>
          
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-cyan-300 to-green-300 transform -translate-y-1/2" style={{top: '80px'}}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;
                
                return (
                  <div 
                    key={step.id}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`relative bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 transform ${
                      isActive ? 'scale-105 shadow-2xl ring-4 ring-blue-300' : 'hover:shadow-xl'
                    }`}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold flex items-center justify-center text-lg shadow-lg z-10">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-3 rounded-lg inline-block mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {step.description}
                    </p>

                    {/* Tool Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-purple-100 px-3 py-1 rounded-full">
                        <span className="text-xs font-semibold text-purple-700">
                          {step.tool}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-green-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-semibold">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-1">
                      {step.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Real-World Digital Example */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl mb-12">
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Digital Example: Agri-Solutions Pty Ltd
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Day 1, 9:00 AM:</strong> Supplier submits online form with document uploads.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>9:01 AM:</strong> Copilot extracts data, validates completeness, stores in SharePoint.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>9:02 AM:</strong> Workflow auto-routes to Regional Manager. Teams notification sent.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Day 1, 3:00 PM:</strong> Manager approves via mobile Teams app.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Day 2, 10:00 AM:</strong> Compliance officer verifies BEE & tax certificates.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Day 2, 2:00 PM:</strong> Director gives final approval. Certificate auto-generated and emailed.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <p className="text-yellow-300 font-bold text-lg">
                    ✅ Total time: 1.5 days with zero errors and complete audit trail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <Zap className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Tracking</h3>
            <p className="text-gray-600 text-sm">
              Suppliers can check application status online 24/7 via secure portal with live updates.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
            <Shield className="w-10 h-10 text-cyan-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Security</h3>
            <p className="text-gray-600 text-sm">
              Bank-level encryption, role-based access, and complete audit trails for compliance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solution</h3>
            <p className="text-gray-600 text-sm">
              Handle 10x more applications with the same staff. Built to grow with DLRRD needs.
            </p>
          </div>
        </div>

        {/* CTA to Next Section */}
        <div className="text-center">
          <p className="text-gray-700 mb-4 text-lg font-semibold">
            See how Copilot makes this possible with AI-powered assistance
          </p>
          <button onClick={() => navigate('/copilot-demo')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2">
            <Sparkles className="w-5 h-5" />
            <span>Experience Copilot Demo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              DLRRD Copilot Demo - Digital Workflow Overview
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Step 2 of 6</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-2/6 h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalWorkflowPage;