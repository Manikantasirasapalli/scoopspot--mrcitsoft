import React from 'react'
import {button} from 'react-bootstrap'
import { alignPropType } from 'react-bootstrap/esm/types'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Head_cont = () => {
  return (
    <div>
        <div class="head">
          <h3 class="logo"><span style={{color:'grey',}}>S</span>coop<span style={{color:'grey' }}>S</span>pot</h3>
          <div class="d-flex flex-column">
            <h1 class="title">BLOG HEADING</h1>     
            <p class="title-sub">blog detail page</p>      
          </div>

            <input type="checkbox" id="check"></input>
            <ul class="menu">
            <button class="home btn" href="index.html" >Home</button>
              <div class="dropdown">
                <a class="dropbtn">Categories</a>
                <div class="dropdown-content">
                  <a href="#">Art</a>
                  <a href="#">Music</a>
                  <a href="#">photography</a>
                  <a href="#">Sports</a>
                </div>
              </div>
              <a href="about">About</a>
              <a href="contact">Contact</a> 
              <label for="check" class="menu-btn close-menu"><CloseIcon /></label>
            </ul>
            <label for="check" class="menu-btn open-menu"><MenuIcon /></label>    
        </div>
    </div>
  )
}

export default Head_cont


