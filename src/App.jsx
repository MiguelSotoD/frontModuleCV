import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CVForm from './components/ui/CVForm';
import Login from './components/ui/Login';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cvform" element={<CVForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
