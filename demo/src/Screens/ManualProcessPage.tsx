import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Users, 
  Clock, 
  AlertTriangle,
  ArrowRight,
  XCircle,
  FileSpreadsheet,
  Mail,
  FolderOpen,
  ArrowLeft,
  TrendingDown
} from 'lucide-react';

const ManualProcessPage = () => {
  const navigate = useNavigate();

  const processSteps = [
    {
      id: 1,
      title: "Supplier Submits Paper Forms",
      description: "Vendors physically deliver or mail registration forms to DLRRD office",
      icon: FileText,
      duration: "1-2 days",
      issues: ["Lost in mail", "Incomplete forms", "Illegible handwriting"]
    },
    {
      id: 2,
      title: "Officer Receives & Reviews",
      description: "Staff member manually checks physical documents for completeness",
      icon: Users,
      duration: "1 day",
      issues: ["Documents misplaced", "Backlog delays", "No tracking system"]
    },
    {
      id: 3,
      title: "Manual Data Entry",
      description: "Officer types supplier information into Excel spreadsheets",
      icon: FileSpreadsheet,
      duration: "45 min per application",
      issues: ["Typing errors", "Duplicate entries", "Data inconsistency"]
    },
    {
      id: 4,
      title: "Physical Document Routing",
      description: "Paper files physically moved between offices for approvals",
      icon: FolderOpen,
      duration: "3-5 days",
      issues: ["Lost files", "Approval delays", "No status visibility"]
    },
    {
      id: 5,
      title: "Manual Filing",
      description: "Approved documents filed in physical cabinets by category",
      icon: FileText,
      duration: "20 min",
      issues: ["Hard to retrieve", "Storage space issues", "No backup"]
    },
    {
      id: 6,
      title: "Email Notifications",
      description: "Staff manually sends email updates to suppliers",
      icon: Mail,
      duration: "15 min per supplier",
      issues: ["Forgotten notifications", "Inconsistent messaging", "Delayed responses"]
    }
  ];

  const painPoints = [
    {
      icon: Clock,
      title: "5-7 Business Days",
      description: "Average processing time from submission to approval",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: AlertTriangle,
      title: "15-20% Error Rate",
      description: "Manual data entry mistakes and lost documents",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: TrendingDown,
      title: "R450 Per Application",
      description: "High cost due to manual labor and paper usage",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: XCircle,
      title: "No Real-Time Tracking",
      description: "Suppliers can't check application status online",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-red-500">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
            <div className="flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-sm font-semibold text-red-700">Current Manual Process</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FileText className="w-4 h-4" />
            <span>Requirement #1: Current State</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Current Manual Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How supplier registration currently works at DLRRD - a paper-based, 
            time-consuming process with multiple pain points and inefficiencies.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className={`${point.bgColor} rounded-xl p-6 border-2 border-transparent hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1`}
              >
                <Icon className={`w-10 h-10 ${point.color} mb-3`} />
                <h3 className={`text-2xl font-bold ${point.color} mb-2`}>
                  {point.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Step-by-Step Manual Workflow
          </h2>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-red-300 via-orange-300 to-yellow-300 hidden lg:block"></div>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.id}
                    className="relative bg-white rounded-2xl shadow-lg p-6 ml-0 lg:ml-20 hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Step Number Circle */}
                    <div className="absolute -left-20 top-6 hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white font-bold text-xl shadow-lg">
                      {step.id}
                    </div>

                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-red-100 to-orange-100 p-3 rounded-lg">
                          <Icon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div className="bg-red-100 px-3 py-1 rounded-full flex items-center space-x-1 flex-shrink-0">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-semibold text-red-700">
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Issues */}
                    <div className="mt-4 border-t pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Common Issues:</p>
                      <div className="flex flex-wrap gap-2">
                        {step.issues.map((issue, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center space-x-1 bg-red-50 px-3 py-1 rounded-full"
                          >
                            <XCircle className="w-4 h-4 text-red-500" />
                            <span className="text-xs text-red-700">{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow to next step */}
                    {index < processSteps.length - 1 && (
                      <div className="flex justify-center mt-4 lg:hidden">
                        <ArrowRight className="w-6 h-6 text-red-400 transform rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Total Impact Summary */}
        <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Total Manual Process Impact</h2>
            <p className="text-red-100">The cumulative effect of paper-based operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-4xl font-bold mb-2">5.5 Hours</p>
              <p className="text-sm text-red-100">Total staff time per application</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-4xl font-bold mb-2">30+ Minutes</p>
              <p className="text-sm text-red-100">To retrieve filed documents</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <TrendingDown className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-4xl font-bold mb-2">65%</p>
              <p className="text-sm text-red-100">Compliance rate (missing docs)</p>
            </div>
          </div>
        </div>

        {/* Real-World Scenario */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Real-World Example: Agri-Solutions Pty Ltd
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Day 1:</strong> Supplier mails registration forms and documents to DLRRD office.
                </p>
                <p>
                  <strong>Day 3:</strong> Forms arrive at office. Officer discovers missing tax clearance certificate, 
                  calls supplier to request it.
                </p>
                <p>
                  <strong>Day 4:</strong> Officer manually enters data into Excel. Makes typo in bank account number.
                </p>
                <p>
                  <strong>Day 5-7:</strong> Physical file routed between 3 offices for approval signatures.
                </p>
                <p>
                  <strong>Day 8:</strong> Error in bank details discovered during final review. Supplier must 
                  resubmit documentation.
                </p>
                <p className="text-red-600 font-semibold mt-4">
                  ⚠️ Total time: 8+ days with rework needed due to manual errors
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Next Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4 text-lg font-semibold">
            There's a better way to handle supplier registration...
          </p>
          <button onClick={() => navigate('/digital-workflow')} className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2">
            <span>See the Digital Solution</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              DLRRD Copilot Demo - Manual Process Overview
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Step 1 of 6</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-1/6 h-full bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ManualProcessPage;