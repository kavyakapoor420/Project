import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-[1000px] mx-auto py-2 z-10 ">
      <div
        className="max-w-7xl mx-auto rounded-4xl border border-[#0f5132] p-2"
        style={{
          background: 'radial-gradient(circle at top, #033d26 0%, #011c14 100%)',
          boxShadow: '0 0 20px #00ffab, 0 0 60px #00ffab40',
          backdropFilter: 'blur(15px)',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[#00ffab] text-2xl mx-8 font-extrabold tracking-wide">
            BetterWeb
          </div>

          <div className="flex items-center justify-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <a href="#how" className="nav-link">
              How it works
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
          </div>

          <a
            href="http://localhost:3000/auth/sign-in"
            className="bg-[#00ffab] text-black px-6 py-2 rounded-full hover:bg-[#00ffaa] transition duration-300 shadow-md"
          >
            Sign in
          </a>
        </div>
      </div>

      {/* Tailwind doesn't support embedded style tags like this.
          Instead, use a CSS file or a <style jsx> block in Next.js.
          For now, use global CSS or Tailwind classes */}
      <style>{`
        .nav-link {
          color: #d1ffe8;
          font-weight: 500;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .nav-link:hover {
          color: #00ffab;
          transform: scale(1.05);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
