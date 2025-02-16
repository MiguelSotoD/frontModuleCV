import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CVForm from './components/ui/CVForm';
import EducationForm from './components/ui/EducationForm';
import WorkExperienceForm from './components/ui/WorkExperienceForm';
import SkillsForm from './components/ui/SkillsForm';
import CertificationsForm from './components/ui/CertificationsForm';
import AchievementsForm from './components/ui/AchievementsForm';
import LanguagesForm from './components/ui/LanguagesForm';
import Login from './components/ui/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><CVForm /></ProtectedRoute>} />
          <Route path="/education" element={<ProtectedRoute><EducationForm /></ProtectedRoute>} />
          <Route path="/work-experience" element={<ProtectedRoute><WorkExperienceForm /></ProtectedRoute>} />
          <Route path="/skills" element={<ProtectedRoute><SkillsForm /></ProtectedRoute>} />
          <Route path="/certifications" element={<ProtectedRoute><CertificationsForm /></ProtectedRoute>} />
          <Route path="/achievements" element={<ProtectedRoute><AchievementsForm /></ProtectedRoute>} />
          <Route path="/languages" element={<ProtectedRoute><LanguagesForm /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
