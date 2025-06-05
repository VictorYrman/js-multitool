import "./assets/styles/normalize.css";
import "./assets/styles/style.css";

import {
  appearCardDescription,
  deleteLoader,
  setCardDescription,
} from "./assets/scripts/utils.js";
import { getWeatherData } from "./assets/scripts/api.js";
import { getLocation } from "./assets/scripts/geo.js";
import { initHandlers } from "./assets/scripts/handlers.js";

let myLatitude, myLongitude;
let city;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    document.querySelector("#isFahrenheit").checked =
      localStorage.getItem("isFahrenheit") === "false" ? false : true;

    const data = await getLocation();
    [myLatitude, myLongitude] = [data.latitude, data.longitude];

    const cityResponse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${myLatitude}&lon=${myLongitude}&accept-language=ru`
    );

    if (!cityResponse.ok) {
      throw new Error(`Ошибка HTTP: ${cityResponse.status}`);
    }

    const cityData = await cityResponse.json();
    city =
      cityData.address.city ||
      cityData.address.town ||
      cityData.address.village;

    if (!city) {
      throw new Error("Не удалось определить город");
    }

    deleteLoader();
    appearCardDescription();

    document.querySelector("#city").value = city;

    const weatherData = await getWeatherData(city);

    if (weatherData) {
      setCardDescription(weatherData, city);
    }

    initHandlers(city);
  } catch (error) {
    console.error("Ошибка инициализации:", error);
    alert("Не удалось получить данные о местоположении!");
  }
});
