import fotoCoach from '../assets/img/foto-carlos-coach.png';

const RESERVATION_URL = 'https://charm-professor-83f.notion.site/87c15c20af0f4e3085c38c8f2af55d8b?pvs=105';
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

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-base"
            >
              Reservar mi cupo gratis
            </a>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold text-base hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Únete a nuestro grupo
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
