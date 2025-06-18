export const renderCryptoItem = (cryptoCurrency) => {
  return `<li class="crypto__item">
            <div class="crypto__inner">
              <div class="crypto__content crypto__content--front">
                <img
                  width="100"
                  height="100"
                  alt="${cryptoCurrency.name} Логотип"
                  src="${cryptoCurrency.image}"
                />
              </div>
              <div class="crypto__content crypto__content--back">
                <div class="crypto__image-wrapper">
                  <img
                    width="80"
                    height="80"
                    alt="${cryptoCurrency.name} Логотип"
                    src="${cryptoCurrency.image}"
                  />
                </div>
                <div class="crypto__more">
                  <button
                    type="button"
                    class="btn btn--secondary crypto__more__btn"
                    data-crypto='${JSON.stringify(cryptoCurrency)}'
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </li>`;
};

export const renderCryptoDot = () => {
  return `<li>
          <button class="btn crypto__dot"></button>
        </li>`;
};

export const renderModal = (cryptoCurrency) => {
  return `<button type="button" class="btn modal__btn">
            <img
              src="./assets/images/icons/close-icon.svg"
              alt="Иконка крестика"
            />
          </button>
          <div class="modal__iframe">
            <iframe
              title="${cryptoCurrency.name}"
              frameborder="0"
              src="${cryptoCurrency.threeD}"
            >
            </iframe>
          </div>
          <div class="modal__content">
            <div class="modal__header">
              <h2 class="modal__title text--shadow">${cryptoCurrency.name}</h2>
              <p class="modal__price">
                Цена: <span class="text--secondary">${cryptoCurrency.price} $</span>
              </p>
            </div>
            <p class="modal__capitalization">
              Капитализация:
              <span class="text--secondary">${cryptoCurrency.marketCap} $</span>
            </p>
            <p class="modal__description">
              ${cryptoCurrency.description}
            </p>
            <a href="${cryptoCurrency.moreInformation}" class="modal__link" target="_blank"
              >Более подробная информация о криптоактиве</a>
          </div>`;
};
