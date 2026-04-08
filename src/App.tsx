/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import EventSection from './components/EventSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#0B1B3D] selection:text-white">
      <Header />
      <main>
        <Hero />
        <EventSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
