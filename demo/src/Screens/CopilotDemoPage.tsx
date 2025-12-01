import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Send, 
  FileText,
  CheckCircle,
  ArrowLeft,
  Bot,
  User,
  Loader,
  Download,
  Eye,
  Copy,
  Clock
} from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'copilot';
  content: string;
  timestamp: Date;
  actions?: { label: string; icon: any; variant: string }[];
  data?: any;
}

const CopilotDemoPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const suggestedQueries = [
    {
      id: 'create-form',
      text: "Create a new supplier registration form for agricultural equipment vendors",
      category: "Form Generation"
    },
    {
      id: 'summarize-doc',
      text: "Summarize the uploaded supplier tax clearance certificate",
      category: "Document Analysis"
    },
    {
      id: 'extract-data',
      text: "Extract all supplier information from the submitted documents",
      category: "Data Extraction"
    },
    {
      id: 'setup-workflow',
      text: "Set up an approval workflow for this supplier registration",
      category: "Workflow Automation"
    }
  ];

  const copilotResponses: { [key: string]: any } = {
    'create-form': {
      content: "✅ I've created a comprehensive supplier registration form for agricultural equipment vendors.\n\n**Form includes:**\n• Company Information (Name, Registration #, Tax #, BEE Level)\n• Contact Details (Address, Phone, Email)\n• Banking Information (Bank, Account #, Branch)\n• Service Offerings & Geographic Coverage\n• Required Compliance Documents Upload\n\n**Additional features:**\n✓ Real-time validation\n✓ Auto-save functionality\n✓ Mobile-responsive design\n✓ DLRRD compliance fields\n✓ SharePoint folder structure created\n✓ Approval workflow template ready",
      actions: [
        { label: 'View Form', icon: Eye, variant: 'primary' },
        { label: 'Customize Fields', icon: FileText, variant: 'secondary' }
      ]
    },
    'summarize-doc': {
      content: "📄 **Document Summary Complete**\n\n**Supplier:** Agri-Solutions Pty Ltd\n**Document:** Tax Clearance Certificate\n**Analysis Date:** 01 December 2025\n\n**✓ COMPLIANT DOCUMENTS:**\n• Tax Clearance: Valid until 15 Dec 2025\n• Status: Active & in good standing\n• Tax Number: Verified (9876543210)\n• SARS Compliance: ✓ All requirements met\n\n**📊 RISK ASSESSMENT:** Low Risk\n\n**🎯 RECOMMENDATION:** Approve for registration\n\n**Next Steps:**\n1. Proceed with registration approval\n2. Schedule 6-month compliance review\n3. Add to approved vendors database",
      actions: [
        { label: 'View Full Analysis', icon: Eye, variant: 'primary' },
        { label: 'Download PDF', icon: Download, variant: 'secondary' }
      ]
    },
    'extract-data': {
      content: "✓ **Data Extraction Complete**\n\nI've successfully extracted structured data from 5 uploaded documents:\n\n**Company Registration:**\n• Legal Name: Agri-Solutions Pty Ltd\n• Registration #: 2019/123456/07\n• Reg Date: 15 March 2019\n\n**Banking Information:**\n• Bank: First National Bank\n• Account: 62012345678\n• Branch: Sandton City (250655)\n• Type: Business Cheque Account\n\n**BEE Certificate:**\n• BEE Level: Level 2 Contributor\n• B-BBEE Points: 118.5\n• Valid Until: 30 June 2026\n\n**Contact Information:**\n• Primary Contact: Thabo Maseko (CEO)\n• Phone: +27 11 234 5678\n• Email: thabo@agrisolutions.co.za\n• Address: 123 Farm Road, Pretoria, 0001\n\n**Service Offerings:**\n• Category: Agricultural Equipment\n• Subcategories: Tractors, Irrigation, Harvesting\n• Coverage: Gauteng, Limpopo, Mpumalanga\n\nAll data has been validated and is ready for import.",
      actions: [
        { label: 'View Extracted Data', icon: Eye, variant: 'primary' },
        { label: 'Copy JSON', icon: Copy, variant: 'secondary' }
      ]
    },
    'setup-workflow': {
      content: "✓ **Approval Workflow Created Successfully**\n\nI've set up an automated 3-stage approval workflow:\n\n**Stage 1: Regional Manager Review**\n• Assignee: Auto-assigned based on supplier location\n• Duration: 2 business days\n• Action: Document completeness check\n• Notification: Email + Teams alert\n\n**Stage 2: Compliance Officer Verification**\n• Assignee: Compliance Team\n• Duration: 1 business day\n• Actions:\n  - BEE certificate verification\n  - Tax clearance validation\n  - Banking details check\n• Notification: Teams notification with mobile alert\n\n**Stage 3: Director Final Approval**\n• Assignee: Department Director\n• Duration: 1 business day\n• Action: Final authorization\n• Outcome: Auto-generate registration certificate\n\n**Workflow Features:**\n✓ Auto-notifications at each stage\n✓ Mobile approval capability\n✓ Escalation after SLA breach\n✓ Complete audit trail\n✓ Real-time status dashboard\n\n**Total Timeline:** 4 business days\n**Auto-activation:** Ready to deploy",
      actions: [
        { label: 'View Workflow', icon: Eye, variant: 'primary' },
        { label: 'Activate Now', icon: CheckCircle, variant: 'success' }
      ]
    }
  };

  const handleSend = async (queryText?: string) => {
    const messageText = queryText || input;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Find matching response
    const queryId = suggestedQueries.find(q => 
      q.text.toLowerCase().includes(messageText.toLowerCase()) ||
      messageText.toLowerCase().includes(q.id.replace('-', ' '))
    )?.id || 'create-form';

    // Simulate typing delay
    setTimeout(() => {
      const response = copilotResponses[queryId];
      const copilotMessage: Message = {
        id: Date.now() + 1,
        type: 'copilot',
        content: response.content,
        timestamp: new Date(),
        actions: response.actions
      };
      setMessages(prev => [...prev, copilotMessage]);
      setIsTyping(false);
      setActiveDemo(queryId);
    }, 2000);
  };

  const handleSuggestionClick = (query: string) => {
    handleSend(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-purple-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
            <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Copilot Interactive Demo</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Bot className="w-4 h-4" />
            <span>Requirement #3: Copilot Interaction</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Microsoft Copilot
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
              AI-Powered Assistant
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience natural language interaction. Ask Copilot to help with forms, 
            documents, workflows, and data extraction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Suggested Queries Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span>Try These Queries</span>
              </h3>
              <div className="space-y-3">
                {suggestedQueries.map((query) => (
                  <button
                    key={query.id}
                    onClick={() => handleSuggestionClick(query.text)}
                    className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 group"
                  >
                    <p className="text-xs text-purple-600 font-semibold mb-1">
                      {query.category}
                    </p>
                    <p className="text-sm text-gray-700 group-hover:text-purple-900">
                      "{query.text}"
                    </p>
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                <p className="text-xs font-semibold text-purple-900 mb-2">
                  💡 Demo Tip
                </p>
                <p className="text-xs text-purple-800">
                  Click any suggestion to see Copilot in action. Each demo shows different AI capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[700px]">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Microsoft Copilot</h3>
                    <p className="text-xs text-purple-100">
                      AI Assistant for DLRRD
                    </p>
                  </div>
                  <div className="ml-auto flex items-center space-x-1 bg-white/20 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs">Online</span>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.length === 0 && (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ready to assist!
                    </h3>
                    <p className="text-gray-600">
                      Select a suggestion or type your own query
                    </p>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500' 
                          : 'bg-gradient-to-br from-purple-500 to-pink-500'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-5 h-5 text-white" />
                        ) : (
                          <Bot className="w-5 h-5 text-white" />
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div className={`rounded-2xl p-4 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white'
                          : 'bg-white border-2 border-purple-200'
                      }`}>
                        <p className={`text-sm whitespace-pre-line ${
                          message.type === 'user' ? 'text-white' : 'text-gray-800'
                        }`}>
                          {message.content}
                        </p>
                        
                        {/* Action Buttons */}
                        {message.actions && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {message.actions.map((action, idx) => {
                              const Icon = action.icon;
                              return (
                                <button
                                  key={idx}
                                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                                    action.variant === 'primary'
                                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                                      : action.variant === 'success'
                                      ? 'bg-green-600 text-white hover:bg-green-700'
                                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                  <span>{action.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Timestamp */}
                        <p className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white border-2 border-purple-200 rounded-2xl p-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t-2 border-gray-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your request to Copilot..."
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    disabled={isTyping}
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={isTyping || !input.trim()}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FileText className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Form Generation</h4>
            <p className="text-sm text-gray-600">Create custom forms instantly</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Eye className="w-10 h-10 text-pink-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Doc Analysis</h4>
            <p className="text-sm text-gray-600">AI-powered summarization</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Copy className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Data Extraction</h4>
            <p className="text-sm text-gray-600">Extract structured data</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Workflow Setup</h4>
            <p className="text-sm text-gray-600">Automated approvals</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              DLRRD Copilot Demo - Interactive AI Assistant
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Step 3 of 6</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-3/6 h-full bg-purple-500"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CopilotDemoPage;