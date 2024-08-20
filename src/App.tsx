import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PatientRegistrationPage from "./pages/PatientRegistrationPage";
import PatientListPage from "./pages/PatientListPage";
import PatientMapPage from "./pages/PatientMapPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "react-oauth2-code-pkce";

const App: React.FC = () => {
  return (
    <AuthProvider
      authConfig={{
        clientId: "YOUR_CLIENT_ID",
        authorizationEndpoint: "https://authorization-server.com/auth",
        tokenEndpoint: "https://authorization-server.com/token",
        redirectUri: "http://localhost:3000/callback",
        scope: "openid profile email",
      }}
    >
      <Router>
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
            path="/"
            element={
              <ProtectedRoute>
                <PatientListPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
