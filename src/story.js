import {setActiveButton} from './helper.js'


function storyPage() {
 document.getElementById('content').innerHTML =
 `

   <article id="left-content">
     <div>
       <p>
        Jason's Virtual Restaurant (JVR) is a creation of Jason McKee for an
        <a href="https://www.theodinproject.com/courses/javascript/lessons/restaurant-page?ref=lnav">
        assignment</a> for <a href="https://www.theodinproject.com/home">The Odin Project</a>
      </p>
      <p>
        All are welcome to feast on our factory functions, or dine on our delicious domains.
        No code is too ugly here.
      </p>
      <p>
        On that note please remember this is a learning exercise for me so it's not neccessarily how I would design a production website.  This is just a bit of fun and great opportunity for some practice!
      </p>
     </div>
   </article>
 <figure>
   <img src="images/chairs.jpg" alt="Chairs" id="side-img">
   <figcaption>      Photo  from Pexels</figcaption>
 </figure>

     `;
 setActiveButton("story");
}
export {storyPage}
