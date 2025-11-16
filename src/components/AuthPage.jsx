// src/components/AuthPage.jsx
import RegisterForm from './RegisterForm';
import BloxBeamLogo from '../assets/bloxbeam logo 1.svg';
import LeftPanelBackground from '../assets/R$g 2 1.png';

const AuthPage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-6">
      {/* Dim background overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal wrapper with neon border and fixed max width */}
      <div
        className="relative p-[3px] rounded-[32px] bg-gradient-to-br from-[#2f6045]/30 via-transparent to-[#2f6045]/30 shadow-2xl w-full max-w-[900px]"
      >
        {/* Inner content – scrollable on small screens, fixed on desktop */}
        <div className="relative flex flex-col md:flex-row bg-[#0B0F10] rounded-[32px] overflow-hidden max-h-[90vh] overflow-y-auto md:overflow-hidden">
          {/* Cross (cancel) button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left panel: background collage, logo, disclaimer */}
          <div className="relative w-full md:w-[40%] min-h-[180px] md:min-h-full">
            {/* Collage and dark overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${LeftPanelBackground})` }}
            />
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Logo - centered with padding */}
            <div className="relative z-10 flex justify-center pt-6 sm:pt-8">
              <img src={BloxBeamLogo} alt="BloxBeam logo" className="h-7 sm:h-8" />
            </div>

            {/* Age disclaimer - centered at bottom */}
            <div className="relative z-10 flex justify-center items-end h-full pb-4 sm:pb-6 px-4 sm:px-6">
              <p className="text-center text-gray-400 text-[10px] sm:text-xs leading-snug">
                By accessing the site, I attest that I am at least 18 years old
                <br />
                and have read the Terms and Conditions.
              </p>
            </div>
          </div>

          {/* Right panel: registration/login form */}
          <div className="w-full md:w-[60%] p-6 sm:p-8 md:p-10 lg:p-12 flex items-start justify-center">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
