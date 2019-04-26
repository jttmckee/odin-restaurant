/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: contactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactPage", function() { return contactPage; });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");

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
        Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["setActiveButton"])("contact");
}




/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: setActiveButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveButton", function() { return setActiveButton; });

function setActiveButton(buttonClassName) {
  let actives = Array.from(document.getElementsByClassName("active-button"));
  actives.forEach( (active) => active.classList.remove("active-button"))
  document.getElementById(buttonClassName).classList.add("active-button")
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: homePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePage", function() { return homePage; });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");


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
  Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["setActiveButton"])("home");
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _story_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story.js */ "./src/story.js");






function tabClick(event) {
  console.log("clicked");
  switch(event.target.id) {
    case "home":
      Object(_home_js__WEBPACK_IMPORTED_MODULE_0__["homePage"])();
      break;
    case "contact":
      Object(_contact_js__WEBPACK_IMPORTED_MODULE_1__["contactPage"])();
      break;
    case "menu":
      Object(_menu_js__WEBPACK_IMPORTED_MODULE_2__["menuPage"])();
      break;
    case "story":
      Object(_story_js__WEBPACK_IMPORTED_MODULE_3__["storyPage"])();
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
Object(_home_js__WEBPACK_IMPORTED_MODULE_0__["homePage"])();


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuPage", function() { return menuPage; });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");



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
 Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["setActiveButton"])("menu");
}



/***/ }),

/***/ "./src/story.js":
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
/*! exports provided: storyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storyPage", function() { return storyPage; });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");



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
 Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__["setActiveButton"])("story");
}



/***/ })

/******/ });
//# sourceMappingURL=main.js.map