import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle,
  ArrowLeft,
  FileText,
  Send,
  FolderTree,
  Clock,
  Bell,
  Shield,
  ArrowRight,
  Users,
  Database,
  Mail,
  Download
} from 'lucide-react';

const AutomationPage = () => {
  const navigate = useNavigate();
  const [activeAutomation, setActiveAutomation] = useState<number | null>(1);

  const automations = [
    {
      id: 1,
      title: "Auto-Generate Documents",
      description: "Automatically create registration certificates, compliance checklists, and notification emails",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      steps: [
        "Form submission triggers document generation",
        "Template populated with supplier data",
        "DLRRD branding and formatting applied",
        "Digital signature and watermark added",
        "PDF generated and stored in SharePoint",
        "Auto-emailed to supplier and stakeholders"
      ],
      output: "Registration Certificate, Compliance Checklist, Welcome Email"
    },
    {
      id: 2,
      title: "Auto-Route for Approval",
      description: "Intelligent workflow routing based on supplier category, location, and compliance requirements",
      icon: Send,
      color: "from-purple-500 to-pink-500",
      steps: [
        "System analyzes supplier category & location",
        "Assigns appropriate Regional Manager",
        "Routes to Compliance team for verification",
        "Escalates to Director for final approval",
        "Parallel approvals for urgent cases",
        "Auto-escalation if SLA breached"
      ],
      output: "4-stage approval workflow with notifications"
    },
    {
      id: 3,
      title: "Auto-Tag & Store in SharePoint",
      description: "Automatic metadata tagging, folder creation, and document organization in SharePoint",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      steps: [
        "Create supplier-specific folder structure",
        "Apply metadata tags (BEE level, location, category)",
        "Enable content type classification",
        "Set retention and compliance policies",
        "Index for powerful search capabilities",
        "Configure version control & permissions"
      ],
      output: "Organized, searchable document repository"
    }
  ];

  const workflowStages = [
    {
      id: 1,
      name: "Auto-Validation",
      assignee: "System",
      duration: "Instant",
      status: "completed",
      tasks: [
        "Document completeness check",
        "Data format validation",
        "Duplicate detection",
        "Compliance requirements verification"
      ]
    },
    {
      id: 2,
      name: "Regional Manager",
      assignee: "Auto-assigned by location",
      duration: "2 days",
      status: "completed",
      tasks: [
        "Review supplier information",
        "Verify business documentation",
        "Approve or request changes",
        "Mobile approval available"
      ]
    },
    {
      id: 3,
      name: "Compliance Officer",
      assignee: "Compliance Team",
      duration: "1 day",
      status: "in-progress",
      tasks: [
        "BEE certificate verification",
        "Tax clearance validation",
        "Banking details confirmation",
        "Risk assessment completion"
      ]
    },
    {
      id: 4,
      name: "Director Approval",
      assignee: "Department Director",
      duration: "1 day",
      status: "pending",
      tasks: [
        "Final authorization review",
        "Strategic alignment check",
        "Approve registration",
        "Trigger certificate generation"
      ]
    }
  ];

  const sharepointStructure = [
    {
      folder: "Agricultural Equipment",
      suppliers: 45,
      subfolders: ["Agri-Solutions-Pty-Ltd", "FarmTech-SA", "Irrigation-Experts"]
    },
    {
      folder: "Construction Services",
      suppliers: 32,
      subfolders: ["BuildRight-Contractors", "Infrastructure-Plus"]
    },
    {
      folder: "IT & Technology",
      suppliers: 28,
      subfolders: ["TechServe-Solutions", "Digital-Innovations"]
    },
    {
      folder: "Professional Services",
      suppliers: 19,
      subfolders: ["Legal-Advisory-Group", "Consulting-Partners"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
            <div className="flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">Automation Showcase</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            <span>Requirement #4: Automation Demonstration</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Intelligent Automation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mt-2">
              Zero Manual Intervention
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how automation eliminates repetitive tasks, reduces errors, 
            and accelerates supplier registration processing.
          </p>
        </div>

        {/* Three Main Automations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Three Core Automations
          </h2>
          
          <div className="space-y-6">
            {automations.map((automation) => {
              const Icon = automation.icon;
              const isActive = activeAutomation === automation.id;
              
              return (
                <div
                  key={automation.id}
                  onClick={() => setActiveAutomation(automation.id)}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    isActive ? 'ring-4 ring-orange-300 shadow-2xl' : 'hover:shadow-xl'
                  }`}
                >
                  <div className={`h-2 bg-gradient-to-r ${automation.color}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${automation.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {automation.title}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {automation.description}
                          </p>
                        </div>
                      </div>
                      <div className="bg-orange-100 px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-orange-700">
                          Automation #{automation.id}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <div className="mt-6 border-t pt-6">
                        <h4 className="font-bold text-gray-900 mb-4">Automation Steps:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {automation.steps.map((step, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                {idx + 1}
                              </div>
                              <p className="text-sm text-gray-700">{step}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4">
                          <p className="text-sm font-semibold text-gray-900 mb-1">
                            📤 Output Generated:
                          </p>
                          <p className="text-sm text-gray-700">{automation.output}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Approval Workflow Visualization */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Automated Approval Workflow
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300" style={{width: '75%', left: '12.5%'}}></div>
              
              {workflowStages.map((stage, index) => (
                <div key={stage.id} className="relative">
                  {/* Stage Card */}
                  <div className={`bg-white border-2 rounded-xl p-4 relative z-10 ${
                    stage.status === 'completed' ? 'border-green-500 bg-green-50' :
                    stage.status === 'in-progress' ? 'border-blue-500 bg-blue-50' :
                    'border-gray-300 bg-gray-50'
                  }`}>
                    {/* Status Badge */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center ${
                      stage.status === 'completed' ? 'bg-green-500' :
                      stage.status === 'in-progress' ? 'bg-blue-500' :
                      'bg-gray-400'
                    }`}>
                      {stage.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : stage.status === 'in-progress' ? (
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      ) : (
                        <Clock className="w-5 h-5 text-white" />
                      )}
                    </div>

                    {/* Stage Number */}
                    <div className="text-center mb-3">
                      <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold text-lg">
                        {stage.id}
                      </div>
                    </div>

                    {/* Stage Info */}
                    <h4 className="font-bold text-gray-900 text-center mb-1">
                      {stage.name}
                    </h4>
                    <p className="text-xs text-gray-600 text-center mb-2">
                      {stage.assignee}
                    </p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-700 mb-3">
                      <Clock className="w-3 h-3" />
                      <span>{stage.duration}</span>
                    </div>

                    {/* Tasks */}
                    <div className="space-y-1">
                      {stage.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start space-x-1">
                          <CheckCircle className={`w-3 h-3 flex-shrink-0 mt-0.5 ${
                            stage.status === 'completed' ? 'text-green-500' : 'text-gray-400'
                          }`} />
                          <span className="text-xs text-gray-700">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < workflowStages.length - 1 && (
                    <div className="hidden md:flex justify-center items-center my-4 md:my-0 md:absolute md:top-12 md:-right-2 md:transform md:translate-x-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-orange-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Workflow Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg">
                <Bell className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Auto-Notifications</p>
                  <p className="text-xs text-gray-600">Email + Teams alerts</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-purple-50 p-3 rounded-lg">
                <Shield className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">SLA Tracking</p>
                  <p className="text-xs text-gray-600">Auto-escalation</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Mobile Approvals</p>
                  <p className="text-xs text-gray-600">Approve anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SharePoint Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Auto-Tagging & SharePoint Organization
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <FolderTree className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  DLRRD Suppliers Repository
                </h3>
                <p className="text-gray-600">
                  Automatically organized by category with intelligent metadata tagging
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {sharepointStructure.map((category, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-xl p-4 hover:border-green-500 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <FolderTree className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-gray-900">{category.folder}</h4>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {category.suppliers} suppliers
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 ml-8">
                    {category.subfolders.map((subfolder, idx) => (
                      <div key={idx} className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-lg">
                        <Database className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">{subfolder}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Metadata Tags Example */}
            <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <p className="font-bold text-gray-900 mb-3">🏷️ Auto-Applied Metadata Tags:</p>
              <div className="flex flex-wrap gap-2">
                {['BEE Level 2', 'Gauteng Region', 'Agricultural Equipment', 'Active', 'Tax Compliant', 'High Priority'].map((tag, idx) => (
                  <span key={idx} className="bg-white border-2 border-green-300 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Auto-Generated Email Example */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Auto-Generated Email Notification
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Automatically sent when supplier registration is approved
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="mb-4">
                  <p className="text-sm text-gray-600"><strong>To:</strong> thabo@agrisolutions.co.za</p>
                  <p className="text-sm text-gray-600"><strong>From:</strong> suppliers@dlrrd.gov.za</p>
                  <p className="text-sm text-gray-600"><strong>Subject:</strong> Registration Approved - Agri-Solutions Pty Ltd</p>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-gray-800 mb-3">Dear Agri-Solutions Pty Ltd,</p>
                  <p className="text-gray-800 mb-3">
                    Your supplier registration application has been <strong className="text-green-600">APPROVED</strong>.
                  </p>
                  <p className="text-gray-800 mb-3">
                    <strong>Application Reference:</strong> SUP-2025-001234<br/>
                    <strong>Approval Date:</strong> 02 December 2025<br/>
                    <strong>BEE Level:</strong> Level 2 Contributor
                  </p>
                  <p className="text-gray-800 mb-3">
                    Your registration certificate is attached to this email.
                  </p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              DLRRD Copilot Demo - Automation Showcase
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Step 4 of 6</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-4/6 h-full bg-orange-500"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AutomationPage;