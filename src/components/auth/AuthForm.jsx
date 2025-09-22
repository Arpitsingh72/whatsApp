
import React, { useState } from "react";
import Spinner from "../common/Spinner";
import { showError } from "../../services/toastService";

const AuthForm = ({ isLogin, step, onSubmit, isLoading }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (!phone || !password) {
        return showError("Please enter phone and password");
      }
      onSubmit({ phone, password });
    } else {
      if (step === 1 && !phone) {
        return showError("Please enter phone number");
      }
      if (step === 2 && !otp) {
        return showError("Please enter OTP");
      }
      if (step === 3 && !password) {
        return showError("Please set a password");
      }

      onSubmit({ phone, otp, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {isLogin ? (
        <>
          <div className="AuthForm-input-box">
            <label>Phone</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="AuthForm-input-box">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          {step === 1 && (
            <div className="AuthForm-input-box">
              <label>Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}

          {step === 2 && (
            <div className="AuthForm-input-box">
              <label>OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}

          {step === 3 && (
            <div className="AuthForm-input-box">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
        </>
      )}

      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <Spinner />
        ) : isLogin ? (
          "Sign in"
        ) : step === 1 ? (
          "Send OTP"
        ) : step === 2 ? (
          "Verify OTP"
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};

export default AuthForm;
