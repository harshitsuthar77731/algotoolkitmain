// import React, {Component} from 'react';

// class Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
//                 <a className="navbar-brand" href="#">Algorithm Visualizer</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse"
//                         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                         aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-item active">
//                             <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
//                         </li>

//                     </ul>
//                 </div>
//             </nav>
//         );
//     }
// }

// export default Navbar;

import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      //     <a className="navbar-brand" href="#">Algorithm Visualizer</a>
      //     <button className="navbar-toggler" type="button" data-toggle="collapse"
      //             data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      //             aria-expanded="false" aria-label="Toggle navigation">
      //         <span className="navbar-toggler-icon"></span>
      //     </button>

      //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //         <ul className="navbar-nav mr-auto">
      //             <li className="nav-item active">
      //                 <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
      //             </li>

      //         </ul>
      //     </div>
      // </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          AlgoToolKit
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span class="navbar-text"></span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
