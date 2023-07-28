import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className='footer-link d-flex flex-column'>
                <address className='text-white fs-6'>
                  Hno: 126 Nguyen Van Thuong, P25,<br />
                  Binh Thanh Ditrict, HCM <br />
                  Pincode: 100000
                </address>
                <a href="tel:+84969086400" className="mb-3 text-white">+84 969086400</a>
                <a href="mailto:4000mneh@gmail.com" className="mb-2 text-white">4000mneh@gmail.com</a>
                <div className="social_icons d-flex align-items-center gap-2">
                  <a className="text-white" href=""><BsGithub className="fs-4" /></a>
                  <a className="text-white" href=""><BsFacebook className='fs-4' /></a>
                  <a className="text-white" href=""><BsInstagram className='fs-4' /></a>
                  <a className="text-white" href=""><BsYoutube className='fs-4' /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h4 className="text-white mb-4">Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h4 className="text-white mb-4">Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Fact</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Wishkey</Link>
                <Link className="text-white py-2 mb-1">Cognac</Link>
                <Link className="text-white py-2 mb-1">Gin</Link>
                <Link className="text-white py-2 mb-1">Sherry</Link>
                <Link className="text-white py-2 mb-1">Chivas</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Digitic by Nguyen Quoc Truong</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
