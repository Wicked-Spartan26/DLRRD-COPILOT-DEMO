import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3,
  ArrowLeft,
  Clock,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  ArrowRight
} from 'lucide-react';

const ComparisonPage = () => {
  const navigate = useNavigate();

  const comparisonData = [
    {
      metric: "Processing Time",
      manual: "5-7 days",
      digital: "1-2 days",
      improvement: "71% faster",
      color: "text-green-600"
    },
    {
      metric: "Error Rate",
      manual: "15-20%",
      digital: "<2%",
      improvement: "90% reduction",
      color: "text-blue-600"
    },
    {
      metric: "Cost Per Application",
      manual: "R450",
      digital: "R80",
      improvement: "82% savings",
      color: "text-purple-600"
    },
    {
      metric: "Compliance Rate",
      manual: "65%",
      digital: "98%",
      improvement: "51% increase",
      color: "text-indigo-600"
    },
    {
      metric: "Staff Time Required",
      manual: "5.5 hours",
      digital: "1 hour",
      improvement: "82% reduction",
      color: "text-cyan-600"
    },
    {
      metric: "Document Retrieval",
      manual: "30+ minutes",
      digital: "Instant",
      improvement: "100% faster",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-indigo-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
            <div className="flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">Before vs After Comparison</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BarChart3 className="w-4 h-4" />
            <span>Requirement #6: Impact Analysis</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Before vs After
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
              Measurable Impact
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic improvements from manual processes to digital automation.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {comparisonData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{item.metric}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-semibold text-gray-700">Manual</span>
                  </div>
                  <span className="text-lg font-bold text-red-600">{item.manual}</span>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-green-600" />
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">Digital</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{item.digital}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className={`w-5 h-5 ${item.color}`} />
                  <span className={`font-bold ${item.color}`}>{item.improvement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Overall Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-4xl font-bold mb-2">71%</p>
              <p className="text-sm text-indigo-100">Faster Processing</p>
            </div>

            <div className="text-center">
              <TrendingDown className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-4xl font-bold mb-2">90%</p>
              <p className="text-sm text-indigo-100">Error Reduction</p>
            </div>

            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-4xl font-bold mb-2">82%</p>
              <p className="text-sm text-indigo-100">Cost Savings</p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-4xl font-bold mb-2">51%</p>
              <p className="text-sm text-indigo-100">Compliance Increase</p>
            </div>
          </div>
        </div>

        {/* ROI Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Transform Your Operations with Microsoft Copilot
          </h3>
          <p className="text-gray-600 mb-6">
            The numbers speak for themselves. Digital transformation delivers measurable 
            value across speed, accuracy, cost, and compliance.
          </p>
          <button onClick={() => navigate('/')} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2">
            <span>Return to Home</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              DLRRD Copilot Demo - Impact Comparison
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Step 6 of 6</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-full h-full bg-indigo-500"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComparisonPage;
