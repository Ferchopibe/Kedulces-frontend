
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    // Estados para controlar los campos del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Estados para el control de errores y respuestas visuales (Actividad D)
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setMensajeExito('');
        setMensajeError('');

        try {
            // Petición HTTP POST al backend blindado
            const respuesta = await axios.post('http://https://ferchopibe-production.up.railway.app/api/auth/login', {
                email,
                password
            });

            // Si el servidor responde con éxito, extraemos el mensaje y el token JWT
            setMensajeExito(respuesta.data.mensaje);
            
            // ¡ACTIVIDAD D / INTEGRACIÓN!: Guardamos el Token de seguridad en el almacenamiento local
            localStorage.setItem('token_kedulces', respuesta.data.token);
            
            // Limpiar campos del formulario
            setEmail('');
            setPassword('');

            console.log('Token JWT almacenado con éxito:', respuesta.data.token);

        } catch (error) {
            // Control de errores procedimental (Actividad D)
            if (error.response && error.response.data) {
                setMensajeError(error.response.data.error);
            } else {
                setMensajeError('No se pudo conectar con el servidor. Verifica que el backend esté encendido.');
            }
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Iniciar Sesión - Ke'Dulces</h2>
            
            {/* Mensajes de feedback visual para el usuario */}
            {mensajeExito && <p style={{ color: 'green', fontWeight: 'bold' }}>{mensajeExito}</p>}
            {mensajeError && <p style={{ color: 'red', fontWeight: 'bold' }}>{mensajeError}</p>}

            <form onSubmit={manejarEnvio}>
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
                    <label style={{ display: 'block', marginBottom: '5px' }}>Contraseña:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required 
                    />
                </div>

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Ingresar
                </button>
            </form>
        </div>
    );
};

export default Login;