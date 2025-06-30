import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

const handleSubmit = (e) => {

    e.preventDefault();

    if (!email.trim() || !password.trim()|| !confirmPassword.trim()) {
        alert("Por favor, debes completar todos los campos")
        return
    }
    
    if (password.length<6 || confirmPassword.length<6) {
        alert("La contraseña debe tener como mínimo 6 caracteres")
        return
    }

    if (password!==confirmPassword) {
        alert("La contraseña y confirmación de contraseña deben ser iguales")
        return
    }

    alert("Registro exitoso!✔")
}

  return (
    <>
        <div className="form-container container-fluid bg-secondary my-5 py-5">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="px-5">
                <label className="my-2 fs-5">Correo electrónico:</label><br/>
                <input value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                className="form-control" /><br />

                <label className="my-2 fs-5">Contraseña:</label><br />
                <input value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password"
                className="form-control" /><br />

                <label className="my-2 fs-5">Confirmar contraseña:</label><br />
                <input value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                type="password"
                className="form-control" /><br/>

                <button type="submit" className="btn btn-primary mt-3 px-5">Enviar</button>
            </form>

        </div>
    </>
  );
}

export default Register;
