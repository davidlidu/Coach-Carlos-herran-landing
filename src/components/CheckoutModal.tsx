import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        nivelProduccion: '',
        paisCiudad: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Reemplaza esto con la URL de tu Webhook en Dokploy
            const webhookUrl = 'https://n8n.carlosherran.com/webhook/iniciar-checkout';

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            // Esperamos que n8n devuelva { "url": "https://checkout.stripe.com/..." }
            if (data.url) {
                window.location.href = data.url;
            } else {
                alert('Hubo un problema procesando tu solicitud. Por favor intenta de nuevo.');
                setLoading(false);
            }
        } catch (error) {
            console.error("Error al conectar con n8n:", error);
            alert('Error de conexión. Verifica tu conexión a internet.');
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-md flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-[#0B1B3D]">Reserva tu cupo</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-100"
                        aria-label="Cerrar modal"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                        <input type="text" name="nombre" required onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B1B3D] focus:border-[#0B1B3D] outline-none transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                            <input type="tel" name="telefono" required onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B1B3D] focus:border-[#0B1B3D] outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">País o Ciudad</label>
                            <input type="text" name="paisCiudad" required onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B1B3D] focus:border-[#0B1B3D] outline-none transition-all" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                        <input type="email" name="email" required onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B1B3D] focus:border-[#0B1B3D] outline-none transition-all" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nivel de producción</label>
                        <select name="nivelProduccion" required onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B1B3D] focus:border-[#0B1B3D] outline-none transition-all bg-white">
                            <option value="">Selecciona tu nivel...</option>
                            <option value="Principiante">Principiante</option>
                            <option value="Intermedio">Intermedio</option>
                            <option value="Avanzado">Avanzado</option>
                        </select>
                    </div>

                    {/* Botón de Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-6 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all ${loading
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'btn-primary color-green'
                            }`}
                    >
                        {loading ? 'Procesando...' : 'Comprar ahora'}
                    </button>
                </form>
            </div>
        </div>
    );
}