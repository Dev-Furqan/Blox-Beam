import logo from '../assets/bloxbeam logo 1.svg';


const Footer = () => {
  const columns = [
    {
      title: 'Social Media',
      links: ['Twitter', 'Youtube', 'TikTok', 'Discord'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'FAQ', 'Trust Pilot'],
    },
    {
      title: 'Resources',
      links: ['Blogs', 'Affiliates', 'Claim Order', 'Tutorial'],
    },
    {
      title: 'Legal',
      links: ['Terms Of Service', 'Privacy Policy', 'Refund Policy'],
    },
  ];

  const socials = [
    { label: 'X', abbr: 'X' },
    { label: 'YouTube', abbr: '▶' },
    { label: 'TikTok', abbr: '♪' },
    { label: 'Discord', abbr: '⌾' },
  ];

  return (
    <footer className="bg-[#020b08] border-t border-[#020814]">
      <div className="container mx-auto px-6 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">

          {/* LEFT: logo + disclaimer + socials */}
          <div className="max-w-md">
            {/* Logo (replace with your image if you have one) */}
            {/* Logo */}
<div className="mb-5">
  <img
    src={logo}   // <-- replace with your actual file path
    alt="BloxBeam Logo"
    className="w-40 object-contain"
  />
</div>


            <h4 className="text-sm font-semibold text-white mb-2">
              Disclaimer
            </h4>

            <p className="text-[11px] leading-relaxed text-gray-400 mb-3">
              BloxBeam is not affiliated, endorsed by, or in any way
              associated with ROBLOX Corporation, Roblox.com, or any of its
              subsidiaries or affiliates.
            </p>

            <p className="text-[11px] text-gray-500 mb-6">
              © 2025 BloxBeam. All rights reserved.
            </p>

            {/* Social icons row */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-md bg-black/40 border border-white/10 flex items-center justify-center text-[13px] text-gray-100 hover:border-[#22c55e] hover:text-[#22c55e] transition-colors"
                >
                  {s.abbr}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            {columns.map((col) => (
              <div key={col.title}>
                <h5 className="text-white font-semibold mb-4">
                  {col.title}
                </h5>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-[#22c55e] transition-colors text-[13px]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
