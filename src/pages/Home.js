import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import ProductList from '../hooks/ProductList'
import ProductListSale from '../hooks/ProductListSale'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="main-banner position-relative p-3">
                <img src="images/banner1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Candle Light</h5>
                  <p>From $800.00</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="small-banner-wrapper d-flex justify-content-between flex-wrap">
                <div className="small-banner position-relative p-3">
                  <img src="images/cognacbanner.png" className='img-fluid rounded-4' style={{height:204,width:290}} alt="cognac banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Cognac</h5>
                    <p>From $950.00</p>
                    <Link className='buttonCog'>BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img src="images/ginbanner1.jpg" className='img-fluid rounded-4' style={{height:204,width:290}} alt="gin banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>GIN</h5>
                    <p>From $950.00</p>
                    <Link className='buttonCog'>BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img src="images/tequilabanner.jpg" className='img-fluid rounded-4' style={{height:204,width:290}} alt="tequila banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Tequila</h5>
                    <p>From $950.00</p>
                    <Link className='buttonCog'>BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img src="images/vodkabanner.jpg" className='img-fluid rounded-4' style={{height:204,width:290}} alt="vodka banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Vodka</h5>
                    <p>From $950.00</p>
                    <Link className='buttonCog'>BUY NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex flex-wrap align-items-center justify-content-around">
                <div className="align-items-center gap-3 gap-md-4 flex-column text-center">
                  <img src="images/service.png" alt="Free Shipping" />
                  <h6>Free Shipping</h6>
                  <p>From all orders over $5</p>
                </div>
                <div className='align-items-center gap-3 gap-md-4 flex-column text-center'>
                  <img src="images/service-02.png" alt="Daily Surprise Offers" />
                  <h6>Daily Surprise Offers</h6>
                  <p>Save up to 25% off</p>
                </div>
                <div className='align-items-center gap-3 gap-md-4 flex-column text-center'>
                  <img src="images/service-03.png" alt="Support 24/7" />
                  <h6>Support 24/7</h6>
                  <p>Shop with an expert</p>
                </div>
                <div className='align-items-center gap-3 gap-md-4 flex-column text-center'>
                  <img src="images/service-04.png" alt="Affordable Prices" />
                  <h6>Affordable Prices</h6>
                  <p>Get Factory Default Price</p>
                </div>
                <div className='align-items-center gap-3 gap-md-4 flex-column text-center'>
                  <img src="images/service-05.png" alt="Secure Payments" />
                  <h6>Secure Payments</h6>
                  <p>100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee>
                  WELCOME TO WINE SHOP!!!
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductList />
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>BEST SALE</h3>
            </div>
            <ProductListSale />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
