import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PatientRegistrationPage from "./pages/PatientRegistrationPage";
import PatientListPage from "./pages/PatientListPage";
import PatientMapPage from "./pages/PatientMapPage";
import NurseRegistrationPage from "./pages/NurseRegistrationPage";
import DoctorRegistrationPage from "./pages/DoctorRegistrationPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./auth/AuthProvider";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/cadastro"
            element={
              <ProtectedRoute>
                <PatientRegistrationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pacientes"
            element={
              <ProtectedRoute>
                <PatientListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mapa"
            element={
              <ProtectedRoute>
                <PatientMapPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cadastro-enfermeiro"
            element={
              <ProtectedRoute>
                <NurseRegistrationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cadastro-medico"
            element={
              <ProtectedRoute>
                <DoctorRegistrationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
