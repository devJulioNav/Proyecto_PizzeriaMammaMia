import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token } = useContext(UserContext);

if (token) return <Navigate to="/" />;

const handleSubmit = (e) => {

    e.preventDefault();

    if (!email.trim() || !password.trim()) {
        alert("Por favor, debes completar todos los campos")
        return
    }
    
    if (password.length<6) {
        alert("La contraseña debe tener como mínimo 6 caracteres")
        return
    }

    alert("Ingreso exitoso!✔")
}

    

  return (
    <>
        <div className="form-container container-fluid bg-secondary my-5 py-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="px-5">
                <label className="my-2 fs-5 mt-4">Correo electrónico:</label>
                <input value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                className="form-control" />

                <label className="my-2 fs-5 mt-4">Contraseña:</label>
                <input value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password"
                className="form-control" />

                <button type="submit" className="btn btn-primary mt-5 px-5">Enviar</button>
            </form>

        </div>
      
    </>
  );
}

export default Login;
