
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Registrar los módulos de Chart.js necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardGraficas = () => {
  // Datos simulados de la base de datos (luego se conectarán vía fetch al Backend)
  const [datosVentas, setDatosVentas] = useState({
    labels: ['Tres Leches', 'Milhoja', 'Cheesecake Maracuyá', 'Torta Chocolate', 'Postre Limón'],
    datasets: [
      {
        label: 'Unidades Vendidas (Mes)',
        data: [45, 32, 28, 19, 12],
        backgroundColor: [
          '#d63384',
          '#ff6b6b',
          '#fcc419',
          '#845ef7',
          '#20c997'
        ],
        borderWidth: 1,
      },
    ],
  });

  const [datosPQRs, setDatosPQRs] = useState({
    labels: ['Resueltas', 'En Proceso', 'Pendientes'],
    datasets: [
      {
        label: 'Estado de PQRs',
        data: [12, 4, 2],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      },
    ],
  });

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#d63384', textAlign: 'center', marginBottom: '30px' }}>
        📊 Panel de Control Gerencial - Ke'Dulces
      </h2>

      {/* Tarjetas de Métricas Rápidas */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px', gap: '15px' }}>
        <div style={{ backgroundColor: '#fff', borderLeft: '5px solid #d63384', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', flex: 1, textAlign: 'center' }}>
          <h4 style={{ margin: 0, color: '#666' }}>Ventas Totales</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', margin: '5px 0 0 0' }}>$ 1.360.000 COP</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderLeft: '5px solid #28a745', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', flex: 1, textAlign: 'center' }}>
          <h4 style={{ margin: 0, color: '#666' }}>Postre Más Vendido</h4>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', margin: '5px 0 0 0' }}>Tres Leches 🧁</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderLeft: '5px solid #ffc107', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', flex: 1, textAlign: 'center' }}>
          <h4 style={{ margin: 0, color: '#666' }}>PQRs Activas</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', margin: '5px 0 0 0' }}>6 Reclamos</p>
        </div>
      </div>

      {/* Grid de Gráficas */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* Gráfica 1: Ventas por Producto (Barras) */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '16px', color: '#444', textAlign: 'center' }}>🧁 Top Postres Más Vendidos</h3>
          <Bar 
            data={datosVentas} 
            options={{
              responsive: true,
              plugins: { legend: { display: false } }
            }} 
          />
        </div>

        {/* Gráfica 2: Estado de PQRs (Torta / Pie) */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '16px', color: '#444', textAlign: 'center' }}>📋 Estado de Solicitudes (PQR)</h3>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <Pie data={datosPQRs} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardGraficas;