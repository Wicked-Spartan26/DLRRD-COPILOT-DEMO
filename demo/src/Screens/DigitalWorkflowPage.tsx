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
  TrendingUp,
  Building2,
  Phone,
  DollarSign,
  Award
} from 'lucide-react';

const DigitalWorkflowPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const digitalSteps = [
    {
      id: 1,
      title: "Copilot Receives Submission",
      description: "DLRRD officer gets instant Teams notification. Copilot summarizes the application in 30 seconds",
      icon: Bell,
      tool: "Microsoft Copilot + Teams",
      duration: "30 seconds",
      benefits: ["Auto-summary of supplier profile", "Risk flags highlighted", "Priority scoring"],
      copilotAction: "Copilot creates executive summary: 'Agri-Solutions, Level 2 BEE, Agricultural equipment, 3 provinces, all docs valid'",
      staffTask: "Review summary instead of reading 15+ pages"
    },
    {
      id: 2,
      title: "Copilot Validates Documents",
      description: "Officer asks Copilot to check compliance. AI scans tax clearance, BEE cert, and banking docs",
      icon: Sparkles,
      tool: "Microsoft Copilot",
      duration: "1 minute",
      benefits: ["OCR extracts all data points", "Checks expiry dates", "Verifies CIPC registration"],
      copilotAction: "Officer types: 'Check if all compliance documents are valid' - Copilot responds with detailed validation report",
      staffTask: "Review Copilot's findings instead of manual verification"
    },
    {
      id: 3,
      title: "Copilot Drafts Approval Email",
      description: "Officer asks Copilot to draft communication. AI generates email in department tone",
      icon: FileText,
      tool: "Microsoft Copilot + Outlook",
      duration: "2 minutes",
      benefits: ["Professional tone", "Includes all details", "Multilingual support"],
      copilotAction: "Officer prompts: 'Draft approval email for Agri-Solutions' - Copilot creates personalized message with tracking number",
      staffTask: "Review and send instead of writing from scratch"
    },
    {
      id: 4,
      title: "Copilot Updates SharePoint",
      description: "Officer asks Copilot to file documents. AI tags and organizes everything automatically",
      icon: Database,
      tool: "Microsoft Copilot + SharePoint",
      duration: "Instant",
      benefits: ["Auto-tags by category", "Links related documents", "Creates folder structure"],
      copilotAction: "Officer says: 'File these supplier documents' - Copilot organizes by region, category, and date",
      staffTask: "Verify organization instead of manual filing"
    },
    {
      id: 5,
      title: "Copilot Routes for Approval",
      description: "Officer triggers workflow. Copilot identifies correct approvers based on supplier category",
      icon: Workflow,
      tool: "Power Automate + Copilot",
      duration: "Instant",
      benefits: ["Smart routing logic", "Parallel approvals", "SLA tracking"],
      copilotAction: "Copilot determines: 'Agricultural equipment requires Regional Manager + Compliance Officer approval'",
      staffTask: "Confirm routing instead of looking up approval matrix"
    },
    {
      id: 6,
      title: "Copilot Generates Certificate",
      description: "Final approver asks Copilot to create certificate. AI populates template with verified data",
      icon: CheckCircle,
      tool: "Microsoft Copilot + Word",
      duration: "30 seconds",
      benefits: ["Uses official template", "Pre-fills all fields", "Digital signature ready"],
      copilotAction: "Approver prompts: 'Generate supplier certificate' - Copilot creates PDF with all details, QR code, and signature block",
      staffTask: "Review and sign instead of manual data entry"
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
            See how Copilot <strong className="text-purple-600">assists DLRRD officers</strong> in processing supplier registrations with intelligent automation, 
            real-time assistance, and seamless collaboration across Microsoft 365 tools.
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Users className="w-4 h-4" />
            <span>Focus: How Officers Use Copilot Daily</span>
          </div>
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

        {/* Interactive Supplier Registration Form Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Interactive Supplier Registration Form
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Based on SABC and general vendor registration requirements - see how suppliers submit their information digitally
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-blue-500">
            {!showForm ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  DLRRD Supplier Registration Portal
                </h3>
                <p className="text-gray-600 mb-6">
                  Digital form with real-time validation, auto-save, and instant submission
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>View Registration Form</span>
                </button>
              </div>
            ) : (
              <div>
                {/* Form Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-blue-500">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Supplier Registration Form</h3>
                    <p className="text-sm text-gray-600 mt-1">All fields are validated in real-time • Auto-saved every 30 seconds</p>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕ Close
                  </button>
                </div>

                {/* Form Content - Based on SABC/General Vendor Requirements */}
                <div className="space-y-6">
                  {/* Section 1: Company Information */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                      1. Company Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Legal Company Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Agri-Solutions Pty Ltd"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          defaultValue="Agri-Solutions Pty Ltd"
                        />
                        <p className="text-xs text-green-600 mt-1">✓ Valid company name</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Trading Name (if different)
                        </label>
                        <input
                          type="text"
                          placeholder="Trading or brand name"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Company Registration Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 2019/123456/07"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          defaultValue="2019/123456/07"
                        />
                        <p className="text-xs text-green-600 mt-1">✓ Valid CIPC number</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Tax Reference Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="10-digit tax number"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          defaultValue="9876543210"
                        />
                        <p className="text-xs text-green-600 mt-1">✓ Valid tax number</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          VAT Number (if registered)
                        </label>
                        <input
                          type="text"
                          placeholder="VAT number"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          defaultValue="4123456789"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          BEE Level <span className="text-red-600">*</span>
                        </label>
                        <select
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          defaultValue="level-2"
                        >
                          <option value="">Select BEE Level</option>
                          <option value="level-1">Level 1 Contributor</option>
                          <option value="level-2">Level 2 Contributor</option>
                          <option value="level-3">Level 3 Contributor</option>
                          <option value="level-4">Level 4 Contributor</option>
                          <option value="non-compliant">Non-Compliant</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Contact Information */}
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Phone className="w-5 h-5 text-green-600 mr-2" />
                      2. Contact Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Primary Contact Person <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Full name"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                          defaultValue="Thabo Maseko"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Position/Title
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., CEO, Director"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                          defaultValue="Chief Executive Officer"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Email Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email@company.com"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                          defaultValue="thabo@agrisolutions.co.za"
                        />
                        <p className="text-xs text-green-600 mt-1">✓ Valid email format</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Phone Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+27 XX XXX XXXX"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                          defaultValue="+27 11 234 5678"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Physical Address <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Street address"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none mb-2"
                          defaultValue="123 Farm Road, Pretoria"
                        />
                        <div className="grid grid-cols-3 gap-2">
                          <input
                            type="text"
                            placeholder="City"
                            className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                            defaultValue="Pretoria"
                          />
                          <input
                            type="text"
                            placeholder="Province"
                            className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                            defaultValue="Gauteng"
                          />
                          <input
                            type="text"
                            placeholder="Postal Code"
                            className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                            defaultValue="0001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Banking Details */}
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <DollarSign className="w-5 h-5 text-purple-600 mr-2" />
                      3. Banking Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Bank Name <span className="text-red-600">*</span>
                        </label>
                        <select
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                          defaultValue="fnb"
                        >
                          <option value="">Select Bank</option>
                          <option value="absa">ABSA</option>
                          <option value="fnb">First National Bank</option>
                          <option value="nedbank">Nedbank</option>
                          <option value="standard">Standard Bank</option>
                          <option value="capitec">Capitec</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Account Type <span className="text-red-600">*</span>
                        </label>
                        <select
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                          defaultValue="business-cheque"
                        >
                          <option value="">Select Type</option>
                          <option value="business-cheque">Business Cheque</option>
                          <option value="business-savings">Business Savings</option>
                          <option value="current">Current Account</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Account Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Account number"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                          defaultValue="62012345678"
                        />
                        <p className="text-xs text-green-600 mt-1">✓ Valid account number</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Branch Code <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="6-digit branch code"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                          defaultValue="250655"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Service Categories */}
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 text-orange-600 mr-2" />
                      4. Products/Services Offered
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Primary Category <span className="text-red-600">*</span>
                        </label>
                        <select
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                          defaultValue="agricultural"
                        >
                          <option value="">Select Category</option>
                          <option value="agricultural">Agricultural Equipment</option>
                          <option value="construction">Construction Services</option>
                          <option value="it">IT & Technology</option>
                          <option value="professional">Professional Services</option>
                          <option value="logistics">Logistics & Transport</option>
                          <option value="consulting">Consulting Services</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Select all applicable subcategories:
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-orange-200">
                            <input type="checkbox" className="form-checkbox text-orange-600" defaultChecked />
                            <span className="text-sm">Tractors</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-orange-200">
                            <input type="checkbox" className="form-checkbox text-orange-600" defaultChecked />
                            <span className="text-sm">Irrigation Systems</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-orange-200">
                            <input type="checkbox" className="form-checkbox text-orange-600" defaultChecked />
                            <span className="text-sm">Harvesting Equipment</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-gray-300">
                            <input type="checkbox" className="form-checkbox text-orange-600" />
                            <span className="text-sm">Seeds & Fertilizers</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-gray-300">
                            <input type="checkbox" className="form-checkbox text-orange-600" />
                            <span className="text-sm">Livestock Equipment</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-gray-300">
                            <input type="checkbox" className="form-checkbox text-orange-600" />
                            <span className="text-sm">Storage Solutions</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Geographic Coverage <span className="text-red-600">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-orange-200">
                            <input type="checkbox" className="form-checkbox text-orange-600" defaultChecked />
                            <span className="text-sm">Gauteng</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-orange-200">
                            <input type="checkbox" className="form-checkbox text-orange-600" defaultChecked />
                            <span className="text-sm">Limpopo</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-orange-200">
                            <input type="checkbox" className="form-checkbox text-orange-600" defaultChecked />
                            <span className="text-sm">Mpumalanga</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-gray-300">
                            <input type="checkbox" className="form-checkbox text-orange-600" />
                            <span className="text-sm">Western Cape</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-gray-300">
                            <input type="checkbox" className="form-checkbox text-orange-600" />
                            <span className="text-sm">KwaZulu-Natal</span>
                          </label>
                          <label className="flex items-center space-x-2 p-2 bg-white rounded border-2 border-gray-300">
                            <input type="checkbox" className="form-checkbox text-orange-600" />
                            <span className="text-sm">Eastern Cape</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Document Upload */}
                  <div className="bg-indigo-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-indigo-600 mr-2" />
                      5. Compliance Documents Upload
                    </h4>
                    <div className="space-y-3">
                      <div className="border-2 border-dashed border-indigo-300 rounded-lg p-4 bg-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <div>
                              <p className="font-semibold text-gray-900">Tax Clearance Certificate</p>
                              <p className="text-xs text-gray-600">tax_clearance_2025.pdf • 1.2 MB</p>
                            </div>
                          </div>
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                            ✓ Uploaded & Verified
                          </span>
                        </div>
                      </div>

                      <div className="border-2 border-dashed border-indigo-300 rounded-lg p-4 bg-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <div>
                              <p className="font-semibold text-gray-900">BEE Certificate</p>
                              <p className="text-xs text-gray-600">bee_level2_certificate.pdf • 890 KB</p>
                            </div>
                          </div>
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                            ✓ Uploaded & Verified
                          </span>
                        </div>
                      </div>

                      <div className="border-2 border-dashed border-indigo-300 rounded-lg p-4 bg-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <div>
                              <p className="font-semibold text-gray-900">Company Registration (CIPC)</p>
                              <p className="text-xs text-gray-600">cipc_registration.pdf • 650 KB</p>
                            </div>
                          </div>
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                            ✓ Uploaded & Verified
                          </span>
                        </div>
                      </div>

                      <div className="border-2 border-dashed border-indigo-300 rounded-lg p-4 bg-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <div>
                              <p className="font-semibold text-gray-900">Bank Confirmation Letter</p>
                              <p className="text-xs text-gray-600">bank_confirmation.pdf • 420 KB</p>
                            </div>
                          </div>
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                            ✓ Uploaded & Verified
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 mt-4 flex items-center">
                      <Sparkles className="w-4 h-4 text-purple-600 mr-1" />
                      AI automatically extracts and validates data from uploaded documents
                    </p>
                  </div>

                  {/* Submit Section */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Ready to Submit</h4>
                        <p className="text-sm text-gray-600">All required fields are complete and validated</p>
                        <div className="flex items-center space-x-4 mt-3 text-xs">
                          <div className="flex items-center space-x-1 text-green-700">
                            <CheckCircle className="w-4 h-4" />
                            <span>Auto-saved 30 seconds ago</span>
                          </div>
                          <div className="flex items-center space-x-1 text-blue-700">
                            <Database className="w-4 h-4" />
                            <span>Saved to SharePoint</span>
                          </div>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Submit Registration</span>
                      </button>
                    </div>
                  </div>

                  {/* What Happens Next */}
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-900 mb-3">🚀 What Happens After Submission:</h4>
                    <ol className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="font-semibold text-blue-600">1.</span>
                        <span>Instant auto-validation of all data and documents</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="font-semibold text-blue-600">2.</span>
                        <span>Automatic routing to appropriate Regional Manager</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="font-semibold text-blue-600">3.</span>
                        <span>Documents auto-tagged and stored in SharePoint</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="font-semibold text-blue-600">4.</span>
                        <span>Email confirmation sent with tracking number</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="font-semibold text-blue-600">5.</span>
                        <span>Real-time status updates via portal and SMS</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Digital Workflow Steps - How DLRRD Staff Use Copilot */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            How Copilot Assists DLRRD Officers
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            See how Copilot helps department staff complete supplier registration tasks <span className="font-bold text-blue-600">71% faster</span> with intelligent automation at each step
          </p>
          
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-cyan-300 to-green-300 transform -translate-y-1/2" style={{top: '80px'}}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalSteps.map((step) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;
                
                return (
                  <div 
                    key={step.id}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`relative bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 transform ${
                      isActive ? 'scale-105 shadow-2xl ring-4 ring-purple-300' : 'hover:shadow-xl'
                    }`}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold flex items-center justify-center text-lg shadow-lg z-10">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-lg inline-block mb-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {step.description}
                    </p>

                    {/* Tool Badge & Duration */}
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

                    {/* Copilot Action - What AI Does */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                      <div className="flex items-start space-x-2">
                        <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-purple-900 mb-1">Copilot Action:</p>
                          <p className="text-xs text-gray-700 italic">"{step.copilotAction}"</p>
                        </div>
                      </div>
                    </div>

                    {/* Staff Task - What Officer Does */}
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-start space-x-2">
                        <Users className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-blue-900 mb-1">Officer Task:</p>
                          <p className="text-xs text-gray-700">{step.staffTask}</p>
                        </div>
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
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-2xl"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Real-World Example: DLRRD Officers Using Copilot */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl mb-12">
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
              <Users className="w-8 h-8 text-yellow-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Real Example: DLRRD Staff Processing Agri-Solutions Registration
              </h3>
              <p className="text-white/90 mb-4 text-sm">Watch how Copilot transforms a 5-7 day manual process into a 1.5-day digital workflow</p>
              
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-400 rounded-full px-2 py-1 text-xs font-bold">9:00 AM</div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">📥 Supplier Submits Application</p>
                      <p className="text-sm text-white/90">Agri-Solutions submits form online. Officer Sipho receives instant Teams notification.</p>
                      <div className="mt-2 p-2 bg-purple-500/30 rounded border-l-2 border-yellow-300">
                        <p className="text-xs"><strong>Copilot helps:</strong> "You have 1 new supplier registration. Level 2 BEE, Agricultural equipment, all documents attached."</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-400 rounded-full px-2 py-1 text-xs font-bold">9:05 AM</div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">🤖 Officer Reviews with Copilot</p>
                      <p className="text-sm text-white/90">Sipho types: "Summarize this supplier application"</p>
                      <div className="mt-2 p-2 bg-purple-500/30 rounded border-l-2 border-yellow-300">
                        <p className="text-xs"><strong>Copilot responds:</strong> "Agri-Solutions Pty Ltd, established 2019, Level 2 BEE, supplies tractors & irrigation systems to 3 provinces. Tax clearance valid until Dec 2025. All compliance docs verified. Recommended for approval."</p>
                      </div>
                      <p className="text-xs text-green-300 mt-2">⚡ Saved 20 minutes of reading</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-400 rounded-full px-2 py-1 text-xs font-bold">9:10 AM</div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">✅ Copilot Validates Documents</p>
                      <p className="text-sm text-white/90">Sipho asks: "Check if all compliance documents are valid"</p>
                      <div className="mt-2 p-2 bg-purple-500/30 rounded border-l-2 border-yellow-300">
                        <p className="text-xs"><strong>Copilot validates:</strong> ✓ Tax Clearance expires Dec 2025 ✓ BEE Level 2 cert valid ✓ CIPC registration active ✓ Bank account verified</p>
                      </div>
                      <p className="text-xs text-green-300 mt-2">⚡ Saved 30 minutes of manual verification</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-400 rounded-full px-2 py-1 text-xs font-bold">9:15 AM</div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">📨 Copilot Routes for Approval</p>
                      <p className="text-sm text-white/90">Sipho clicks "Submit for Approval" - Copilot determines routing</p>
                      <div className="mt-2 p-2 bg-purple-500/30 rounded border-l-2 border-yellow-300">
                        <p className="text-xs"><strong>Copilot routes to:</strong> Regional Manager (Gauteng) & Compliance Officer. Teams notifications sent with summary.</p>
                      </div>
                      <p className="text-xs text-green-300 mt-2">⚡ Saved 10 minutes looking up approval matrix</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-400 rounded-full px-2 py-1 text-xs font-bold">2:30 PM</div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">✍️ Manager Approves on Mobile</p>
                      <p className="text-sm text-white/90">Regional Manager reviews Copilot's summary on Teams mobile app and approves</p>
                      <p className="text-xs text-green-300 mt-2">⚡ No need to return to office</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-400 rounded-full px-2 py-1 text-xs font-bold">Day 2, 10AM</div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">🎓 Director Issues Certificate</p>
                      <p className="text-sm text-white/90">Director types: "Generate supplier registration certificate"</p>
                      <div className="mt-2 p-2 bg-purple-500/30 rounded border-l-2 border-yellow-300">
                        <p className="text-xs"><strong>Copilot creates:</strong> Official PDF certificate with all details, QR code for verification, digital signature block ready. Auto-emails to supplier.</p>
                      </div>
                      <p className="text-xs text-green-300 mt-2">⚡ Saved 45 minutes of manual certificate creation</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-yellow-300">
                  <p className="text-yellow-300 font-bold text-lg mb-2">
                    📊 Total Copilot Time Savings for DLRRD Staff:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-white/80">Manual Process:</p>
                      <p className="text-xl font-bold">~8 hours</p>
                    </div>
                    <div>
                      <p className="text-white/80">With Copilot:</p>
                      <p className="text-xl font-bold text-green-300">~2 hours</p>
                    </div>
                  </div>
                  <p className="text-green-300 font-bold mt-2 text-center">✅ 75% reduction in staff time per application</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits for DLRRD Staff */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How Copilot Empowers DLRRD Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <Sparkles className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Assistant for Every Task</h3>
              <p className="text-gray-600 text-sm mb-3">
                Officers chat with Copilot in natural language - no technical training required.
              </p>
              <div className="bg-purple-50 p-3 rounded text-xs italic text-gray-700">
                "Summarize this application" → Instant executive summary
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <Zap className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eliminate Repetitive Work</h3>
              <p className="text-gray-600 text-sm mb-3">
                Copilot handles data entry, document validation, and email drafting automatically.
              </p>
              <div className="bg-blue-50 p-3 rounded text-xs italic text-gray-700">
                Staff focus on decision-making, not paperwork
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scale Without Hiring</h3>
              <p className="text-gray-600 text-sm mb-3">
                Same team handles 3-4x more applications with Copilot's automation.
              </p>
              <div className="bg-green-50 p-3 rounded text-xs italic text-gray-700">
                Process 100+ suppliers/month vs 30/month manually
              </div>
            </div>
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