import {
  deleteLoader,
  appearCardDescription,
  setCardDescription,
  hideCardDescription,
  insertLoader,
  setTemperature,
} from "./utils.js";
import { getWeatherData } from "./api.js";

export const initHandlers = (city) => {
  document.querySelector("#findWeather").addEventListener("click", async () => {
    city = document.querySelector("#city").value.trim();

    if (!city) {
      alert("Введите название города");
      return;
    }

    insertLoader();
    hideCardDescription();

    const weatherData = await getWeatherData(city);

    if (weatherData) {
      deleteLoader();
      appearCardDescription();
      setCardDescription(weatherData, city);
    }
  });

  document.querySelector("#isFahrenheit").addEventListener("change", () => {
    if (city) {
      localStorage.setItem(
        "isFahrenheit",
        document.querySelector("#isFahrenheit").checked
      );
      setTemperature();
    }
  });
};
