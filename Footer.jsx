import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div class="footer-cont d-flex flex-column">
      <p class="foot">&copy; 2024 ScoopSpot.com</p>
      <div id="div5">
        <div class="">
          <button href="#" class="foot-social"><FaFacebook /></button>
          <button href="#" class="foot-social"><FaTwitter /></button>
          <button href="#" class="foot-social"><FaInstagram /></button>
          <button href="#" class="foot-social"><FaLinkedin /></button>
        </div>
      </div>
    </div>
  )
}

export default Footer