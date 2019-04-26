
function setActiveButton(buttonClassName) {
  let actives = Array.from(document.getElementsByClassName("active-button"));
  actives.forEach( (active) => active.classList.remove("active-button"))
  document.getElementById(buttonClassName).classList.add("active-button")
}
export {setActiveButton}
