
import React from 'react';

function BotonWhatsapp() {
  // El número de tu bot de Ke'Dulces (con el código de país de Colombia: 57)
  const numeroTelefono = "573196236509"; // 👈 Configurado con tu bot principal (319)
  const mensajePredeterminado = encodeURIComponent("¡Hola! Vengo desde la página web y me gustaría conocer más sobre los postres de Ke'Dulces. 🧁");

  const manejarRedireccion = () => {
    // Expresión regular inteligente para detectar si el usuario navega desde un móvil
    const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let url = "";
    if (esMovil) {
      // Enlace nativo optimizado para la aplicación móvil
      url = `https://wa.me/${numeroTelefono}?text=${mensajePredeterminado}`;
    } else {
      // Enlace web optimizado para computadoras (Abre WhatsApp Web)
      url = `https://web.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajePredeterminado}`;
    }

    // Abre el chat en una pestaña nueva sin interrumpir la navegación del cliente
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={manejarRedireccion}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-all duration-300 z-[9999] group animate-bounce hover:animate-none"
      title="Escríbenos por WhatsApp"
      aria-label="Chat de WhatsApp"
    >
      {/* Icono de burbuja de chat usando un emoji limpio */}
      <span className="drop-shadow-md group-hover:rotate-12 transition-transform">💬</span>
    </button>
  );
}

export default BotonWhatsapp;