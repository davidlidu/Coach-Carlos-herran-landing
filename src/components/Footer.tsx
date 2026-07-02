import { Facebook, Instagram, Youtube, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/img/logo-carlos.png';

const socials = [
  { Icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/carlosherrancoach/' },
  { Icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/coachcarlosherran/' },
  { Icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@coachcarlosherran' },
];

const legalContent: Record<string, React.ReactNode> = {
  'Política de privacidad': (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-white">1. Información que recopilamos</h2>
      <p>En <strong>coach.carlosherran.com</strong> recopilamos información personal que nos proporcionas de manera directa cuando te suscribes a nuestro boletín, te registras en nuestros entrenamientos en vivo, o adquieres alguna de nuestras membresías de coaching. Esta información puede incluir: nombre completo, dirección de correo electrónico, número de teléfono (WhatsApp) y datos de facturación.</p>
      <h2 className="text-base font-bold text-white mt-6">2. Uso de la información</h2>
      <p>Los datos recopilados son utilizados exclusivamente para procesar inscripciones, gestionar el acceso a los entrenamientos, procesar pagos, y enviarte material estratégico a través de nuestro newsletter.</p>
      <h2 className="text-base font-bold text-white mt-6">3. Protección de tus datos</h2>
      <p>No vendemos, alquilamos ni compartimos tu información personal con terceros para fines comerciales externos. Tus datos solo son compartidos con proveedores estrictamente necesarios para la operación del negocio.</p>
      <h2 className="text-base font-bold text-white mt-6">4. Tus derechos</h2>
      <p>En cualquier momento puedes solicitar el acceso, rectificación o eliminación de tus datos personales, o cancelar tu suscripción contactándonos a través de nuestros canales oficiales.</p>
    </div>
  ),
  'Términos de servicio': (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-white">1. Aceptación de los Términos</h2>
      <p>Al acceder a <strong>coach.carlosherran.com</strong> y adquirir nuestros entrenamientos, asesorías o membresías, aceptas estar sujeto a los presentes Términos de Servicio.</p>
      <h2 className="text-base font-bold text-white mt-6">2. Descripción de los Servicios</h2>
      <p>Coach Carlos Herrán ofrece servicios de capacitación y consultoría para agentes inmobiliarios, incluyendo webinars, membresías y programas de Coaching 1 a 1.</p>
      <h2 className="text-base font-bold text-white mt-6">3. Descargo de Responsabilidad</h2>
      <p>Las estrategias y metodologías proporcionadas están diseñadas para escalar tu negocio inmobiliario. Sin embargo, <strong>no garantizamos resultados financieros específicos</strong>. El éxito depende enteramente de la ejecución y condiciones del mercado de cada agente.</p>
      <h2 className="text-base font-bold text-white mt-6">4. Propiedad Intelectual</h2>
      <p>Todo el contenido impartido en las sesiones, materiales y metodologías son propiedad intelectual exclusiva de Coach Carlos Herrán. Queda prohibida su reproducción o distribución sin autorización previa.</p>
    </div>
  ),
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <footer className="border-t border-[#1e1e1e] py-12 mt-4">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <div className="flex gap-12">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Contacto</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a href="mailto:Coach@carlosherran.com" className="hover:text-white transition-colors">
                      Coach@carlosherran.com
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/13104303737" className="hover:text-white transition-colors">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Sígueme</h4>
                <ul className="space-y-3">
                  {socials.map(({ Icon, label, url }) => (
                    <li key={label}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1e1e1e] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
            <span>© {new Date().getFullYear()} Coach Carlos Herrán · Todos los derechos reservados</span>
            <div className="flex gap-6">
              {Object.keys(legalContent).map(title => (
                <button
                  key={title}
                  onClick={() => setActiveModal(title)}
                  className="hover:text-gray-300 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  {title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-[#2a2a2a]">
              <h3 className="text-base font-bold text-white">{activeModal}</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-500 hover:text-white transition-colors p-1 rounded-full hover:bg-[#2a2a2a]"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-gray-400 text-sm leading-relaxed">
              {legalContent[activeModal]}
            </div>
            <div className="p-4 border-t border-[#2a2a2a] flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#2a2a2a] text-white rounded-lg text-sm font-medium hover:bg-[#333] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
