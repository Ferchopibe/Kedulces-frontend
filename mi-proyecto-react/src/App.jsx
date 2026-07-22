
import React from "react";
import Catalogo from "./components/Catalogo";
import BotonWhatsapp from "./components/BotonWhatsapp";
import FormularioPQR from "./components/FormularioPQR";
import DashboardGraficas from "./components/DashboardGraficas"; // 1. Importamos el nuevo Dashboard

function App() {
  return (
    <div style={{ backgroundColor: '#fff5f8', minHeight: '100vh', padding: '40px 20px' }}>
      
      {/* 2. Mostramos el Dashboard Interactivo en la parte superior */}
      <DashboardGraficas />

      <hr style={{ margin: '50px 0', border: '1px dashed #d63384' }} />

      {/* Formulario PQR */}
      <FormularioPQR pedidoId="105" />

      <hr style={{ margin: '50px 0', border: '1px dashed #ccc' }} />

      {/* Vitrina de postres */}
      <Catalogo />

      {/* Botón flotante de WhatsApp */}
      <BotonWhatsapp />

    </div>
  );
}

export default App;