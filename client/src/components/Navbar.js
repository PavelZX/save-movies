import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top navbar-light mt-2">
        <div className="container">
          <a className="navbar-brand font-weight-bold" href="/"><h4>Navbar</h4></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar1">
              <ul className="navbar-nav">

              </ul>
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item mr-2 mt-2">
                    <a href="/register">
                      <button type="button" className="btn btn-success navbar-rad">Kayıt Ol</button>
                    </a>
                    
                  </li>
                  <li className="nav-item mt-2">
                    <a href="/login">
                      <button type="button" className="btn btn-outline-primary navbar-rad">Giriş Yap</button>
                    </a>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;