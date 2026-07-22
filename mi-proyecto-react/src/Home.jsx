
 import React from 'react';

function Home() {
  return (
    <div>
      {/* 1. SECCIÓN HERO */}
      <main className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center" id="inicio">
        <div className="space-y-6 text-center md:text-left">
          <span className="text-[#D81B60] font-semibold tracking-wider text-sm uppercase bg-[#FCEade] px-3 py-1 rounded-full">
            Tradición Familiar en Cali
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-black text-[#3A1E0A] leading-tight">
            El lado más dulce de tus momentos
          </h1>
          <p className="text-lg text-[#6D4C31] max-w-md mx-auto md:mx-0">
            Postres artesanales y dulces tradicionales creados con mucha pasión para compartir en familia. Haz tu pedido hoy mismo.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#catalogo" className="bg-[#7A431D] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#5C3214] transition-all text-center shadow-lg">
              Ver Catálogo
            </a>
            <a href="#contacto" className="border-2 border-[#7A431D] text-[#7A431D] px-8 py-3.5 rounded-xl font-semibold hover:bg-[#FBECE3] transition-all text-center">
              Contáctanos
            </a>
          </div>
        </div>

        {/* CONTENEDOR PARA LA IMAGEN PRINCIPAL */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-[#F1C2B6] rounded-full filter blur-3xl opacity-30 w-72 h-72 m-auto"></div>
          <div className="relative bg-[#fceade] border-4 border-[#F3E9DC] w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-[#A08066]">
            <span className="text-sm font-medium">Espacio para Foto Principal (Postres)</span>
          </div>
        </div>
      </main>

      {/* 2. SECCIÓN: ACERCA DE NOSOTROS */}
      <section className="bg-[#FCEade] py-20 px-4" id="nosotros">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <span className="text-[#D81B60] font-semibold tracking-wider text-sm uppercase bg-white px-3 py-1 rounded-full shadow-sm">
            Nuestra Historia
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl font-black text-[#3A1E0A]">
            Amor por la repostería que une a la familia
          </h2>
          
          <div className="text-base md:text-lg text-[#6D4C31] leading-relaxed max-w-2xl mx-auto space-y-4">
            <p>
              Ke'Dulces nació en el corazón de nuestro hogar durante la pandemia. Lo que comenzó como un refugio de dulzura y unión familiar en momentos difíciles, se transformó en una pasión compartida por crear los postres más deliciosos de Cali.
            </p>
            <p className="font-medium text-[#7A431D]">
              Cada torta que sale de nuestra cocina lleva consigo el secreto de las recetas tradicionales, ingredientes seleccionados con pinzas y, sobre todo, el trabajo en equipo de una familia dedicada a endulzar tus celebraciones.
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 pt-4">
            <span className="h-0.5 w-8 bg-[#7A431D] opacity-30"></span>
            <span className="text-xl">🍰</span>
            <span className="h-0.5 w-8 bg-[#7A431D] opacity-30"></span>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN: CONTACTO DIRECTO */}
      <section className="bg-[#FFFDF9] py-16 px-4 border-t border-[#F3E9DC]" id="contacto">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-4">
            <span className="text-[#D81B60] font-semibold tracking-wider text-sm uppercase bg-[#FCEade] px-3 py-1 rounded-full">
              Atención Inmediata
            </span>
            <h2 className="font-serif text-3xl font-black text-[#3A1E0A]">
              ¿Tienes un evento en Cali? ¡Hablemos!
            </h2>
            <p className="text-[#6D4C31]">
              Atendemos pedidos programados para cumpleaños, reuniones familiares y antojos de fin de semana. Escríbenos directamente a nuestra línea de atención en WhatsApp.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#F3E9DC] shadow-sm text-center space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#7A431D]">Línea Directa Ke'Dulces</h3>
            <p className="text-sm text-[#A08066]">Horario: Lunes a Sábado - 8:00 AM a 6:00 PM</p>
            <a 
              href="https://wa.me/573000000000" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:bg-[#20ba5a] transition-all shadow-md"
            >
              💬 Chatear por WhatsApp
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;