import { useEffect } from 'react';
import BloxBeamLogo from '../assets/bloxbeam logo 1.svg';

// Import your actual game icons here.
import BloxFruitsIcon from '../assets/gameSelection/bloxf.png';
import MurderMysteryIcon from '../assets/gameSelection/mm2.png';
import AdoptMeIcon from '../assets/gameSelection/adopt-me.png';
import BladeBallIcon from '../assets/gameSelection/ball-blade.png';
import StealBrainrotIcon from '../assets/gameSelection/mm2.png';
import GrowGardenIcon from '../assets/gameSelection/bloxf.png';

const GameSelectionModal = ({ isOpen, onClose }) => {
  const games = [
    {
      name: 'Blox Fruits',
      gradientColor: 'rgba(59,130,246,0.4)',
      textColor: 'text-blue-300',
      img: BloxFruitsIcon,
    },
    {
      name: 'Murder Mystery 2',
      gradientColor: 'rgba(220,38,38,0.4)',
      textColor: 'text-red-300',
      img: MurderMysteryIcon,
    },
    {
      name: 'Adopt Me',
      gradientColor: 'rgba(34,197,94,0.4)',
      textColor: 'text-green-300',
      img: AdoptMeIcon,
    },
    {
      name: 'Blade Ball',
      gradientColor: 'rgba(219,39,119,0.4)',
      textColor: 'text-pink-300',
      img: BladeBallIcon,
    },
    {
      name: 'Steal A brainrot',
      gradientColor: 'rgba(168,85,247,0.4)',
      textColor: 'text-purple-300',
      img: StealBrainrotIcon,
    },
    {
      name: 'Grow A garden',
      gradientColor: 'rgba(34,197,94,0.4)',
      textColor: 'text-green-300',
      img: GrowGardenIcon,
    },
  ];

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Make modal scrollable on very small screens */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto max-h-[92vh] overflow-y-auto">
          {/* Compact modal wrapper */}
          <div
            className="relative p-[2px] sm:p-1 rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#2f6045]/30 via-transparent to-[#2f6045]/30 shadow-2xl"
          >
            <div className="bg-[#0B0F10] rounded-3xl sm:rounded-[36px] p-5 sm:p-8 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 tracking-wider">
                CHOOSE A GAME
              </h2>

              {/* Card grid with responsive spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {games.map((game) => (
                  <button
                    key={game.name}
                    className="relative rounded-[24px] sm:rounded-[30px] overflow-hidden border-2 border-[#4ADE80]/60 shadow-xl hover:scale-105 transition-transform"
                    aria-label={game.name}
                  >
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, rgba(0,0,0,0.65) 0%, ${game.gradientColor} 100%)`,
                      }}
                    />
                    {/* Card content */}
                    <div className="relative z-10 flex flex-col items-center p-5 sm:p-6 h-[170px] sm:h-[200px]">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 overflow-hidden rounded-xl">
                        <img
                          src={game.img}
                          alt={game.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className={`font-bold text-base sm:text-lg mb-1 ${game.textColor}`}>
                        {game.name}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm">Tap to view items</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Logo */}
              <div className="text-center mt-6 sm:mt-8 flex flex-col items-center">
                <img
                  src={BloxBeamLogo}
                  alt="BloxBeam logo"
                  className="h-8 sm:h-10 w-auto"
                />
                <div className="mt-2 h-[2px] w-1/2 sm:w-1/3 bg-gradient-to-r from-transparent via-[#4ADE80]/60 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSelectionModal;
