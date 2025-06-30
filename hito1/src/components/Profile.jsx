import React from 'react';

const Profile = () => {
  const usuario = {
    nombre: 'Perfil de Usuario',
    correo: 'perfil.usuario@dominio.com',
    imagen: 'https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg?w=360',
  };

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center my-5" style={{ height: '75vh', width: '150vw', backgroundColor: 'white', borderRadius: '8px' }}>
      <div className="text-center">
        <img
          src={usuario.imagen}
          alt="Imagen de perfil"
          className="rounded-circle"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <h2 className="mt-3">{usuario.nombre}</h2>
        <p>{usuario.correo}</p>
        <button className="btn btn-primary mt-3">
          Cerrar Sesión
        </button>
      </div>
    </div>
      
    </>
  );
}

export default Profile;
