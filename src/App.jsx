import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CVForm from './components/ui/CVForm';
import EducationForm from './components/ui/EducationForm';
import WorkExperienceForm from './components/ui/WorkExperienceForm';
import SkillsForm from './components/ui/SkillsForm';
import CertificationsForm from './components/ui/CertificationsForm';
import AchievementsForm from './components/ui/AchievementsForm';
import LanguagesForm from './components/ui/LanguagesForm';
import Login from './components/ui/Login';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cvform" element={<CVForm />} />
          <Route path="/education" element={<EducationForm />} />
          <Route path="/work-experience" element={<WorkExperienceForm />} />
          <Route path="/skills" element={<SkillsForm />} />
          <Route path="/certifications" element={<CertificationsForm />} />
          <Route path="/achievements" element={<AchievementsForm />} />
          <Route path="/languages" element={<LanguagesForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
