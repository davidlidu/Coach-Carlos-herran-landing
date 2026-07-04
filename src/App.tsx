import Header from './components/Header';
import Hero from './components/Hero';
import EventSection from './components/EventSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-white selection:bg-[#77D990] selection:text-[#0B1B3D]">
      <Header />
      <main className="flex-1">
        <Hero />
        <EventSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
