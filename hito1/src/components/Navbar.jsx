import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    //const total = 25000;
    const { result } = useContext(CartContext);
    //const token = false;
    const { token, logout} = useContext(UserContext);

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-4">
            <div className="container-fluid ">
                <h4 className="text-bg-dark mx-3">¡Pizzería Mamma Mia!</h4>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link px-2" aria-current="page" to="/">🏠Home</Link>
                        </li>
                        {!token ? (
                                        <>
                                        <li className="nav-item"><Link className="nav-link px-2" to="/register">🔐Register</Link></li>
                                        <li className="nav-item"><Link className="nav-link px-2" to="/login">🔐Login</Link></li>
                                        </>
                                  ) : (
                                        <>
                                        <li className="nav-item"><Link className="nav-link px-2" to="/profile">🔓Profile</Link></li>
                                        <li className="nav-item"><Link className="nav-link px-2" to="/" onClick={() => logout()}>🔒Logout</Link></li>
                                        </>
                                    )}
                    </ul>
                </div>
                <button type="button" className="btn btn-outline-primary mx-3">
                    <Link className="nav-link px-3" aria-current="page" to="/cart">🛒Total: ${result.toLocaleString()}</Link>
                </button>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
