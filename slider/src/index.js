import "./assets/styles/normalize.css";
import "./assets/styles/style.css";

import { cryptoCurrenciesJSON } from "./assets/scripts/cryptoJSON.js";
import { getCryptoData } from "./assets/scripts/api.js";
import { implementAmount } from "./assets/scripts/helpers.js";
import {
  renderCryptoItem,
  renderCryptoDot,
  renderModal,
} from "./assets/scripts/renders.js";

const cryptoCurrencies = JSON.parse(cryptoCurrenciesJSON);

const cryptoList = document.querySelector(".crypto__list");
const cryptoDotsList = document.querySelector(".crypto__dots");
const cryptoBtnLeft = document.querySelector(".crypto__btn--left");
const cryptoBtnRight = document.querySelector(".crypto__btn--right");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");

let initialIndex = 0;
let amount = implementAmount();
let touchStartX = 0;
let touchEndX = 0;

const renderCryptoList = () => {
  const visibleItems = cryptoCurrencies.slice(
    initialIndex,
    initialIndex + amount
  );

  cryptoList.classList.add("crypto__list--fade");

  cryptoList.innerHTML = visibleItems
    .map((crypto) => renderCryptoItem(crypto))
    .join("");

  setTimeout(() => {
    cryptoList.classList.remove("crypto__list--fade");
  }, 500);

  document.querySelectorAll(".crypto__more__btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const cryptoCurrency = JSON.parse(btn.dataset.crypto);

      modal.classList.add("modal--active");

      const { price, marketCap } = await getCryptoData(cryptoCurrency.coinId);
      cryptoCurrency.price = price;
      cryptoCurrency.marketCap = marketCap;

      modalContainer.innerHTML = renderModal(cryptoCurrency);

      document.querySelector(".modal__btn").addEventListener("click", () => {
        modal.classList.remove("modal--active");
      });
    });
  });
};

const renderCryptoDotsList = () => {
  cryptoDotsList.innerHTML = "";
  const dotCount = Math.max(1, cryptoCurrencies.length - amount + 1);

  for (let i = 0; i < dotCount; i++) {
    cryptoDotsList.insertAdjacentHTML("beforeend", renderCryptoDot());

    const cryptoDotBtn =
      cryptoDotsList.lastElementChild.querySelector(".crypto__dot");

    cryptoDotBtn.addEventListener("click", () => {
      initialIndex = i;
      renderCryptoList();
      updateDotsAndArrows();
    });
  }

  updateDotsAndArrows();
};

const updateDotsAndArrows = () => {
  document.querySelectorAll(".crypto__dot").forEach((btn, index) => {
    btn.classList.toggle("crypto__dot--active", index === initialIndex);
  });

  cryptoBtnLeft.toggleAttribute("disabled", initialIndex === 0);
  cryptoBtnRight.toggleAttribute(
    "disabled",
    initialIndex + amount >= cryptoCurrencies.length
  );

  cryptoBtnLeft.children[0].src =
    initialIndex === 0
      ? "./assets/images/icons/arrow-right-white.svg"
      : "./assets/images/icons/arrow-right.svg";

  cryptoBtnRight.children[0].src =
    initialIndex + amount >= cryptoCurrencies.length
      ? "./assets/images/icons/arrow-right-white.svg"
      : "./assets/images/icons/arrow-right.svg";
};

renderCryptoList();
renderCryptoDotsList();

cryptoBtnLeft.setAttribute("disabled", "true");

cryptoBtnLeft.addEventListener("click", () => {
  if (initialIndex === 0) return;

  initialIndex--;
  renderCryptoList();
  updateDotsAndArrows();
});

cryptoBtnRight.addEventListener("click", () => {
  if (initialIndex + amount >= cryptoCurrencies.length) return;

  initialIndex++;
  renderCryptoList();
  updateDotsAndArrows();
});

cryptoList.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

cryptoList.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
});

const handleSwipe = () => {
  if (
    touchEndX < touchStartX &&
    initialIndex + amount < cryptoCurrencies.length
  ) {
    initialIndex++;
    renderCryptoList();
    updateDotsAndArrows();
  }

  if (touchEndX > touchStartX && initialIndex > 0) {
    initialIndex--;
    renderCryptoList();
    updateDotsAndArrows();
  }
};

// Media JS

window.addEventListener("resize", () => {
  const newAmount = implementAmount();

  if (newAmount !== amount) {
    amount = newAmount;
    initialIndex = Math.min(initialIndex, cryptoCurrencies.length - amount);
  }

  renderCryptoDotsList();
  updateDotsAndArrows();
});
