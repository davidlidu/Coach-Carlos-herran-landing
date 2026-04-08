import React from 'react';
import { Calendar, MonitorPlay, Clock } from 'lucide-react';

const details = [
  { Icon: Calendar,    label: 'FECHA',    value: 'Jueves 16 de Abril | 1:00 PM hora del Este' },
  { Icon: MonitorPlay, label: 'FORMATO',  value: 'Entrenamiento en vivo' },
  { Icon: Clock,       label: 'DURACIÓN', value: '2H' },
];

export default function EventSection() {
  return (
    <section className="container mx-auto px-6 py-14">
      {/* Outer card — light gray */}
      <div className="bg-[#f5f6f8] border border-[#e2e4e9] rounded-2xl p-8 md:p-12 shadow-sm">

        <h2
          className="text-2xl md:text-3xl lg:text-[2.2rem] font-black text-[#0B1B3D] text-center leading-tight mb-10 uppercase"
          
        >
          Los agentes que trabajan con listings ganan más,{' '}
          <br className="hidden md:block" />
          trabajan menos y duran más en el negocio
        </h2>

        {/* Inner dark card */}
        <div className="bg-[#0B1B3D] rounded-xl px-8 py-8 md:py-10 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 shadow-lg">
          {/* Details list */}
          <ul className="space-y-5">
            {details.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4 text-white">
                <Icon className="w-7 h-7 flex-shrink-0 opacity-90" strokeWidth={1.8} />
                <p className="text-base md:text-lg">
                  <span className="font-bold">{label}:</span>{' '}
                  <span className="font-normal">{value}</span>
                </p>
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="flex-shrink-0 text-white">
            <p className="text-xs font-bold tracking-widest uppercase opacity-70 mb-1 text-center md:text-right">Precio</p>
            <p
              className="text-4xl md:text-5xl font-black tracking-tight text-center md:text-right"
              
            >
              $5 USD
            </p>
          </div>
        </div>

        {/* Body copy */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Los agentes que construyen un negocio sostenible trabajan con listings. Un listing genera múltiples
          transacciones. Un comprador te exige todo el tiempo para cerrar una sola. Sin un sistema para
          asegurarlos, trabajas más horas, gastas más energía y produces menos, especialmente en el mercado
          en el que estamos hoy.
        </p>
      </div>

      {/* CTA below card */}
      <div className="flex justify-center mt-10">
        <button className="btn-primary px-14 py-4 text-sm uppercase tracking-widest">
          Reservar mi cupo
        </button>
      </div>
    </section>
  );
}
