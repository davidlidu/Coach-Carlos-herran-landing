import haydeeImg from '../assets/img/testimonio-haydee.png';
import tomasImg from '../assets/img/testimonio-tomas.png';
import juanImg from '../assets/img/testimonio-juan.png';

const RESERVATION_URL = 'https://charm-professor-83f.notion.site/87c15c20af0f4e3085c38c8f2af55d8b?pvs=105';

export default function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Section header */}
      <div className="text-center mb-8">
        <h2
          className="text-xl md:text-2xl font-semibold text-white mb-2"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Lo que están logrando quienes ya trabajan conmigo
        </h2>
        <p className="text-gray-400 text-sm">Resultados reales de la comunidad</p>
      </div>

      {/* Featured testimonial — full width */}
      <div className="mb-4 rounded-2xl overflow-hidden">
        <img
          src={haydeeImg}
          alt="Testimonio Haydee Pachano"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Regular testimonials — two columns */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={tomasImg}
            alt="Testimonio Tomás de las Heras"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img
            src={juanImg}
            alt="Testimonio Juan Morales"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <a
          href={RESERVATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-10 py-4 text-base"
        >
          Reservar mi cupo gratis
        </a>
      </div>
    </section>
  );
}
