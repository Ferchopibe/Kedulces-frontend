 
 import React, { useState } from 'react';

const Reclamos = () => {
  const [formData, setFormData] = useState({
    nombre: 'Luis Fernando Orozco',
    pedidoId: '1',
    tipo: 'Reclamo',
    motivo: 'Demora excesiva',
    detalles: 'Retraso en la entrega de pedidos'
  });

  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setError('');

    try {
      const response = await fetch('http://https://ferchopibe-production.up.railway.app/api/pqrs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pedidoId: parseInt(formData.pedidoId) || 1,
          tipo: formData.tipo,
          motivo: formData.motivo,
          descripcion: formData.detalles
        }),
      });

      const resultado = await response.json();

      if (response.ok) {
        alert(`¡Solicitud recibida, ${formData.nombre}! Tu radicado ha sido guardado exitosamente en la base de datos de Ke'Dulces.`);
        setFormData(prev => ({ ...prev, detalles: '' }));
      } else {
        setError(resultado.error || 'Error en el servidor al procesar el reclamo');
      }
    } catch (err) {
      console.error("Error de conexión:", err);
      setError("No se pudo conectar con el servidor. Verifica que el backend esté encendido.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ color: '#d63384' }}>Módulo de Reclamaciones - Ke'Dulces</h2>
      <p><strong>Cliente:</strong> {formData.nombre}</p>
      <p><strong>Pedido de referencia:</strong> #{formData.pedidoId}</p>

      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red', marginBottom: '10px', fontWeight: 'bold' }}>{error}</div>}

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Tipo de Trámite:</label>
          <select name="tipo" value={formData.tipo} onChange={handleChange} style={{ width: '100%', padding: '8px' }}>
            <option value="Reclamo">Reclamo por Servicio</option>
            <option value="Devolución">Devolución de Producto</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Motivo:</label>
          <select name="motivo" value={formData.motivo} onChange={handleChange} style={{ width: '100%', padding: '8px' }}>
            <option value="Demora excesiva">Mala atención / Retraso en la entrega</option>
            <option value="Producto defectuoso">Producto defectuoso / Mal estado</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Detalles del Reclamo:</label>
          <textarea 
            name="detalles" 
            value={formData.detalles} 
            onChange={handleChange} 
            rows="4" 
            style={{ width: '100%', padding: '8px', resize: 'vertical' }}
            required
          />
        </div>

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
          {enviando ? 'Enviando al Servidor...' : 'Enviar Solicitud'}
        </button>
      </form>
    </div>
  );
};

export default Reclamos;