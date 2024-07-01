import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Card_container = () => {
  return (
    <div class="card-cont">
      <div id="cssportal-grid">
        <div id="div1">
          <div class="d-flex flex-row justify-content-start">
            <img src="https://th.bing.com/th/id/OIGP.d_CQZ6QWEcYtMM23z_8p?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" class="profile-icon"></img>
            <div class="d-flex flex-column">
              <h3 class="profile-name">Alex Robert</h3>
              <p class="role">--X Blog creator</p>
            </div>
          </div>
        </div>
      
        <div id="div2">
          <img src="https://livingnomads.com/wp-content/uploads/2017/09/26/Meiji-jingu-Gaien-park-ginkgo-trees-leaves-autumn-tokyo-23.jpg" class="img-cont"></img>
        </div>
       
        <div class="para-layout" id="div3">
          <p class="para"> “Lifestyle encompasses the daily choices, habits, and preferences that shape our existence. From fashion and travel to health and hobbies, our lifestyle reflects who we are.
          It's about finding balance, embracing joy, and creating meaningful experiences. Whether you’re a foodie exploring new cuisines or an adventurer seeking hidden gems,
          lifestyle is the canvas on which we paint our unique stories.”</p>

          <p class="para">“Lifestyle encompasses the daily choices, habits, and preferences that shape our existence. From fashion and travel to health and hobbies, our lifestyle reflects who we are.
          It's about finding balance, embracing joy, and creating meaningful experiences. Whether you’re a foodie exploring new cuisines or an adventurer seeking hidden gems,
          lifestyle is the canvas on which we paint our unique stories.”</p>

          <p class="para">“Lifestyle encompasses the daily choices, habits, and preferences that shape our existence. From fashion and travel to health and hobbies, our lifestyle reflects who we are.
          It's about finding balance, embracing joy, and creating meaningful experiences. Whether you’re a foodie exploring new cuisines or an adventurer seeking hidden gems,
          lifestyle is the canvas on which we paint our unique stories.”</p>
        </div>

        <div id="div4">
          <h2 class="related">Related posts</h2>
          <div class="d-flex flex-row">
            <div class="related-cont">
              <img src="https://d3e1m60ptf1oym.cloudfront.net/92436bbd-88b9-48a8-b8c0-390d199fd201/IMG_7232-Edit_xlarge.jpg" class="recents-img" ></img>
              <p class="recents-title">Duis autem vel eum iriure dolor in hendrerit in vulputate</p>
            </div>
            <div class="related-cont">
              <img src="https://d3e1m60ptf1oym.cloudfront.net/92436bbd-88b9-48a8-b8c0-390d199fd201/IMG_7232-Edit_xlarge.jpg"class="recents-img"></img>
              <p class="recents-title">Duis autem vel eum iriure dolor in hendrerit in vulputate</p>
            </div>
            <div class="related-cont">
              <img src="https://d3e1m60ptf1oym.cloudfront.net/92436bbd-88b9-48a8-b8c0-390d199fd201/IMG_7232-Edit_xlarge.jpg" class="recents-img"></img>
              <p class="recents-title">Duis autem vel eum iriure dolor in hendrerit in vulputate</p>
            </div>
            <div class="related-cont">
              <img src="https://d3e1m60ptf1oym.cloudfront.net/92436bbd-88b9-48a8-b8c0-390d199fd201/IMG_7232-Edit_xlarge.jpg" class="recents-img"></img>
              <p class="recents-title">Duis autem vel eum iriure dolor in hendrerit in vulputate</p>
            </div>
            <div class="related-cont">
              <img src="https://d3e1m60ptf1oym.cloudfront.net/92436bbd-88b9-48a8-b8c0-390d199fd201/IMG_7232-Edit_xlarge.jpg" class="recents-img"></img>
              <p class="recents-title">Duis autem vel eum iriure dolor in hendrerit in vulputate</p>
            </div>
          </div>
        </div>


      <div id="div5">
        <div class="social">
          <button href="#" class="social-btns"><FaFacebook /></button>
          <button href="#" class="social-btns"><FaTwitter /></button>
          <button href="#" class="social-btns"><FaInstagram /></button>
          <button href="#" class="social-btns"><FaLinkedin /></button>
        </div>
      </div>
      
    </div>
    
    </div>
  )
}

export default Card_container

