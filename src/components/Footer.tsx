import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, X } from 'lucide-react';
import logo from '../assets/img/logo-carlos.png';

const socials = [
  { Icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/carlosherrancoach/' },
  { Icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/coachcarlosherran/' },
  { Icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@coachcarlosherran' },
];

// Objeto para almacenar el contenido de cada modal
const legalContent: Record<string, React.ReactNode> = {
  'Política de privacidad': (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-[#0B1B3D]">1. Información que recopilamos</h2>
      <p>En <strong>coach.carlosherran.com</strong> recopilamos información personal que nos proporcionas de manera directa cuando te suscribes a nuestro boletín (newsletter), te registras en nuestros entrenamientos en vivo (webinars), o adquieres alguna de nuestras membresías de coaching (ej. Agentes de Impacto, Impacto Élite o Coaching 1 on 1). Esta información puede incluir: nombre completo, dirección de correo electrónico, número de teléfono (WhatsApp) y datos de facturación.</p>

      <h2 className="text-lg font-bold text-[#0B1B3D] mt-6">2. Uso de la información</h2>
      <p>Los datos recopilados son utilizados exclusivamente para los siguientes propósitos:</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Procesar tus inscripciones y gestionar el acceso a los enlaces de los entrenamientos en vivo y plataformas de membresía.</li>
        <li>Procesar los pagos de tus suscripciones mensuales o compras únicas.</li>
        <li>Enviarte material estratégico, actualizaciones del sector inmobiliario y ofertas promocionales a través de nuestro newsletter.</li>
        <li>Brindar soporte técnico y atención al cliente a través de correo o WhatsApp.</li>
      </ul>

      <h2 className="text-lg font-bold text-[#0B1B3D] mt-6">3. Protección de tus datos y Terceros</h2>
      <p>No vendemos, alquilamos ni compartimos tu información personal con terceros para fines comerciales externos. Tus datos solo son compartidos con proveedores de servicios estrictamente necesarios para la operación del negocio, tales como pasarelas de pago seguras (encargadas de procesar tu información financiera cifrada) y plataformas de email marketing o videoconferencias.</p>

      <h2 className="text-lg font-bold text-[#0B1B3D] mt-6">4. Tus derechos</h2>
      <p>En cualquier momento puedes solicitar el acceso, rectificación o eliminación de tus datos personales, así como cancelar tu suscripción a nuestro newsletter haciendo clic en el enlace "Darse de baja" incluido en todos nuestros correos, o contactándonos a través de nuestros canales oficiales.</p>
    </div>
  ),
  'Términos de servicio': (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-[#0B1B3D]">1. Aceptación de los Términos</h2>
      <p>Al acceder a <strong>coach.carlosherran.com</strong> y adquirir nuestros entrenamientos, asesorías o membresías, aceptas estar sujeto a los presentes Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.</p>

      <h2 className="text-lg font-bold text-[#0B1B3D] mt-6">2. Descripción de los Servicios</h2>
      <p>Coach Carlos Herrán ofrece servicios de capacitación y consultoría para agentes inmobiliarios. Esto incluye, pero no se limita a, webinars de pago único, membresías de suscripción mensual (Agentes de Impacto, Impacto Élite) y programas de Coaching 1 a 1. El acceso a los recursos y sesiones en vivo depende del nivel de servicio adquirido.</p>

      <h2 className="text-lg font-bold text-[#0B1B3D] mt-6">3. Pagos y Suscripciones</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>Cargos recurrentes:</strong> Los programas de membresía se facturan de forma mensual automática al método de pago proporcionado al momento de la inscripción.</li>
        <li><strong>Cancelaciones:</strong> Puedes cancelar tu suscripción en cualquier momento antes de tu próximo ciclo de facturación para evitar nuevos cargos. No se emiten reembolsos parciales por meses no utilizados.</li>
        <li><strong>Entrenamientos de pago único:</strong> El acceso a eventos específicos (ej. webinars en vivo) requiere un pago único que garantiza la reserva de tu cupo.</li>
      </ul>

      <h2 className="text-lg font-bold text-[#0B1B3D] mt-6">4. Descargo de Responsabilidad (Resultados)</h2>
      <p>Las estrategias, diagnósticos y hojas de ruta proporcionadas están diseñadas para escalar tu negocio inmobiliario basándose en nuestra experiencia. Sin embargo, <strong>no garantizamos resultados financieros específicos</strong>. El éxito en la generación de leads, transacciones y comisiones depende enteramente de la ejecución, esfuerzo y condiciones del mercado de cada agente.</p>

      <h2 className="text-lg font-bold text-[#0B1B3D] mt-6">5. Propiedad Intelectual</h2>
      <p>Todo el contenido impartido en las sesiones en vivo, materiales descargables, estrategias de embudos y metodologías compartidas son propiedad intelectual exclusiva de Coach Carlos Herrán. Queda estrictamente prohibida su reproducción, reventa o distribución pública sin autorización previa por escrito.</p>
    </div>
  ),
};

export default function Footer() {
  // Estado para controlar qué modal está abierto (null significa que está cerrado)
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <footer className="bg-[#f5f6f8] border-t border-[#e2e4e9] pt-16 pb-8">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Newsletter (Oculto según tu código) */}
          <div className="text-center mb-14 hidden">
            {/* ... (tu código del newsletter) ... */}
          </div>

          {/* Bottom row: logo | contact | social */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            {/* Logo */}
            <div className="flex flex-col">
              <img src={logo} alt="Logo" className="w-20 h-20" />
            </div>

            <div className="flex flex-col sm:flex-row gap-12">
              {/* Contact */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Contacto</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><a href="mailto:Coach@carlosherran.com" className="hover:text-[#0B1B3D] transition-colors">Coach@carlosherran.com</a></li>
                  <li><a href="https://wa.me/13104303737" className="hover:text-[#0B1B3D] transition-colors">WhatsApp</a></li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Sígueme</h4>
                <ul className="space-y-3">
                  {socials.map(({ Icon, label, url }) => (
                    <li key={label}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#0B1B3D] transition-colors group"
                      >
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Legal links */}
          <div className="border-t border-[#dde0e8] pt-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 text-xs text-gray-500">
            {Object.keys(legalContent).map((title) => (
              <button
                key={title}
                onClick={() => setActiveModal(title)}
                className="hover:text-[#0B1B3D] underline underline-offset-2 transition-colors cursor-pointer"
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Contenedor principal del modal */}
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">

            {/* Header del modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#0B1B3D]">{activeModal}</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cuerpo del modal (Scrollable) */}
            <div className="p-6 overflow-y-auto text-gray-600 text-sm md:text-base leading-relaxed">
              {legalContent[activeModal]}
            </div>

            {/* Footer del modal */}
            <div className="p-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 bg-[#0B1B3D] text-white rounded-lg text-sm font-semibold hover:bg-[#132248] transition-colors"
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