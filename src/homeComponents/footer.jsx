import React, { Component } from "react";
import GitHubButton from "react-github-btn";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer class="footer-07">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <h2 class="footer-heading">
                <a href="#" class="logo">
                  AlgoToolKit
                </a>
              </h2>
              <p class="menu"></p>
              <ul class="ftco-footer-social p-0">
                <li class="ftco-animate">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <span class="ion-logo-twitter"></span>
                  </a>
                </li>
                <li class="ftco-animate">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <span class="ion-logo-facebook"></span>
                  </a>
                </li>
                <li class="ftco-animate">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <span class="ion-logo-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <p class="copyright"></p>
            </div>
          </div>
        </div>
      </footer>

      // <footer class="page-footer font-small special-color-dark pt-4 ">

      //     <div className='flex-wrap' style={{textAlign:"center"}}>
      //         <div className='m-2'><GitHubButton href="https://github.com/TamimEhsan" data-show-count="true" aria-label="Follow @TamimEhsan on GitHub">Follow @TamimEhsan</GitHubButton></div>
      //         <GitHubButton href="https://github.com/TamimEhsan/Pathfinder-2.0" data-icon="octicon-star" data-show-count="true" aria-label="Star TamimEhsan/Pathfinder-2.0 on GitHub">Star</GitHubButton>
      //         &nbsp
      //         <GitHubButton href="https://github.com/TamimEhsan/Pathfinder-2.0/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork TamimEhsan/Pathfinder-2.0 on GitHub">Fork</GitHubButton>
      //         &nbsp
      //         <img src="https://hitcounter.pythonanywhere.com/count/tag.svg" alt="Hits"/>
      //     </div>

      //     <div class="footer-copyright text-center py-3">© 2020 Copyright:
      //         <a href="https://github.com/tamimehsan" style={{color: "#65b6f0"}}> Tamim Ehsan</a>
      //     </div>

      // </footer>
    );
  }
}

export default Footer;
