import React from 'react'
import Service from "../components/Service"
import TrustedBy from "../components/TrustedBy"

function Home({messages}) {
    return (
        <div>
           <div class="swiper-container main-slider" id="myCarousel">
  <div class="swiper-wrapper">
    <div class="swiper-slide slider-bg-position" style={{display:"flex",flexDirection:"column",background:"url('https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg')"}} data-hash="slide1">
    <div style={{height:"200px"}}>
      <img style={{height:"100%"}} src="https://careers.coursera.org/wp-content/uploads/2017/09/Lindsay.png" />
    </div>
      <div style={{textAlign:"left",padding:"20px",background:"#00000080"}}>
      <h2 style={{padding:"0"}}>My Name is SWATI MISHRA</h2>
      <p style={{color:"#fff"}}>A Frontend developer student from Lovely Professional University.</p>
      </div>
    </div>
    <div class="swiper-slide slider-bg-position" style={{background:"url('https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_960_720.jpg')"}} data-hash="slide2">
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>
<section class="service-sec" id="benefits">
  <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="heading">
      <h2 style={{color:"black"}}><small>Let's Work Together</small>Everything I offer with a detailed overview of each.</h2>
    </div>
        </div>

        <div>
            <h3 className="py-1">MY SERVICES</h3>
            <div class="row">
              <Service
              heading="Web Design"
              secondary="User Focused"
              icon="fa-pencil"
              desc="A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website."
              />
              <Service
              heading="Web Development"
              icon="fa-laptop"
              secondary="Responsive and Fast"
              desc="Every website should be built with two primary goals: Firstly, it needs to work across all devices no matter what it is. Secondly, it needs to be fast as possible."
              />
            </div>
        </div>


      <div class="col-md-12 py-4 my-3">
        <h3 className="py-1">TRUSTED BY</h3>
        <div class="row" style={{background:"#FFFFFF80",borderRadius:"10px"}}>
        <TrustedBy
        name="Amazon"
        desc="Today Amazon.in is the largest online store in the country offering customers over 52 million products across hundreds of categories offered by thousands of sellers from the length and breadth of the country"
        icon="https://images-na.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg"
        />
        <TrustedBy
        name="Flipkart"
        desc="Today Flipkart is the largest online store in the country offering customers over 52 million products across hundreds of categories offered by thousands of sellers from the length and breadth of the country"
        icon="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/08/flipkart-1597763147.jpg"
        />
        <TrustedBy
        name="Google"
        desc="Today Google is the largest online store in the country offering customers over 52 million products across hundreds of categories offered by thousands of sellers from the length and breadth of the country"
        icon="https://cdn.vox-cdn.com/thumbor/HqBAiwc9uD1sHBw2Uvac03pCXKE=/0x0:2012x1341/1400x1050/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
        />
        <TrustedBy
        name="Netflix"
        desc="Today Netflix is the largest online store in the country offering customers over 52 million products across hundreds of categories offered by thousands of sellers from the length and breadth of the country"
        icon="https://pmcdeadline2.files.wordpress.com/2020/07/netflixjpg.png?w=681&h=383&crop=1"
        />
        </div>
      </div>
      {/* <div class="col-md-4 py-4"> <img src="https://www.uncommon.nz/wp-content/uploads/2018/05/blog-website-for-my-small-business-500x1000.jpg" class="img-fluid" /> </div> */}
    </div>
  </div>
</section>

        </div>
    )
}

export default Home