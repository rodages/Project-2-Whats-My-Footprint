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
              <Link to={"/history"} className="navbar-item">
                History
              </Link>
              <Link to={"/searchresults"} className="navbar-item">
                Last Search
              </Link>
              <Link to="/basket" className="navbar-item">
                Basket
              </Link>
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