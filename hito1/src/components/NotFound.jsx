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
          src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?semt=ais_items_boosted&w=740" 
          alt="Página no encontrada"
          className="not-found-image"
          style={{height:'60vh'}}
        />
        </div>
      </div>
    </>
  );
}

export default NotFound;
