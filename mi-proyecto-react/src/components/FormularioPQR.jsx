
import React, { useState } from 'react';

const FormularioPQR = ({ pedidoId, onExito }) => {
  // 1. Definición del estado del formulario
  const [formData, setFormData] = useState({
    pedidoId: pedidoId || '1', // Por defecto usamos el pedido #1 de prueba
    tipo: 'Devolución',       // Valor por defecto
    motivo: '',
    descripcion: ''
  });

  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);

  // 2. Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 3. Manejador único y validado del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setEnviando(true);

    // BLINDAJE DE SEGURIDAD (Actividad 3): Validación estricta en el cliente
    if (!formData.motivo || formData.motivo === '') {
      setError('Por favor, selecciona un motivo válido para tu solicitud.');
      setEnviando(false);
      return;
    }

    if (!formData.descripcion || formData.descripcion.trim().length < 10) {
      setError('La descripción es obligatoria y debe tener al menos 10 caracteres de detalle.');
      setEnviando(false);
      return;
    }

    console.log("Enviando datos reales validados al puerto 4000:", formData);

    try {
      // Petición limpia enlazada directamente a tu backend de Node en el puerto 4000
      const response = await fetch('const API_URL = 'const API_URL = 'https://ferchopibe-production.up.railway.app'; {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pedidoId: parseInt(formData.pedidoId), // Formateo numérico para MySQL
          tipo: formData.tipo,
          motivo: formData.motivo,
          descripcion: formData.descripcion.trim()
        }),
      });

      const resultado = await response.json();

      if (response.ok) {
        alert(`¡Solicitud registrada con éxito! Motivo procesado: ${formData.motivo}`);
        if (onExito) onExito(resultado); 
        
        // Limpiamos el formulario tras el éxito
        setFormData({
          pedidoId: pedidoId || '1',
          tipo: 'Devolución',
          motivo: '',
          descripcion: ''
        });
      } else {
        throw new Error(resultado.error || 'Error en el servidor al procesar la PQR');
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor de Ke\'Dulces. Verifica que el backend esté corriendo.');
      console.error("Error detectado en el envío:", err);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="pqr-container" style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#d63384' }}>Solicitud de Devolución / PQR</h2>
      <p><strong>Pedido de referencia:</strong> #{formData.pedidoId}</p>

      <form onSubmit={handleSubmit}>
        {error && (
          <div style={{ color: '#721c24', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontWeight: 'bold' }}>
            ⚠️ {error}
          </div>
        )}

        {/* Campo: Tipo de Solicitud */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Tipo de Trámite:</label>
          <select 
            name="tipo" 
            value={formData.tipo} 
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="Devolución">Devolución de Producto</option>
            <option value="Cancelación Extemporánea">Cancelación Extemporánea</option>
          </select>
        </div>

        {/* Campo: Motivo de la Solicitud */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Motivo *</label>
          <select 
            name="motivo" 
            value={formData.motivo} 
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">-- Seleccione un motivo --</option>
            <option value="Producto defectuoso">El producto llegó en mal estado / derretido</option>
            <option value="Pedido incompleto">Faltaron productos en la entrega</option>
            <option value="Demora excesiva">El pedido tardó demasiado y ya no se requiere</option>
            <option value="Error de orden">Recibí un postre/dulce diferente al solicitado</option>
          </select>
        </div>

        {/* Campo: Descripción detallada */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Detalles de la solicitud *</label>
          <textarea 
            name="descripcion" 
            value={formData.descripcion} 
            onChange={handleChange}
            rows="4"
            placeholder="Describe detalladamente la situación con tu pedido (mínimo 10 caracteres)..."
            style={{ width: '100%', padding: '8px', resize: 'vertical', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Botón de Envío */}
        <button 
          type="submit" 
          disabled={enviando}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: enviando ? '#ccc' : '#d63384',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: enviando ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {enviando ? 'Procesando en Servidor...' : 'Enviar Solicitud'}
        </button>
      </form>
    </div>
  );
};

export default FormularioPQR;