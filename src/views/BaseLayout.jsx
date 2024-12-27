import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-light py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3 mb-0">
              <Link to="/" className="text-decoration-none text-dark">
                Purrfect Adoption
              </Link>
            </h1>
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/available-cats" className="nav-link">
                    Available Cats
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-us" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow-1 container py-4">
        <Outlet />
      </main>
      <footer className="bg-light py-3">
        <div className="container text-center">
          <p className="mb-0">© Copyright 2024 Purrfect Adoption</p>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;

