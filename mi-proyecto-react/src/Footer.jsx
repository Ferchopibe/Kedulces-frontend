
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#F3E9DC] text-[#7A431D] border-t border-[#E6D5C3] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Rejilla responsiva de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Columna 1: Identidad Corporativa */}
          <div className="space-y-3">
            <h3 className="text-xl font-serif font-bold tracking-wide">
              Ke’Dulces – SAS
            </h3>
            <p className="text-sm text-[#8B5A2B] max-w-sm mx-auto md:mx-0">
              Transformando la tradición dulcera en experiencias digitales. Llevando los mejores postres directamente a su hogar.
            </p>
          </div>

          {/* Columna 2: Ubicación y Contacto */}
          <div className="space-y-2">
            <h4 className="text-md font-bold uppercase tracking-wider text-[#A0522D]">
              Contacto y Ubicación
            </h4>
            <ul className="text-sm space-y-1 text-[#8B5A2B]">
              <li>📍 Distribución en el área municipal</li>
              <li className="font-semibold">Cali, Colombia</li>
              <li>📞 Teléfono: 315 XXX XXXX</li>
              <li>⏰ Horario: Lunes a Sábado - 8:00 AM a 6:00 PM</li>
            </ul>
          </div>

          {/* Columna 3: Enlaces y Redes */}
          <div className="space-y-2">
            <h4 className="text-md font-bold uppercase tracking-wider text-[#A0522D]">
              Enlaces Rápidos
            </h4>
            <div className="flex flex-col space-y-1 text-sm">
              <a href="/catalogo" className="hover:text-[#D81B60] transition-colors">• Catálogo de Productos</a>
              <a href="/reclamos" className="hover:text-[#D81B60] transition-colors">• Gestión de PQRs</a>
              <p className="text-xs text-[#A17C58] mt-2">
                © 2026 Postres y Dulces Ke’Dulces – SAS. Todos los derechos reservados.
              </p>
            </div>
          </div>

        </div>

        {/* Línea decorativa inferior */}
        <div className="border-t border-[#E6D5C3] mt-8 pt-4 text-center text-xs text-[#A17C58]">
          Diseñado con rigor científico e ingeniería de sistemas.
        </div>
      </div>
    </footer>
  );
}

export default Footer