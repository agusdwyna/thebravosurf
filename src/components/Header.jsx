import React from 'react';

const Header = () => {
  const phoneNumber = "6288219334268";
  const message = "Halo The Bravo, saya ingin booking lesson.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#005a8d]/10 h-24">
      <div className="relative flex items-center justify-between px-4 py-3 max-w-7xl mx-auto h-full">
        {/* Logo Absolute */}
        <img
          src="/logo.png"
          alt="The Bravo Surf Logo"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-25 pr-8  w-auto object-contain"
        />

        <h2 className="text-[#101518] text-lg font-bold px-4 leading-tight tracking-tight ml-24">
          The Bravo Surf 
        </h2>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#005a8d] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#005a8d]/20 hover:bg-[#004670] transition-colors inline-block"
        >
          Book
        </a>
      </div>
    </header>
  );
};

export default Header;