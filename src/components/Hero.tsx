import fotoCoach from '../assets/img/foto-carlos-coach.png';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/BDrXqjY5yerBCfsKMdIEjL';

export default function Hero() {
  return (
    <section className="container mx-auto px-6 pt-6 pb-14">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">

        {/* Left column */}
        <div className="w-full md:w-3/5">
          <p className="text-gray-400 text-sm md:text-base font-medium mb-3">
            Coach Carlos Herrán
          </p>

          <h1
            className="text-[1.9rem] sm:text-[2.3rem] md:text-[2.7rem] font-semibold text-white leading-[1.1] mb-6"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Cómo leer tu primer semestre y saber exactamente qué hacer para cerrar el año con las ventas que quieres
          </h1>

          {/* Date badge */}
          <div className="mb-6">
            <div className="inline-flex flex-col items-start gap-1 bg-[#77D990]/10 border border-[#77D990]/25 text-[#77D990] rounded-2xl px-5 py-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#77D990] flex-shrink-0 animate-pulse" />
                <span className="text-xl md:text-2xl font-bold tracking-tight">
                  Miércoles 8 de julio · 2:00 PM MIAMI
                </span>
              </div>
              <span className="text-sm font-medium text-[#77D990]/70 pl-5">
                En vivo y gratis · cupo limitado
              </span>
            </div>
          </div>

          <div>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-base"
            >
              Únete al grupo de WhatsApp para tener acceso
            </a>
          </div>
        </div>

        {/* Right column — photo */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <img
            src={fotoCoach}
            alt="Coach Carlos Herrán"
            onError={e => {
              (e.currentTarget as HTMLImageElement).src =
                'https://placehold.co/520x620/1a1a1a/77D990?text=Coach+Carlos&font=inter';
            }}
            className="w-full max-w-[300px] md:max-w-[380px] rounded-2xl object-cover object-top"
            style={{ aspectRatio: '4/5' }}
          />
        </div>
      </div>
    </section>
  );
}
