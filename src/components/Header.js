import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-8 col-sm-12'>
              <p className='text-white mb-0'>Free ship - Free Returns</p>
            </div>
            <div className='col-lg-6 col-md-4 col-sm-12 text-end'>
              <p className='text-white mb-0'>
                Hotline: <a className='text-white ' href='tel:+84969086400'>+84 969086400</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-2 col-md-3 col-6'>
              <h2>
                <Link className='text-white' to='/'>WhineShop</Link>
              </h2>
            </div>
            <div className='col-lg-5 col-md-6 col-6'>
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2"><BsSearch className='fs-4' /></span>
              </div>
            </div>
            <div className='col-lg-5 col-md-3 col-12'>
              <div className='header-upper-links d-flex align-items-center justify-content-end'>
                <div className='d-flex align-items-center gap-2 text-white'>
                  <img src="/images/compare2.png" alt="compare" />
                  <p className='mb-0'>
                    Compare <br /> Products
                  </p>
                </div>
                <div className='d-flex align-items-center gap-2 text-white'>
                  <img src="/images/heart.png" alt="wishlist" />
                  <p className='mb-0'>
                    Favourite <br /> Wishlist
                  </p>
                </div>
                <div className='d-flex align-items-center gap-2 text-white'>
                  <img src="/images/user1.png" alt="user" />
                  <p className='mb-0'>
                    Login <br /> My Account
                  </p>
                </div>
                <div className='d-flex align-items-center gap-2 text-white'>
                  <img src="/images/cart.png" alt="cart" />
                  <div className='d-flex flex-column gap-2'>
                    <span className='badge bg-white text-dark'>0</span>
                    <p className='mb-0'>$0.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-3'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='images/menu.jpg' alt='' />
                      <span className='me-2 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">ALL Product</Link></li>
                      <li><Link className="dropdown-item text-white" to="">New Product</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                  <div className='menu-links'>
                    <div className='d-flex align-items-center gap-15 center'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to=''>Store</NavLink>
                    <NavLink to=''>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
