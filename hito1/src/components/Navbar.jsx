import React from 'react';

const Navbar = () => {
    const total = 25000;
    const token = true;

  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-4">
            <div class="container-fluid ">
                <h4 class="text-bg-dark">¡Pizzería Mamma Mia!</h4>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link px-3" aria-current="page" href="#">🍕Home</a>
                        </li>
                        <li class="nav-item" className={token? "hideA":"hideB"}>
                        <a class="nav-link" href="#">🔓Profile</a>
                        </li>
                        <li class="nav-item" className={token? "hideA":"hideB"}>
                        <a class="nav-link" href="#">🔒Logout</a>
                        </li>
                        <li class="nav-item" className={token? "hideA":"hideB"}>
                        <a class="nav-link" href="#">🔐Login</a>
                        </li>
                        <li class="nav-item" className={token? "hideA":"hideB"}>
                        <a class="nav-link" href="#">🔐Register</a>
                        </li>
                    </ul>
                </div>
                <button type="button" class="btn btn-outline-primary">🛒Total: ${total.toLocaleString()} </button>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
