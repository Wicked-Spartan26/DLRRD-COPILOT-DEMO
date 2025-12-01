import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import ManualProcessPage from './Screens/ManualProcessPage';
import DigitalWorkflowPage from './Screens/DigitalWorkflowPage';
import CopilotDemoPage from './Screens/CopilotDemoPage';
import AutomationPage from './Screens/AutomationPage';
import OutputsPage from './Screens/OutputsPage';
import ComparisonPage from './Screens/ComparisonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manual-process" element={<ManualProcessPage />} />
        <Route path="/digital-workflow" element={<DigitalWorkflowPage />} />
        <Route path="/copilot-demo" element={<CopilotDemoPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/outputs" element={<OutputsPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
      </Routes>
    </Router>
  );
}

export default App;