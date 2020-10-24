import React, { Component } from "react";
import logo from "../logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <div className="navbar-brand col-sm-3 col-md-2 mr-0">
            Roti Canai Exchange
          </div>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <img
                  src={logo}
                  className="App-logo"
                  alt="Credit: Adib Mazlee"
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
