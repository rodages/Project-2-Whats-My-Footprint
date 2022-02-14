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
              {/* <Link to="/about" className="navbar-item">
                About
              </Link> */}
              {/* <Link to="/countries" className="navbar-item">
                All Countries
              </Link> */}
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout