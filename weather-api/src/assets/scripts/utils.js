let temperature = { temp_c: 0, temp_f: 0 };

export const getTemperature = (data) => {
  temperature.temp_c = data.current.temp_c;
  temperature.temp_f = data.current.temp_f;

  if (document.querySelector("#isFahrenheit").checked) {
    return `${temperature.temp_f} °F`;
  } else {
    return `${temperature.temp_c} °C`;
  }
};

export const deleteLoader = () => {
  document.querySelector("#loader").style.display = "none";
};

export const insertLoader = () => {
  document.querySelector("#loader").style.display = "flex";
};

export const appearCardDescription = () => {
  document.querySelector(".card__description").style.visibility = "visible";
};

export const hideCardDescription = () => {
  document.querySelector(".card__description").style.visibility = "hidden";
};

export const setTemperature = () => {
  if (document.querySelector("#isFahrenheit").checked) {
    document.querySelector(
      ".card__paragraph--temperature"
    ).textContent = `${temperature.temp_f} °F`;
  } else {
    document.querySelector(
      ".card__paragraph--temperature"
    ).textContent = `${temperature.temp_c} °C`;
  }
};

export const setCardDescription = (data, city) => {
  document.querySelector(".card__image").src = data.current.condition.icon;
  document.querySelector(".card__paragraph--city").textContent = city;
  document.querySelector(".card__paragraph--temperature").textContent =
    getTemperature(data);
  document.querySelector(".card__paragraph--weather").textContent =
    data.current.condition.text;
};
