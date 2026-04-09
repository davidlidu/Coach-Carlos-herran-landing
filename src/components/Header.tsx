import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/img/logo-carlos.png';

export default function Header() {
  const [open, setOpen] = useState(false);

  // 1. Convertimos los links en objetos con nombre y href (ID)
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Propósito', href: '#proposito' },
    { name: 'Campaña', href: '#camp' },
    { name: 'Servicios', href: '#servicios' },
  ];

  return (
    <header className="w-full px-6 py-5 flex items-center justify-between relative z-50">
      {/* Logo */}
      <a href="#home" className="flex flex-col leading-none select-none">
        <img src={logo} alt="Logo" className="w-20 h-20" />
      </a>

      {/* Desktop nav — pill centered */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <ul className="flex items-center bg-[#0B1B3D] text-white rounded-full px-8 py-3 gap-8 text-sm font-semibold tracking-wide shadow-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-gray-300 transition-colors duration-200 color-green"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-[#0B1B3D] z-50"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden">
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-8 py-3 text-sm font-semibold text-[#0B1B3D] hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(false)} // Cierra el menú al hacer click
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}