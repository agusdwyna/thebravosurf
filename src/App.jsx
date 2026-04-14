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
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-6">
    <div className="bg-white max-w-xl w-full rounded-2xl shadow-2xl p-8 text-center">
      
      <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
        Website Tidak Aktif
      </h2>

      <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
        Website ini untuk sementara dinonaktifkan karena proses pembayaran belum diselesaikan oleh pemilik usaha.
        <br /><br />
        Untuk informasi lebih lanjut, silakan hubungi pengembang.
      </p>

      <hr className="my-6" />

      <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
        Website Temporarily Unavailable
      </h2>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        This website is temporarily disabled due to incomplete payment by the business owner.
        <br /><br />
        For further information, please contact the developer.
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
