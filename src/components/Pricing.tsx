import React from 'react';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  period: string;
  features: { bold: string; rest: string }[];
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Agentes de Impacto\nMembresía básica',
    price: '$99',
    period: '/ Mes',
    features: [
      { bold: '3 Sesiones Semanales en Vivo:', rest: ' Acompañamiento grupal constante y en directo.' },
      { bold: 'Implementación del Sistema Completo:', rest: ' Trabajamos paso a paso la transacción exitosa.' },
      { bold: 'Cobertura Total del Ciclo:', rest: ' Desde la generación de leads hasta el cierre definitivo.' },
    ],
  },
  {
    name: 'Impacto Élite',
    price: '$247',
    period: '/ Mes',
    featured: true,
    features: [
      { bold: 'Incluye todo lo del paquete membresía.', rest: '' },
      { bold: 'Tracking Semanal de Números:', rest: ' Control total y preciso de tu rendimiento.' },
      { bold: 'Diagnóstico de Embudos:', rest: ' Identifica exactamente en qué paso se detiene tu negocio.' },
      { bold: 'Optimización Estratégica:', rest: ' Claridad absoluta sobre qué cambios ejecutar para escalar.' },
    ],
  },
  {
    name: 'Coaching 1 on 1',
    price: '$2000',
    period: '/ Mes',
    features: [
      { bold: 'Acceso Directo 1 a 1:', rest: ' Trabajo exclusivo y directo conmigo, sesión tras sesión.' },
      { bold: 'Diagnóstico Quirúrgico:', rest: ' Inmersión total en tu negocio para detectar el cuello de botella exacto que frena tu producción.' },
      { bold: 'Intervención Integral:', rest: ' Eliminamos los bloqueos de raíz, ajustando tanto tu estrategia operativa como tu mentalidad.' },
      { bold: 'Hoja de Ruta a Medida:', rest: ' Un plan de ejecución diseñado exclusivamente para la realidad de tu negocio específico.' },
    ],
  },
];

function PlanCard({ plan }: { plan: Plan; key?: string }) {
  return (
    <div
      // Se agregó 'h-full' para que todas las tarjetas se estiren y compartan la misma altura
      className={`flex flex-col h-full rounded-2xl border bg-white p-8 transition-all duration-300 card-lift ${plan.featured
        ? 'border-[#0B1B3D] border-2 shadow-xl md:-translate-y-3 z-10'
        : 'border-[#dde0e8] shadow-sm'
        }`}
    >
      {/* Name */}
      <h3
        className="text-base font-bold text-center text-[#0B1B3D] mb-6 leading-snug whitespace-pre-line"
      >
        {plan.name}
      </h3>

      {/* Price */}
      <div className="text-center mb-8">
        <span
          className={`font-black text-[#0B1B3D] ${plan.featured ? 'text-6xl' : 'text-5xl'}`}
          style={{ letterSpacing: '-0.03em' }}
        >
          {plan.price}
        </span>
        <span className="text-gray-500 font-medium text-sm ml-1">{plan.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-4 flex-grow mb-8">
        {plan.features.map(({ bold, rest }, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              className="w-4 h-4 text-[#0B1B3D] mt-0.5 flex-shrink-0"
              strokeWidth={3}
            />
            <span className="text-gray-700 text-sm leading-relaxed">
              <span className="font-bold text-gray-900">{bold}</span>
              {rest}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA - Se agregó 'mt-auto' para empujar los botones al final sin importar el contenido superior */}
      <button
        className={`w-full mt-auto py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-200 ${plan.featured
          ? 'bg-[#0B1B3D] text-white hover:bg-[#132248] hover:shadow-lg'
          : 'bg-[#0B1B3D] text-white hover:bg-[#132248] hover:shadow-md'
          }`}
      >
        Reservar ahora
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-black text-[#0B1B3D] mb-5 tracking-tight uppercase"
        >
          Coaching
        </h2>
        {/* Se cambió de 'max-w-2xl' a 'w-full md:w-[80%]' para que ocupe el 80% */}
        <p className="w-full md:w-[80%] mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          Agentes de Impacto con{' '}
          <span className="font-bold text-gray-900">más de 13 años</span> entrenando agentes que
          generan más de <span className="font-bold text-gray-900">$100 millones</span> en volumen
          anual. Un solo lugar para aprender, implementar y escalar tu negocio inmobiliario.
        </p>
      </div>

      {/* Cards grid */}
      {/* Se eliminó 'items-start' (que impedía que las tarjetas tuvieran la misma altura) 
          y se cambió de 'max-w-5xl' a 'max-w-6xl' para darles más anchura */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map(plan => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}