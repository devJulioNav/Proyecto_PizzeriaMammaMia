import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <>
      <div className="container text-center m-5 text-light d-flex flex-column">
        <h2 className="display-4 text-light">404 - Página no encontrada</h2>
        <p className="lead">Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" className="btn btn-link">Volver al Home</Link>
        <div className="container-image h-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" 
          alt="Página no encontrada"
          className="not-found-image"
        />
        </div>
      </div>
    </>
  );
}

export default NotFound;
