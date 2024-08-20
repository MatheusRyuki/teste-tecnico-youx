import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "react-oauth2-code-pkce";

const Login: React.FC = () => {
  const { logIn, tokenData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenData) {
      const role = tokenData.role;
      localStorage.setItem("userRole", role);
      navigate("/pacientes");
    }
  }, [tokenData, navigate]);

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => logIn()}>Login with OAuth 2</button>
    </div>
  );
};

export default Login;
