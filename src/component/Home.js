import React from 'react'
import { card } from '../component/Card'
import sora1 from '../images/product_img1.jpg'
import sora2 from '../images/product_img2.jpg'
import sora3 from '../images/product_img4.jpg'
import sora4 from '../images/product_img5.jpg'
import sora6 from '../images/product_img6.jpg'
import sora7 from '../images/product_img7.jpg'
import sora8 from '../images/shop_banner_img2.jpg'
import sora9 from '../images/shop_banner_img1.jpg'
import logo from '../images/logo_dark.png'
import visa from '../images/visa.png'
import discover from '../images/discover.png'
import master from '../images/master_card.png'
import paypal from '../images/paypal.png'
import amarica from '../images/amarican_express.png'
import trinding from '../images/tranding_img.png'
import face from  '../images/facebook-3-24.png'
import twit from  '../images/twitter-24.png'
import inst from  '../images/instagram-24.png'


// import sora9 from '../shop_banner_img1.jpg'
import './/Home.css'
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Col, Card } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { Products } from '../pages/Products'
import axios from 'axios'
import { useEffect, useState } from 'react'




import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';



export const Home = (swip) => {
  const [products, setproducts] = useState()

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((resp) => setproducts(resp.data))
  }, [])
  console.log(products)

  return (

    <div>

      <Container>
        <div class="container" >
          <div class="row" >
            <div class="col-md-12">

              <div class="card-group">
                <div className="card">
                  <img src={sora1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Blue dress for woman</h5>
                    <p class="card-text">$45.00</p>
                    <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.<small class="text-body-secondary"></small></p>
                  </div>
                </div>
                <div class="card">
                  <img src={sora2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Lether Gray Tuxedo</h5>
                    <p class="card-text"> $55.00 </p>
                    <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.<small class="text-body-secondary"></small></p>
                  </div>
                </div>
                <div class="card">
                  <img src={sora3} class="card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title" path='Products' to='Products'>Light Blue Shirt</h5>
                    <p class="card-text">$ 69.00</p>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.<small class="text-body-secondary"></small></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>

      {/*                          sectio 2                           */}


      {/*                           section  3                 */}
      <div class="swiper">
        <div class="container-md" >
          <div class="row" >
            <div class="col-md-12" >
              <Swiper
                 rewind={true}
                pagination={{
                  type: 'fraction',
                }}

                navigation={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper">

                {
                  products?.map((swip) => <SwiperSlide key={swip.id} >  <img src={swip.image} /> </SwiperSlide>)
                }

              </Swiper>
            </div>
          </div>
        </div>
      </div>



      {/*               section               */}


      <div class="section pb_20">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="single_banner">
                <img src={sora9} alt="shop_banner_img1" />
                <div class="single_banner_info">
                  <h5 class="single_bn_title1">Super Sale</h5>
                  <h3 class="single_bn_title">New Collection</h3>
                  <a href="http://localhost:3000/products" class="single_bn_link">Shop Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="single_banner">
                <img src={sora8} alt="shop_banner_img2" />
                <div class="single_banner_info">
                  <h3 class="single_bn_title">New Season</h3>
                  <h4 class="single_bn_title1">Sale 40% Off</h4>
                  <a href="http://localhost:3000/products" class="single_bn_link">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
       {/*                      section              */}

      <div className='Exclusive' >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="heading_s1 text-center">
                <h2>Exclusive Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
            
                    {/*                      section                        */}
      
      <div className='summer' >
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-md-6 ">
              <div class="medium_divider d-none d-md-block clearfix"></div>
              <div class="trand_banner_text text-center text-md-left">
                <div class="heading_s1 mb-3">
                  <span class="sub_heading">New season trends!</span>
                  <h2>Best Summer Collection</h2>
                </div>
                <h5 class="mb-4">Sale Get up to 50% Off</h5>
                <a href="http://localhost:3000/products" class="btn btn-fill-out rounded-0">Shop Now</a>
              </div>
              <div class="medium_divider clearfix"></div>
            </div>
            <div class="col-md-5">
              <div class="text-center trading_img">
                <img src={trinding} alt="tranding_img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*                                                     */}

      <div className='free'>
        <div class="container">
          <div class="row no-gutters">
            <div class="col-lg-4">
              <div class="icon_box icon_box_style1">
                <div class="icon">
                  <i class="flaticon-shipped"></i>
                </div>
                <div class="icon_box_content">
                  <h5>Free Delivery</h5>
                  <p>If you are going to use of Lorem, you need to be sure there anything</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="icon_box icon_box_style1">
                <div class="icon">
                  <i class="flaticon-money-back"></i>
                </div>
                <div class="icon_box_content">
                  <h5>30 Day Return</h5>
                  <p>If you are going to use of Lorem, you need to be sure there anything</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="icon_box icon_box_style1">
                <div class="icon">
                  <i class="flaticon-support"></i>
                </div>
                <div class="icon_box_content">
                  <h5>27/4 Support</h5>
                  <p>If you are going to use of Lorem, you need to be sure there anything</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*                                   */}

      <div class="email">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="heading_s1 mb-md-0 heading_light">
                <h3>Subscribe Our Newsletter</h3>
              </div>
            </div>
            <div class="col-md-6">
              <div className='email-form'>
                <form>
                  <input type="text" required="" class="form-control rounded-0" placeholder="Enter Email Address" />
                  <button type="submit" class="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*                         section 4                    */}
      <footer className='foter' >
        <div class="footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="widget">
                  <div class="footer_logo">
                    <a href="#"><img src={logo} alt="logo" /></a>
                  </div>
                  <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                </div>
                <div className='icon' >
                  <ul class="social_icons social_white">
                    <li><a href="#"><img src={face} /></a></li>
                    <li><a href="#"><img src={twit} /></a></li>
                    <li><a href="#"><img src={inst}/></a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="widget">
                  <h6 class="widget_title">Useful Links</h6>
                  <ul class="widget_links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Affiliates</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="widget">
                  <h6 class="widget_title">Category</h6>
                  <ul class="widget_links">
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Woman</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Best Saller</a></li>
                    <li><a href="#">New Arrivals</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="widget">
                  <h6 class="widget_title">My Account</h6>
                  <ul class="widget_links">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Discount</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Orders History</a></li>
                    <li><a href="#">Order Tracking</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="widget">
                  <h6 class="widget_title">Contact Info</h6>
                  <ul class="contact_info contact_info_light">
                    <li>
                      <i class="ti-location-pin"></i>
                      <p>123 Street, Old Trafford, New South London , UK</p>
                    </li>
                    <li>
                      <i class="ti-email"></i>
                      <a href="mailto:info@sitename.com">info@sitename.com</a>
                    </li>
                    <li>
                      <i class="ti-mobile"></i>
                      <p>+ 457 789 789 65</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_footer border-top-tran">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p class="mb-md-0 text-center text-md-left">© 2020 All Rights Reserved by Bestwebcreator</p>
              </div>
              <div class="col-md-6">
                <div className='cash' >
                <ul class="footer_payment text-center text-lg-right">
                  <li><p>VISA <a href="#"><img src={visa} alt="visa" /></a> </p></li>
                  <li><p>DISCOVER <a href="#"><img src={discover} alt="discover" /></a></p></li>
                  <li><p>MASTER CARD <a href="#"><img src={master} alt="master_card" /></a> </p></li>
                  <li><p>PAYPAL    <a href="#"><img src={paypal} alt="paypal" /></a></p></li>
                  <li><p>AMARICAN EXPREES <a href="#"><img src={amarica} alt="amarican_express" /></a></p></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>

  )
}




















{/* //   <div class='col-md-5'  >
  //   <div class="card text-bg-dark" style={{ display: 'flex' }} >
  //       <img src={sora1} class="card-img" height={'200px'} />
  //       <div class="card-img-overlay"  >
  //           <h5 class="card-title" style={{ color: 'red' }}>Card title</h5>
  //           <p class="card-text" width={'150px'} style={{ color: 'black' }} >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //           <p class="card-text" width={'150px'} style={{ color: 'black' }} ><small>Last updated 3 mins ago</small></p>
  //       </div>
  //   </div>
  // </div>

  // style={{ display : 'flex' ,justifyContent:'flex-end' ,flexDirection :'column' ,alignItems:'flex-end' }}

  // justify-content: flex-end;
  // flex-direction: column;
  // align-items: flex-end */}


{/* <div className="container">
    <div className="row">
        <div className="col-md-3 text-center ">
            <img src={sora1} className=""/>
            <h2 className="text-capitalize">name</h2>
             <p className="text-capitalize">peter rady</p>
            <h2 className="text-capitalize">phone</h2>
            <p>012365787836</p>
            <h2 className="text-capitalize">address</h2>
            <p className="text-capitalize">masr el gdeda</p>
        </div>
        <div className="col-md-8  text-center" >
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta modi numquam laborum porro id reprehenderit consequatur veritatis quo deserunt a! Ad et unde amet quasi voluptate rerum, a perferendis nihil?</p>
            <div className="row">
                <div className="col-md-4 text-center rounded-circle">
                    <img src={sora2} alt=""/>
                    <h4>Lorem, ipsum.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero voluptates quas iste molestiae odio aliquam. Illum soluta error repellat quo iusto culpa, eaque dolorum delectus, nihil a sit minus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero voluptates quas iste molestiae odio aliquam. Illum soluta error repellat quo iusto culpa, eaque dolorum delectus, nihil a sit minus!</p>
                    
                </div>
                <div className="col-md-4">
                    <img src={sora3} alt=""/>
                    <h4>Lorem, ipsum.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero voluptates quas iste molestiae odio aliquam. Illum soluta error repellat quo iusto culpa, eaque dolorum delectus, nihil a sit minus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero voluptates quas iste molestiae odio aliquam. Illum soluta error repellat quo iusto culpa, eaque dolorum delectus, nihil a sit minus!</p>
                     
                </div>
                <div className="col-md-4">
                    <img src={sora4} alt=""/>
                    <h4>Lorem, ipsum.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero voluptates quas iste molestiae odio aliquam. Illum soluta error repellat quo iusto culpa, eaque dolorum delectus, nihil a sit minus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero voluptates quas iste molestiae odio aliquam. Illum soluta error repellat quo iusto culpa, eaque dolorum delectus, nihil a sit minus!</p>
                     
                </div>
            </div>

        </div>
    </div>

</div> 
 */}

