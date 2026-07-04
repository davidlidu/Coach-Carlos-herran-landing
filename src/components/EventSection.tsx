const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/BDrXqjY5yerBCfsKMdIEjL';

const stats = [
  { value: '13+', label: 'años como coach' },
  { value: '14k+', label: 'horas de coaching' },
  { value: '9+', label: 'países' },
];

const learnings = [
  'Leer tu primer semestre con un método simple, sin importar si llevas buenos números o malos',
  'Identificar en cuál de los tres niveles de producción estás ahora mismo',
  'Salir sabiendo qué actividades te mueven al siguiente nivel en la segunda mitad del año',
];

export default function EventSection() {
  return (
    <>
      {/* Authority stats */}
      <section className="container mx-auto px-6 pb-10">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {stats.map(({ value, label }) => (
            <div key={value} className="bg-[#1a1a1a] rounded-2xl p-5 md:p-7 text-center">
              <p
                className="text-2xl md:text-4xl font-semibold text-white mb-1"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {value}
              </p>
              <p className="text-gray-400 text-xs md:text-sm leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning bullets */}
      <section className="container mx-auto px-6 pb-10">
        <div className="bg-[#1a1a1a] rounded-2xl p-7 md:p-10">
          <h2
            className="text-base md:text-lg font-semibold text-white mb-5"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            En esta sesión vas a:
          </h2>
          <ul className="space-y-4">
            {learnings.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-[#77D990] mt-0.5 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-white text-sm md:text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-10 flex justify-center">
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-10 py-4 text-base"
        >
          Únete al grupo de WhatsApp para tener acceso
        </a>
      </section>

    </>
  );
}
