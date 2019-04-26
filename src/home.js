import {setActiveButton} from './helper.js'

 function homePage() {
  document.getElementById('content').innerHTML =
  `
      <article id="left-content">
        <div>
          <p>Yummy fake food only at Jason's Virtual Restaurant (aka JVR)!  All you can eat, any food variety.  Since it's not real it never runs out! </p>
          <p> For service simply write <code>Waiter.call()</code></p>
          <p> To choose your food  <code>import FOOD_NAME from 'JVR'</code>.
          Where FOOD_NAME is the name of the food that you would like to eat. </p>
        </div>
      </article>
      <figure>
        <img src="images/bar.jpg" alt="Empty bar" id="side-img">
        <figcaption>      Photo by Pixabay from Pexels</figcaption>
      </figure>

      `;
  setActiveButton("home");
}
export {homePage}
