import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import logo from '../assets/img/logo-carlos.png';


const socials = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
  //{ Icon: Twitter, label: 'X' },
  //{ Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f6f8] border-t border-[#e2e4e9] pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Newsletter */}
        <div className="text-center mb-14 hidden">
          <p className="text-sm text-gray-600 mb-4 font-medium">
            Recibe estrategias exclusivas directamente en tu bandeja de entrada.
          </p>
          <div className="flex justify-center items-center gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo"
              className="flex-1 border border-[#dde0e8] rounded-l-full px-5 py-3 text-sm focus:outline-none focus:border-[#0B1B3D] bg-white"
            />
            <button
              className="bg-[#0B1B3D] text-white text-sm font-bold px-6 py-3 rounded-r-full hover:bg-[#132248] transition-colors"
              style={{ letterSpacing: '0.04em' }}
            >
              Suscribir
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Al suscribirte aceptas nuestra política de privacidad y consientes recibir actualizaciones.
          </p>
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
                <li><a href="#" className="hover:text-[#0B1B3D] transition-colors">WhatsApp</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Sígueme</h4>
              <ul className="space-y-3">
                {socials.map(({ Icon, label }) => (
                  <li key={label}>
                    <a
                      href="#"
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
          {['Política de privacidad', 'Términos de servicio'].map(t => (
            <a key={t} href="#" className="hover:text-[#0B1B3D] underline underline-offset-2 transition-colors">
              {t}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
