import {homePage} from "./home.js";
import {contactPage} from './contact.js';
import {menuPage} from './menu.js';
import {storyPage} from './story.js';


function tabClick(event) {
  console.log("clicked");
  switch(event.target.id) {
    case "home":
      homePage();
      break;
    case "contact":
      contactPage();
      break;
    case "menu":
      menuPage();
      break;
    case "story":
      storyPage();
      break;
    default:
      console.log(`Error page ${event.target.id}`)
  }
};

let tabs = Array.from(document.getElementsByClassName("tab"));
console.log("Tabs " +tabs)
tabs.forEach((tab) => { tab.addEventListener("click", tabClick);
  console.log("tabClick added")
});
homePage();
