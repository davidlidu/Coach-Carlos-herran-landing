import React from 'react';
import fotoCoach from '../assets/img/foto-carlos-coach.png';

const stats = [
  { value: '13+', label: 'Más de 13 años de experiencia como coach inmobiliario' },
  { value: '14k+', label: 'Más de 14.000 horas de coaching' },
  { value: '9+', label: 'Clientes en más de 9 países' },
];

export default function Hero() {
  return (
    <section className="container mx-auto px-6 pb-16 pt-4 flex flex-col md:flex-row items-center gap-10 md:gap-8">

      {/* Left column (60%) */}
      <div className="w-full md:w-4/5">
        <p className="text-[1.2rem] md:text-[1.5rem] text-gray-600 mb-2 tracking-wide">
          Coach Carlos Herrán
        </p>
        <h1
          className="text-[2.4rem] sm:text-5xl md:text-[3.2rem] font-black text-[#0B1B3D] leading-[1.08] mb-10 uppercase"
        >
          ¿Quieres construir un negocio inmobiliario que escale?
        </h1>

        {/* Stats */}
        <div className="space-y-5 mb-12">
          {stats.map(({ value, label }) => (
            <div key={value} className="flex items-center gap-5">
              <span
                className="text-4xl md:text-5xl font-black text-[#0B1B3D] min-w-[5rem]"
                style={{ letterSpacing: '-0.02em' }}
              >
                {value}
              </span>
              <span className="text-gray-700 text-base md:text-[1.5rem] font-medium leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
        <a href="#camp">
          <button className="btn-primary px-14 py-4 text-md uppercase tracking-widest w-full sm:w-auto color-green">
            Quiero el entrenamiento
          </button>
        </a>
      </div>

      {/* Right column — photo (40%) */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-end">
        {/* Replace src with coach photo when available */}
        <img
          src={fotoCoach}
          alt="Coach Carlos Herrán"
          onError={e => {
            (e.currentTarget as HTMLImageElement).src =
              'https://placehold.co/520x620/0B1B3D/FFFFFF?text=Foto+Coach&font=montserrat';
          }}
          className="w-full max-w-[320px] md:max-w-[420px] rounded-2xl object-cover object-top"
          style={{ aspectRatio: '4/5' }}
        />
      </div>
    </section>
  );
}