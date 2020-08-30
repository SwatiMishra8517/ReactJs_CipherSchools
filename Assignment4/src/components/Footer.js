import React from 'react'

function Footer() {
    return (
        <footer  class="page-footer font-small bg-dark text-white parallax-section" id="footerfinal">
    <div style={{backgroundImage: "url('https://wallpaperaccess.com/full/449895.jpg')",color:"black"}}>
      <div class="container">
        <div class="row py-4 d-flex align-items-center">
          <div class="col-sm-6 col-lg-6 text-center text-md-left">
            <h6 class=""></h6>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid text-center text-md-left mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold">Swati Mishra</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto bg-white" style={{"width":"90%"}}/>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold">Useful links</h6>
          <hr class="mb-4 mt-0 d-inline-block mx-auto bg-white" style={{"width": "110px"}}/>
                    <p>
            <a href="#!" class="text-warning">Home</a>
          </p>
          <p>
            <a href="#" class="text-warning">Contact</a>
          </p>
          <p>
            <a href="#" class="text-warning">Resume</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase font-weight-bold">Contact</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto bg-white" style={{"width": "75px"}}/>
          <p class="text-warning">
            <i class="fa fa-home text-warning"></i>Jalandhar Cantt, Punjab </p>
          <p class="text-warning"><a href="#" class="text-warning">
            <i class="fa fa-envelope text-warning"></i>swatimishranaruto@gmail.com</a></p>
          <p class="text-warning"><a class="text-warning" href='#'>
            <i class="fa fa-phone text-warning"></i> +91 - 9876444894 </a></p>
          </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3 text-warning">© 2012-2020 Copyright:
      <a href="#/" class="text-warning">myprotfolio.in</a></div>

  </footer>
    )
}

export default Footer