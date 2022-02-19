import { Link, Outlet } from "react-router-dom"

import React from "react"

function Layout() {
  return (
    <>
    <header>
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/basket" className="navbar-item">
              Basket
            </Link>
          </div>
        </div>
      </nav>
    </header>
    <main >
      <Outlet />
      <br></br>
    </main>
    <footer className="footer">
      <div className="content has-text-centered is-primary">
        <p>Our app collects data available on the <a href="https://carboncloud.com/" target="_blank">Carbon Cloud API</a>
        </p>
        <Link to="about">
          <p>
            <strong>About Us</strong>
          </p>
        </Link>
      </div>
    </footer>
    </>
  )
}

export default Layout