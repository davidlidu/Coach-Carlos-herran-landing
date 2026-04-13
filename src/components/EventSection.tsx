import React, { useState } from 'react';
import { Calendar, MonitorPlay, Clock } from 'lucide-react';
import CheckoutModal from './CheckoutModal'; // <-- IMPORTAMOS EL MODAL

const details = [
  { Icon: Calendar, label: 'FECHA', value: 'Jueves 23 de Abril | 1:00 PM hora del Este' },
  { Icon: MonitorPlay, label: 'FORMATO', value: 'Entrenamiento en vivo' },
  { Icon: Clock, label: 'DURACIÓN', value: '2 Horas' },
];

export default function EventSection() {
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- ESTADO DEL MODAL

  return (
    <section className="container mx-auto px-6 py-14">
      {/* Outer card — light gray */}
      <div className="bg-[#f5f6f8] border border-[#e2e4e9] rounded-2xl p-8 md:p-12 shadow-sm">

        <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[#0B1B3D] text-center leading-tight mb-10 uppercase">
          Sistema de 5 Pasos para Asegurar Listings en Exclusiva
        </h2>

        {/* Inner dark card */}
        <div className="bg-[#0B1B3D] rounded-xl px-8 py-8 md:py-10 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 shadow-lg">
          {/* Details list */}
          <ul className="space-y-5">
            {details.map(({ Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4 text-white">
                <p className="text-base md:text-4xl color-green">
                  <span className="font-normal">{value}</span>
                </p>
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="flex-shrink-0 text-white">
            <p className="text-6xl md:text-4xl font-bold tracking-tight text-center md:text-right">
              $5 USD
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-base md:text-2xl leading-relaxed text-center mx-auto w-full md:w-[85%]">
          <b>Los agentes que trabajan con listings ganan más, trabajan menos y duran más en el negocio.</b><br></br>
          Los agentes que construyen un negocio sostenible trabajan con listings. Un listing genera múltiples
          transacciones. Un comprador te exige todo el tiempo para cerrar una sola. Sin un sistema para
          asegurarlos, trabajas más horas, gastas más energía y produces menos, especialmente en el mercado
          en el que estamos hoy.
        </p>
      </div>

      {/* CTA below card */}
      <div className="flex justify-center mt-10">
        {/* QUITAMOS EL ENLACE DE STRIPE Y AGREGAMOS EL ONCLICK */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary px-14 py-4 text-xl uppercase tracking-widest color-green"
        >
          Reservar mi cupo
        </button>
      </div>

      {/* RENDERIZAMOS EL MODAL */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}