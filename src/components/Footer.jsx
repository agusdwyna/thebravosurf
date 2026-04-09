import React from 'react';

const Footer = () => {
 

  return (
    <footer className="bg-[#11232b] text-white/80 py-12 px-4 text-center">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <img src="/logo2.png" alt="The Bravo Surf Logo" className="h-25 w-auto object-contain" />
        <span className="text-white font-bold text-xl tracking-tight">The Bravo Surf</span>
      </div>

      {/* Address */}
      <p className="text-sm mb-4">Pantai Bolong Beach, Canggu, Kec. Kuta Utara, Badung, Bali</p>

      {/* Google Map */}
      <div className="mb-8 flex justify-center">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.330471638888!2d115.12833027544325!3d-8.660086891387285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1c1b32a4d38d69%3A0xf555557554e8ebd2!2sThe%20bravo%20surf%20%7C%7C%20surf%20lesson%20in%20canggu%2C%20bali%2C%20Indonesia!5e0!3m2!1sid!2sid!4v1775738468981!5m2!1sid!2sid" 
          width="600" 
          height="300" 
          style={{ border: 0, borderRadius: '12px' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

     

      <p className="text-xs">©Bombora Web - DW</p>
    </footer>
  );
};

export default Footer;