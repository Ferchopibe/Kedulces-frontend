
import React, { useState, useEffect } from 'react';

// Borramos la constante estática antigua porque ahora los datos vienen vivos de MySQL

function Catalogo() {
  // 1. Definimos los estados para guardar los postres y controlar la carga
  const [postres, setPostres] = useState([]);
  const [cargando, setCargando] = useState(true);

  // 2. useEffect ejecuta la consulta al API apenas se monta el componente
  useEffect(() => {
  
    fetch('https://ferchopibe-production.up.railway.app/api/productos')
      .then((response) => response.json())
      .then((data) => {
        setPostres(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al consumir el catálogo de postres:', error);
        setCargando(false);
      });
  }, []);

  return (
    <section className="bg-[#FFFDF9] py-16 px-4 max-w-6xl mx-auto" id="catalogo">
      
      {/* ENCABEZADO DEL CATÁLOGO */}
      <div className="text-center space-y-4 mb-12">
        <span className="text-[#D81B60] font-semibold tracking-wider text-sm uppercase bg-[#FCEade] px-3 py-1 rounded-full">
          Nuestra Vitrina Dulce
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-black text-[#3A1E0A]">
          Explora Nuestras Delicias
        </h2>
        <p className="text-base text-[#6D4C31] max-w-xl mx-auto">
          Cada postre está hecho a mano, con ingredientes frescos y el amor de nuestra receta familiar. ¡Elige tu favorito para tu próximo evento!
        </p>
      </div>

      {/* ESTADO DE CARGA POR SI EL SERVIDOR TARDA EN RESPONDER */}
      {cargando ? (
        <div className="text-center py-12">
          <p className="text-[#7A431D] font-medium animate-pulse">Cargando nuestras delicias desde la cocina...</p>
        </div>
      ) : (
        /* REJILLA DE PRODUCTOS DINÁMICA (Mapea los datos reales de MySQL) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {postres.map((postre) => (
            <div 
              key={postre.id_producto} 
              className="bg-white rounded-2xl border border-[#F3E9DC] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Contenedor de la Imagen */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#FCEade]">
                {/* 
                  Nota técnica: Como en la base de datos guardamos solo nombres de archivo (ej: 'milhoja.png'), 
                  puedes concatenar la ruta de tus carpetas públicas o dejar una imagen por defecto temporal.
                */}
                <img 
                  src={postre.imagen_url ? `/imagenes/postres/${postre.imagen_url}` : "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=500&q=80"} 
                  alt={postre.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Si el archivo local no existe todavía, ponemos una foto de repostería de respaldo para que no se rompa la vista
                    e.target.src = "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=500&q=80";
                  }}
                />
                <span className="absolute top-3 left-3 bg-[#7A431D] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  Tradicional
                </span>
              </div>

              {/* Información del Producto */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#3A1E0A] group-hover:text-[#D81B60] transition-colors">
                    {postre.nombre}
                  </h3>
                  <p className="text-sm text-[#6D4C31] leading-relaxed">
                    {postre.descripcion}
                  </p>
                </div>

                {/* Precio y Botón de Acción */}
                <div className="pt-4 border-t border-[#F3E9DC] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#A08066] block uppercase tracking-wider font-semibold">Precio</span>
                    {/* Formateamos el precio decimal que viene de SQL para ponerle sus puntos de miles cómodamente */}
                    <span className="text-xl font-black text-[#7A431D]">
                      ${Number(postre.precio).toLocaleString('es-CO')} COP
                    </span>
                  </div>
                  
                  {/* Enlace directo a WhatsApp dinámico */}
                  <a 
                    href={`https://wa.me/573000000000?text=Hola%20Ke'Dulces!%20Me%20interesa%20encargar%20el%20postre:%20${encodeURIComponent(postre.nombre)}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-[#D81B60] text-white p-3 rounded-xl hover:bg-[#B3144D] transition-colors shadow-md flex items-center justify-center font-medium text-sm"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}

export default Catalogo;