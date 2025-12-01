import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle,
  ArrowLeft,
  FileText,
  Send,
  FolderTree,
  Bell,
  Shield,
  ArrowRight,
  Users,
  Database,
  Download
} from 'lucide-react';

const AutomationPage = () => {
  const navigate = useNavigate();
  const [isAutomating, setIsAutomating] = useState(false);
  const [automationProgress, setAutomationProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showSharePoint, setShowSharePoint] = useState(false);
  const [routingStatus, setRoutingStatus] = useState<string>('idle');

  const sharepointStructure = [
    {
      folder: "Agricultural Development",
      suppliers: 45,
      subfolders: ["Agri-Solutions-Pty-Ltd", "FarmTech-SA", "Irrigation-Experts"],
      description: "Farming equipment, seeds, livestock, irrigation systems"
    },
    {
      folder: "Land Surveying & Infrastructure",
      suppliers: 32,
      subfolders: ["GeoSurvey-SA", "Rural-Infrastructure-Group"],
      description: "Land demarcation, geospatial services, rural roads"
    },
    {
      folder: "Rural Community Services",
      suppliers: 28,
      subfolders: ["Community-Development-Partners", "Rural-Skills-Training"],
      description: "Capacity building, community projects, training services"
    },
    {
      folder: "Legal & Advisory Services",
      suppliers: 19,
      subfolders: ["Land-Rights-Attorneys", "Agricultural-Consultants"],
      description: "Land claims, restitution, legal advisory, policy consulting"
    }
  ];

  // Automation 1: Auto-Generate Certificate
  const runCertificateGeneration = () => {
    setIsAutomating(true);
    setAutomationProgress(0);
    setCompletedSteps([]);
    setShowCertificate(false);

    const steps = [1, 2, 3, 4, 5, 6];
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setCompletedSteps(prev => [...prev, steps[currentStep]]);
        setAutomationProgress(((currentStep + 1) / steps.length) * 100);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsAutomating(false);
        setShowCertificate(true);
      }
    }, 800);
  };

  // Automation 2: Auto-Route for Approval
  const runApprovalRouting = () => {
    setRoutingStatus('analyzing');
    
    setTimeout(() => setRoutingStatus('routing'), 1000);
    setTimeout(() => setRoutingStatus('notifying'), 2500);
    setTimeout(() => setRoutingStatus('completed'), 4000);
    setTimeout(() => setRoutingStatus('idle'), 7000);
  };

  // Automation 3: Auto-Tag and Store
  const runSharePointTagging = () => {
    setShowSharePoint(false);
    
    setTimeout(() => setShowSharePoint(true), 500);
  };

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
            DLRRD Intelligent Automation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mt-2">
              Transforming Rural Development
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Department of Land Reform and Rural Development uses AI automation to process 
            supplier registrations faster, support rural communities efficiently, and ensure 
            transparent land reform initiatives.
          </p>
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Zap className="w-4 h-4" />
            <span>Click "Run Automation" buttons to see live demos</span>
          </div>
        </div>

        {/* Interactive Automation Demo: Certificate Generation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🎬 Live Demo: Auto-Generate DLRRD Supplier Certificate
          </h2>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-blue-500">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Automation #1: DLRRD Document Generation</h3>
                  <p className="text-gray-600 mt-1">Watch AI automatically create official DLRRD supplier registration certificate with government watermarks and digital signatures</p>
                </div>
              </div>
              <button
                onClick={runCertificateGeneration}
                disabled={isAutomating}
                className={`px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 flex items-center space-x-2 ${
                  isAutomating 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-xl transform hover:-translate-y-1'
                }`}
              >
                <Zap className="w-5 h-5" />
                <span>{isAutomating ? 'Running...' : 'Run Automation'}</span>
              </button>
            </div>

            {/* Progress Bar */}
            {(isAutomating || completedSteps.length > 0) && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Automation Progress</span>
                  <span className="text-sm font-semibold text-blue-600">{Math.round(automationProgress)}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-out"
                    style={{ width: `${automationProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Automation Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { id: 1, text: "Extract supplier data from Microsoft Forms submission" },
                { id: 2, text: "Load official DLRRD certificate template with RSA coat of arms" },
                { id: 3, text: "Auto-populate supplier details, BEE level, and service categories" },
                { id: 4, text: "Apply DLRRD branding, government watermark, and security features" },
                { id: 5, text: "Generate secure QR code for online verification portal" },
                { id: 6, text: "Create PDF, digital signature, store in DLRRD SharePoint library" }
              ].map((step) => (
                <div 
                  key={step.id}
                  className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${
                    completedSteps.includes(step.id) 
                      ? 'bg-green-50 border-2 border-green-500' 
                      : 'bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    completedSteps.includes(step.id)
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}>
                    {completedSteps.includes(step.id) ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-white text-xs font-bold">{step.id}</span>
                    )}
                  </div>
                  <p className={`text-sm ${
                    completedSteps.includes(step.id) ? 'text-green-700 font-semibold' : 'text-gray-600'
                  }`}>
                    {step.text}
                  </p>
                  {completedSteps.includes(step.id) && isAutomating && completedSteps[completedSteps.length - 1] === step.id && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Generated Certificate Preview */}
            {showCertificate && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-gray-900 text-lg">✅ Certificate Generated Successfully!</h4>
                  </div>
                  <span className="text-xs text-green-700 bg-green-200 px-3 py-1 rounded-full font-semibold">
                    Completed in 4.8 seconds
                  </span>
                </div>
                
                <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-600 mb-2">REPUBLIC OF SOUTH AFRICA</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Department of Land Reform and Rural Development</h3>
                    <div className="text-lg font-semibold text-blue-600">SUPPLIER REGISTRATION CERTIFICATE</div>
                  </div>
                  
                  <div className="border-t-2 border-b-2 border-gray-300 py-4 my-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Legal Name:</p>
                        <p className="font-bold">Agri-Solutions Pty Ltd</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Registration Number:</p>
                        <p className="font-bold">SUP-2025-001234</p>
                      </div>
                      <div>
                        <p className="text-gray-600">BEE Level:</p>
                        <p className="font-bold">Level 2 Contributor</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Issue Date:</p>
                        <p className="font-bold">02 December 2025</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-600">
                      <p>Valid Until: 02 December 2026</p>
                      <p className="mt-1">Verification QR Code: [Generated]</p>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Demo: Approval Routing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🎬 Live Demo: DLRRD Approval Workflow Routing
          </h2>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-purple-500">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Automation #2: DLRRD Intelligent Routing</h3>
                  <p className="text-gray-600 mt-1">Watch AI analyze supplier data and auto-route to correct DLRRD Regional Manager, Compliance Officer, and Director based on province and service category</p>
                </div>
              </div>
              <button
                onClick={runApprovalRouting}
                disabled={routingStatus !== 'idle'}
                className={`px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 flex items-center space-x-2 ${
                  routingStatus !== 'idle'
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl transform hover:-translate-y-1'
                }`}
              >
                <Zap className="w-5 h-5" />
                <span>{routingStatus !== 'idle' ? 'Running...' : 'Run Automation'}</span>
              </button>
            </div>

            {/* Routing Animation */}
            {routingStatus !== 'idle' && (
              <div className="mb-6 bg-purple-50 rounded-xl p-6 border-2 border-purple-300">
                <div className="space-y-3">
                  <div className={`flex items-center space-x-3 transition-all duration-500 ${
                    routingStatus === 'analyzing' ? 'opacity-100' : 'opacity-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      routingStatus === 'analyzing' ? 'bg-blue-500 animate-pulse' : 'bg-green-500'
                    }`}>
                      {routingStatus === 'analyzing' ? (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      ) : (
                        <CheckCircle className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Analyzing Supplier Data...</p>
                      <p className="text-xs text-gray-600">Category: Agricultural Development | Province: Gauteng | BEE Level: 2 | Service: Rural Farming Equipment</p>
                    </div>
                  </div>

                  <div className={`flex items-center space-x-3 transition-all duration-500 ${
                    ['routing', 'notifying', 'completed'].includes(routingStatus) ? 'opacity-100' : 'opacity-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      routingStatus === 'routing' ? 'bg-blue-500 animate-pulse' : 
                      ['notifying', 'completed'].includes(routingStatus) ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {['notifying', 'completed'].includes(routingStatus) ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : routingStatus === 'routing' ? (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      ) : (
                        <span className="text-white text-xs">2</span>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Determining Approval Route...</p>
                      <p className="text-xs text-gray-600">Assigned: DLRRD Regional Manager (Gauteng) → Compliance & BEE Verification Officer → Director: Land Reform</p>
                    </div>
                  </div>

                  <div className={`flex items-center space-x-3 transition-all duration-500 ${
                    ['notifying', 'completed'].includes(routingStatus) ? 'opacity-100' : 'opacity-50'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      routingStatus === 'notifying' ? 'bg-blue-500 animate-pulse' : 
                      routingStatus === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {routingStatus === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : routingStatus === 'notifying' ? (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      ) : (
                        <span className="text-white text-xs">3</span>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sending Notifications...</p>
                      <p className="text-xs text-gray-600">Teams alerts + Email sent to 3 approvers</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {routingStatus === 'completed' && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-500">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-gray-900 text-lg">✅ Approval Workflow Initiated!</h4>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-3 border-2 border-green-300">
                    <p className="text-gray-600 text-xs mb-1">Stage 1: Regional Manager (Gauteng)</p>
                    <p className="font-bold text-gray-900">Ms. Zanele Nkosi</p>
                    <p className="text-xs text-blue-600 mt-1">📱 Teams notification sent to DLRRD Pretoria office</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-2 border-green-300">
                    <p className="text-gray-600 text-xs mb-1">Stage 2: Compliance & BEE Verification</p>
                    <p className="font-bold text-gray-900">Mr. Thabo Mokoena</p>
                    <p className="text-xs text-gray-500 mt-1">⏳ Waiting for Regional Manager approval</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-2 border-green-300">
                    <p className="text-gray-600 text-xs mb-1">Stage 3: Director: Land Reform</p>
                    <p className="font-bold text-gray-900">Dr. Mpho Radebe</p>
                    <p className="text-xs text-gray-500 mt-1">⏳ Final DLRRD approval pending</p>
                  </div>
                </div>
              </div>
            )}

            {/* Automation Details */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg">
                <Bell className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Auto-Notifications</p>
                  <p className="text-xs text-gray-600">Teams + Email alerts</p>
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

        {/* Live Demo: SharePoint Auto-Tagging */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🎬 Live Demo: DLRRD Document Management System
          </h2>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-green-500">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Automation #3: DLRRD SharePoint Document Repository</h3>
                  <p className="text-gray-600 mt-1">Watch AI automatically tag, categorize, and store supplier documents in DLRRD's secure government SharePoint library with retention policies</p>
                </div>
              </div>
              <button
                onClick={runSharePointTagging}
                className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-xl transform hover:-translate-y-1"
              >
                <Zap className="w-5 h-5" />
                <span>Run Automation</span>
              </button>
            </div>

            {!showSharePoint ? (
              <div className="text-center py-12 text-gray-500">
                <FolderTree className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p>Click "Run Automation" to see intelligent document organization</p>
              </div>
            ) : (
              <div>
                {/* Tagging Animation */}
                <div className="mb-6 bg-green-50 rounded-xl p-6 border-2 border-green-300">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">Processing: Agri-Solutions Pty Ltd</h4>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>✓ Created folder: /DLRRD-Suppliers/Agricultural-Development/Agri-Solutions-Pty-Ltd/</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>✓ Uploaded 4 compliance documents (Tax Clearance, BEE Certificate, CIPC, Banking)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>✓ Applied 8 metadata tags (BEE, Province, Category, PAIA compliance)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>✓ Enabled full-text search indexing for DLRRD staff nationwide</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>✓ Set government retention policy: 7 years (per National Archives Act)</span>
                    </div>
                  </div>
                </div>

                {/* Auto-Applied Tags */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                  <p className="font-bold text-gray-900 mb-3">🏷️ Auto-Applied Metadata Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { tag: 'BEE Level 2 Contributor', color: 'bg-purple-100 text-purple-700 border-purple-300' },
                      { tag: 'Gauteng Province', color: 'bg-blue-100 text-blue-700 border-blue-300' },
                      { tag: 'Agricultural Development', color: 'bg-green-100 text-green-700 border-green-300' },
                      { tag: 'DLRRD Approved', color: 'bg-emerald-100 text-emerald-700 border-emerald-300' },
                      { tag: 'SARS Tax Compliant', color: 'bg-cyan-100 text-cyan-700 border-cyan-300' },
                      { tag: 'Rural Development Priority', color: 'bg-orange-100 text-orange-700 border-orange-300' },
                      { tag: 'Land Reform Support', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
                      { tag: 'PAIA Compliant', color: 'bg-pink-100 text-pink-700 border-pink-300' }
                    ].map((item, idx) => (
                      <span key={idx} className={`${item.color} border-2 px-3 py-1 rounded-full text-sm font-semibold`}>
                        {item.tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* SharePoint Structure */}
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 mb-3">📁 DLRRD SharePoint Supplier Repository:</h4>
                  {sharepointStructure.map((category, index) => (
                    <div 
                      key={index} 
                      className={`border-2 rounded-xl p-4 transition-all duration-300 ${
                        category.folder === 'Agricultural Development'
                          ? 'border-green-500 bg-green-50 ring-2 ring-green-300'
                          : 'border-gray-200 hover:border-green-500'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <FolderTree className={`w-5 h-5 ${
                            category.folder === 'Agricultural Development' ? 'text-green-600' : 'text-gray-600'
                          }`} />
                          <h4 className="font-bold text-gray-900">{category.folder}</h4>
                          {category.folder === 'Agricultural Development' && (
                            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                              NEW
                            </span>
                          )}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          category.folder === 'Agricultural Development'
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {category.folder === 'Agricultural Development' ? category.suppliers + 1 : category.suppliers} suppliers
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 ml-8">
                        {category.folder === 'Agricultural Development' && (
                          <div className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-lg font-semibold">
                            <Database className="w-4 h-4" />
                            <span className="text-sm">Agri-Solutions-Pty-Ltd</span>
                            <span className="text-xs">✨ NEW</span>
                          </div>
                        )}
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
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <p className="text-gray-700 mb-4 text-lg font-semibold">
            See the actual AI-generated DLRRD documents and outputs from these automations
          </p>
          <button onClick={() => navigate('/outputs')} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>View Generated Outputs</span>
            <ArrowRight className="w-5 h-5" />
          </button>
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
