const searchBox = document.getElementById("myInput");
const btn = document.getElementById("btn");

function cheackWeather(city) {
  let display = document.querySelector(".city-name");
  display.innerHTML = city;
  display.style.color = "red";
}

btn.addEventListener("click", () => {
  cheackWeather("Sorry Sir ");
});
