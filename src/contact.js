import {setActiveButton} from './helper.js'
let contactPage = () => {
  document.getElementById('content').innerHTML =

  `
    <article id="left-content">
    <div>

    <p>A real contact page would have some contacts, or a way of contacting the restaurant.
    Perhaps an address, phone number and email. </p>
    <p> But this isn't a real restaurant.  It's Jason's Virtual Restaurant!</p>
    <p> Still we can have a nice form!  Rounded edges to the inputs, carefully laid out and nicely centered on the page.  What more could you ask for?</p>
    </div>
    <form class="contact-form" >
      <label for="name">Name:
      <input type="text" name="name" value="">
      </label>
      <label for="email">Email:
      <input type="email" name="email" value="">
      </label>
      <textarea name="info" rows="8" cols="60"
        placeholder="Tell us what you want to say..."></textarea>
        <button type ="button" class = "submit-btn">Submit</button>
    </form>
    </article>
  <figure>
    <img src="images/chairs.jpg" alt="Chairs" id="side-img">
    <figcaption>      Photo  from Pexels</figcaption>
  </figure>

        `;
        setActiveButton("contact");
}

export {contactPage} ;
