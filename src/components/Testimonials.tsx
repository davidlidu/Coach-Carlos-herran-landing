const RESERVATION_URL = 'https://charm-professor-83f.notion.site/87c15c20af0f4e3085c38c8f2af55d8b?pvs=105';

const testimonials = [
  {
    name: 'Haydee Pachano',
    initials: 'HP',
    week: 'Semana 12',
    text: 'Mi meta 2 transacciones. Llegué a mi semana 12 con 4 listings, 2 de venta y 2 de renta.',
    featured: true,
  },
  {
    name: 'Tomás de las Heras',
    initials: 'TH',
    week: 'Semana 3',
    text: 'La constancia empieza a dar sus frutos: 2 listings firmados.',
    featured: false,
  },
  {
    name: 'Juan Morales',
    initials: 'JM',
    week: 'Semana 2',
    text: 'Mi segunda semana y llevo un listing. Si uno se enfoca, funciona.',
    featured: false,
  },
];

export default function Testimonials() {
  const featured = testimonials.find(t => t.featured)!;
  const regular = testimonials.filter(t => !t.featured);

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
      <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 mb-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-semibold text-sm">
            {featured.initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <p className="text-white font-semibold text-sm">{featured.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{featured.week}</p>
              </div>
              <span className="bg-[#77D990]/10 text-[#77D990] text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                destacado
              </span>
            </div>
            <p className="text-white text-base md:text-lg leading-relaxed mt-4">
              {featured.text}
            </p>
          </div>
        </div>
      </div>

      {/* Regular testimonials — two columns */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {regular.map(t => (
          <div key={t.name} className="bg-[#1a1a1a] rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-semibold text-sm">
                {t.initials}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.week}</p>
              </div>
            </div>
            <p className="text-white text-sm md:text-base leading-relaxed">{t.text}</p>
          </div>
        ))}
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
