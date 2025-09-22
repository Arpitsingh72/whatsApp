
import React, { useState } from "react";
import AuthForm from "../components/auth/AuthForm.jsx";
import { login, requestOtp, verifyOtp, setPassword } from "../api/authApi";
import { useAuth } from "../hooks/useAuth";
import { showSuccess, showError } from "../services/toastService";
import { useNavigate } from "react-router-dom";
import "../styles/_mainChatContainer.scss"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); 
  const { setToken } = useAuth();
  const Navigate = useNavigate(); 

  const handleAuthSubmit = async (formData) => {
    setIsLoading(true);
    try {
      if (isLogin) {
        const data = await login(formData);

        if (!data.token || typeof data.token !== "string") {
          throw new Error("Invalid token received from server");
        }
        setToken(data.token);
        showSuccess("Login successful 🎉");
        Navigate("/profile");
      }  else {
        if (step === 1) {
          const data = await requestOtp({ phone: formData.phone });
          showSuccess(data.message || "OTP sent ✅");
          setStep(2);
        } else if (step === 2) {
          const data = await verifyOtp({ phone: formData.phone, otp: formData.otp });
          showSuccess(data.message || "OTP verified ✅");
          setStep(3);
        } else if (step === 3) {
          const data = await setPassword({ phone: formData.phone, password: formData.password });
          showSuccess(data.message || "Registration successful 🎉");
          setIsLogin(true);
          setStep(1);
        }
      }
    } catch (err) {
      showError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>{isLogin ? "Sign in" : "Register"}</h2>
        <AuthForm
          isLogin={isLogin}
          step={step}
          onSubmit={handleAuthSubmit}
          isLoading={isLoading}
        />
        <button
          className="toggle-auth"
          onClick={() => {
            setIsLogin(!isLogin);
            setStep(1); 
          }}
        >
          {isLogin ? "Create a new account" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
