import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Proposito', 'Campaña', 'Servicios'];

  return (
    <header className="w-full px-6 py-5 flex items-center justify-between relative z-50">
      {/* Logo */}
      <a href="#" className="flex flex-col leading-none select-none">
        <span className="text-[2rem] font-black text-[#0B1B3D] tracking-tighter leading-none">ch.</span>
        <span className="text-[0.5rem] font-bold tracking-[0.22em] uppercase text-[#0B1B3D] mt-0.5">
          Coach Carlos Herrán
        </span>
      </a>

      {/* Desktop nav — pill centered */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <ul className="flex items-center bg-[#0B1B3D] text-white rounded-full px-8 py-3 gap-8 text-sm font-semibold tracking-wide shadow-lg">
          {links.map(l => (
            <li key={l}>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">{l}</a>
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
            {links.map(l => (
              <li key={l}>
                <a
                  href="#"
                  className="block px-8 py-3 text-sm font-semibold text-[#0B1B3D] hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
