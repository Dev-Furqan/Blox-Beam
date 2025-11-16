// src/components/RegisterForm.jsx
import { useState } from 'react';

const RegisterForm = () => {
  const [activeTab, setActiveTab] = useState('login'); // default: login
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    acceptTerms: false,
    referralCode: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errs = {};
    if (activeTab === 'register') {
      if (!formData.username.trim()) errs.username = 'Username is required';
      else if (formData.username.length < 3) errs.username = 'Username must be at least 3 characters';

      if (!formData.email.trim()) errs.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please enter a valid email';

      if (!formData.password) errs.password = 'Password is required';
      else if (formData.password.length < 8) errs.password = 'Password must be at least 8 characters';

      if (!formData.acceptTerms) errs.acceptTerms = 'You must accept the terms and conditions';
    } else {
      if (!formData.email.trim()) errs.email = 'Email is required';
      if (!formData.password) errs.password = 'Password is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`${activeTab === 'register' ? 'Registration' : 'Login'} successful!`);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md">
      {/* Tabs */}
      <div className="flex mb-6 border-b border-[#1F2A37]">
        {/* Register tab */}
        <button
          type="button"
          onClick={() => { setActiveTab('register'); setErrors({}); }}
          className={`flex-1 pb-3 text-center font-semibold text-sm md:text-base ${
            activeTab === 'register' ? 'text-white border-b-2 border-[#4ADE80]' : 'text-gray-500'
          }`}
        >
          Register
        </button>
        {/* Divider */}
        <div className="w-px bg-[#1F2A37]" />
        {/* Login tab */}
        <button
          type="button"
          onClick={() => { setActiveTab('login'); setErrors({}); }}
          className={`flex-1 pb-3 text-center font-semibold text-sm md:text-base ${
            activeTab === 'login' ? 'text-white border-b-2 border-[#4ADE80]' : 'text-gray-500'
          }`}
        >
          Login
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        {/* Username (register only) */}
        {activeTab === 'register' && (
          <div>
            <label className="block text-xs text-gray-400 mb-1">Username*</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="w-full px-3 py-2 bg-[#111415] border border-[#1F2A37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#4ADE80]"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-xs text-gray-400 mb-1">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full px-3 py-2 bg-[#111415] border border-[#1F2A37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#4ADE80]"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs text-gray-400 mb-1">Password*</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full px-3 py-2 bg-[#111415] border border-[#1F2A37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#4ADE80]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243m-5.418-5.418l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

          {/* Forgot Password (login only) */}
          {activeTab === 'login' && (
            <div className="mt-1 text-right">
              <a href="#" className="text-xs text-gray-400 hover:text-[#4ADE80]">
                Forgot Password?
              </a>
            </div>
          )}
        </div>

        {/* Terms & Conditions (Register) */}
        {activeTab === 'register' && (
          <div className="flex gap-2 items-start text-xs text-gray-400">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 bg-[#111415] border border-[#1F2A37] rounded focus:ring-2 focus:ring-[#4ADE80]"
            />
            <span>
              I agree to the{' '}
              <a href="#" className="text-[#4ADE80] hover:underline">Terms and Conditions</a>{' '}
              and{' '}
              <a href="#" className="text-[#4ADE80] hover:underline">Privacy Policy</a>.
            </span>
          </div>
        )}
        {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms}</p>}

        {/* Referral Code (Register) */}
        {activeTab === 'register' && (
          <div>
            <label className="block text-xs text-gray-400 mb-1">Referral Code (Optional)</label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              placeholder="Enter Code"
              className="w-full px-3 py-2 bg-[#111415] border border-[#1F2A37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#4ADE80]"
            />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 bg-[#4ADE80] hover:bg-[#16A34A] text-[#0A0A0A] font-semibold rounded-md transition-colors"
        >
          {activeTab === 'register' ? 'Register' : 'Login'}
        </button>

        {/* Divider */}
        <div className="relative my-5 sm:my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#1F2A37]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0B0F10] px-3 text-xs text-gray-400">
              or continue with
            </span>
          </div>
        </div>

        {/* Google button */}
        <button
          type="button"
          className="w-full py-2.5 bg-[#111415] border border-[#1F2A37] hover:border-[#1F2A37]/60 rounded-md flex items-center justify-center gap-3 text-white font-medium"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span>Google</span>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
