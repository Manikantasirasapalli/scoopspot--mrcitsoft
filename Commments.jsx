import React from 'react'

const Commments = () => {
  return (
    <div class="comment-cont">
      <h2 class="related">Comments</h2>
        <div class="comment-container">
          <div class="comment">
            <img  class="profile-image" src="https://www.skymetweather.com/themes/skymet/images/gallery/toplists/10-Stunning-Images-of-Clouds/5.jpg" alt="Profile Image"></img>
            
            <div>
              <div class="author">
                John Doe<br/>
                <span class="date">11:50 am, 12-10-23 -Reply</span>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        <div class="comment">
          <img class="profile-image" src="https://th.bing.com/th/id/OIP.kZSJyUHpciDcLq5eOVHyuAAAAA?w=450&h=372&rs=1&pid=ImgDetMain" alt="Profile Image"></img>
          <div>
            <div class="author">
              Jane Smith<br/>
              <span class="date">11:50 am, 12-10-23 -Reply</span>
            </div>
            <div class="content">
              Nullam nec justo eu purus luctus vestibulum.
            </div>
          </div>
        </div>
        <div class="comment reply-comment">
          <img class="profile-image" src="https://www.skymetweather.com/themes/skymet/images/gallery/toplists/10-Stunning-Images-of-Clouds/5.jpg" alt="Profile Image"></img>
          <div>
            <div class="author">
            John Doe<br/>
            </div>
            <div class="content">
               justo eu purus luctus vestibulum Nullam nec.
            </div>
            <span class="date">11:50 am, 12-10-23 -Reply</span>
          </div>
        </div>
        <div class="comment">
          <img class="profile-image" src="https://th.bing.com/th/id/OIP.uFr5GPLoivq0Izb1kE7dkgHaE8?w=1024&h=683&rs=1&pid=ImgDetMain" alt="Profile Image"></img>
          <div>
            <div class="author">
              Rock Smith<br/>
              <span class="date">11:50 am, 12-10-23 -Reply</span>
            </div>
            <div class="content">
            luctus vestibulum Nullam nec justo eu purus sit amet.
            </div>
          </div>
        </div>


      <div class="post-comment d-flex flex-row justify-content-left">
        <div class="">
          <h6>leave a reply:<br/><span class="sub">Your email will not be published.</span></h6>
          <textarea></textarea>
          <button class="post">Post comment</button>
        </div>
        
      </div>



      </div>
    </div>
  )
}

export default Commments