function showPlaces() {
  alert("Start by yourself and have fun!");
}
/**
 * This function finds out where the person using the computer is located. It does this by asking the computer's web browser for its location and then running a function called searchLocation with that information.
 * @param {click} event a click form the button "Your current location".
 * Used the method preventDefault (click) that cancels the event if it is cancelable,so the default action that belongs to the event will not occur.
 * To get the current location of a device I used the navigator.geolocation, a property that returns a Geolocation object that gives Web content access to the location of that device and then called the function searchLocation to get the coordinates.
 *  It then asks the browser for the user's location and puts the result into searchLocation.
 */
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPlaces);
}
/**
 * We need to give permission to our computer or nphone to use our location in order for this code to work. Once we have allowed that, the code uses the information about our location to find out the temperature and display it on the screen.
 * @param {number} position based on the latitude and longitude.
 * Used Axios, it has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
 * I used the AJAX technique to this web application be able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.
 *Used the method get().then() to be abble to display the temperature based on the coordinates.
 */
function searchLocation(position) {
  let apikey = "8161b4309ee03faae957729ba7104797";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}&units=metric`;
  axios.get(apiUrl).then(showPlaces);
}
let searchButton = document.querySelector("#input-city");
searchButton.addEventListener("click", getCurrentLocation);

function changeTheme() {
  let body = document.querySelector("body");

  // body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);
