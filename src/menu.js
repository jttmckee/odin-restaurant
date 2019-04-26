import {setActiveButton} from './helper.js'


function menuPage() {
 document.getElementById('content').innerHTML =
 `

     <article id="left-content">
     <div>
       <h2>Starters</h2>
       <ul>
        <li>Delicious Properties </li>
        <li>Yummy Variables </li>
        <li>Nice Constants </li>
       </ul>
       <h2>Main Courses</h2>
       <ul>
        <li>Filling Factory Functions </li>
        <li>Useful Objects </li>
        <li>Great Classes </li>
       </ul>
       <h2>Desserts</h2>
       <ul>
         <li>Sweet Returns</li>
         <li>Scrumptious Imports</li>
         <li>Selection of Types</li>
       </ul>
     </div>
     </article>
     <figure>
       <img src="images/appetizers.jpg" alt="Appetizers" id="side-img">
       <figcaption>      Photo  from Pexels</figcaption>
     </figure>

     `;
 setActiveButton("menu");
}
export {menuPage}
