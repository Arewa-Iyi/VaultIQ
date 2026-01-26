import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PrivateRoute from './components/PrivateRoute';
import MainLayout from './components/MainLayout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="" element={<DashboardPage />} />
          </Route>
          <Route path="/" element={<Navigate to="/about" />} />
        </Route>
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </Router>
  );
}

export default App;
