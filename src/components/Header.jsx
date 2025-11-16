import Logo from '../assets/bloxbeam logo 1.svg';
import FlagUS from '../assets/united-states-flag-icon.svg';
import { useState } from 'react';

const Header = ({ onLoginClick, onGameSelectClick, onLogoClick }) => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-transparent z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3">
        {/* Left side: Logo + Choose a game */}
        <div className="flex items-center gap-3 sm:gap-8 min-w-[220px]">
          <button
            type="button"
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
            onClick={onLogoClick}
          >
            <img
              src={Logo}
              alt="BloxBeam logo"
              className="h-9 sm:h-12 object-contain"
            />
          </button>

          <button
            onClick={onGameSelectClick}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0E0F10] border border-[#1A1A1A] rounded-lg text-white font-medium text-xs sm:text-sm md:text-base hover:bg-[#161718] transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M11 4h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill="#6BFF89" />
            </svg>
            <span>Choose a game</span>
          </button>
        </div>

        {/* Right side: language + login */}
        <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
          {/* Language / currency selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#0D0D0D] border border-[#1A1A1A] shadow-[0_0_12px_rgba(0,0,0,0.4)] hover:bg-[#111111] transition-all text-white font-medium text-xs sm:text-sm"
            >
              <img
                src={FlagUS}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm"
                alt="USA flag"
              />
              <span className="hidden sm:inline">English/USD</span>
              <svg
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 transition-transform ${
                  isLanguageDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 sm:w-48 bg-dark-card border border-gray-700 rounded-lg shadow-2xl py-1 sm:py-2 text-xs sm:text-sm">
                <button className="w-full text-left px-4 sm:px-6 py-2 sm:py-3 text-gray-300 hover:text-primary hover:bg-dark-lighter transition-colors">
                  English/USD
                </button>
                <button className="w-full text-left px-4 sm:px-6 py-2 sm:py-3 text-gray-300 hover:text-primary hover:bg-dark-lighter transition-colors">
                  English/EUR
                </button>
                <button className="w-full text-left px-4 sm:px-6 py-2 sm:py-3 text-gray-300 hover:text-primary hover:bg-dark-lighter transition-colors">
                  Spanish/EUR
                </button>
              </div>
            )}
          </div>

          {/* Login button */}
          <button
  onClick={onLoginClick}
  className="px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4ADE80] to-[#22C55E] shadow-[0_0_14px_rgba(34,197,94,0.45)] hover:opacity-90 transition-all flex items-center gap-2"
>
  {/* Person Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A8 8 0 0112 15a8 8 0 016.879 2.804M12 7a4 4 0 110-8 4 4 0 010 8z"
    />
  </svg>

  Log in
</button>

        </div>
      </div>
    </header>
  );
};

export default Header;
