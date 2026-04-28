import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsapp';

const BaliSurfSchool = () => {
  return (
    <div className="bg-[#f5f7f8] text-[#101518] min-h-screen font-['Plus_Jakarta_Sans']">
      {/* <Header /> */}
      
      <main className="pt-14 relative">

  {/* OVERLAY WARNING */}
 <div className="fixed inset-0 bg-black z-50 flex items-center justify-center px-6">
  <div className="bg-neutral-900 border border-red-700 max-w-xl w-full rounded-2xl shadow-2xl p-8 text-center text-white">
    
    <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 tracking-wide">
      ⚠️ AKSES DIBLOKIR
    </h2>

    <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
     Pemilik usaha memblokir nomor saya tanpa melakuakn pembayaran dan diam diam meletakan website ke googlemapsnya. Tidak dapat dipercaya
    </p>

    <hr className="my-6 border-red-800" />

    <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 tracking-wide">
      ⚠️ ACCESS RESTRICTED
    </h2>

    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
      The business owner has blocked my number without making payment and secretly placed the website on their Google Maps. Not Trusted.
    </p>

  </div>
</div>

  {/* OPTIONAL: kalau mau tetap render tapi ketutup */}
  {/* <Hero />
  <Services />
  <Testimonials />
  <Gallery />
  <BookingForm />
  <Footer /> */}

</main>
{/* 
      <FloatingWhatsApp /> */}

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default BaliSurfSchool;
