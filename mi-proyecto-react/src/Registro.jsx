
import React, { useState } from 'react';
import axios from 'axios';

const Registro = () => {
    // Estados para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Estados para la gestión de errores y éxito (Actividad D)
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setMensajeExito('');
        setMensajeError('');

        try {
            // Petición HTTP POST enviando los datos para aplicar el Hash en el servidor
            const respuesta = await axios.post('http://https://ferchopibe-production.up.railway.app/api/auth/register', {
                nombre,
                email,
                password
            });

            // Mostrar mensaje de éxito en pantalla
            setMensajeExito(respuesta.data.mensaje);
            
            // Limpiar el formulario
            setNombre('');
            setEmail('');
            setPassword('');

        } catch (error) {
            // Captura y control de errores del backend (Actividad D)
            if (error.response && error.response.data) {
                setMensajeError(error.response.data.error);
            } else {
                setMensajeError('Error de red. Asegúrate de que el backend esté corriendo en el puerto 4000.');
            }
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Crear Cuenta - Ke'Dulces</h2>

            {/* Mensajes visuales de control */}
            {mensajeExito && <p style={{ color: 'green', fontWeight: 'bold' }}>{mensajeExito}</p>}
            {mensajeError && <p style={{ color: 'red', fontWeight: 'bold' }}>{mensajeError}</p>}

            <form onSubmit={manejarEnvio}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Nombre Completo:</label>
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required 
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Correo Electrónico:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required 
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Contraseña de Seguridad:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required 
                    />
                </div>

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Registrarme
                </button>
            </form>
        </div>
    );
};

export default Registro;