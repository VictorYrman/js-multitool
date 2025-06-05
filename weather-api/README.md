# Weather API на JavaScript (Выполнено ✅)

## 🛠 Технологический стек

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="40" alt="HTML5 Logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="40" alt="CSS3 Logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="40" alt="JavaScript Logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" height="40" width="40" alt="Webpack Logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="40" alt="Git Logo"/>
</div>

## 📝 О проекте

Веб-приложение для отображения текущей погоды с возможностью:

- Автоматического определения местоположения пользователя
- Поиска погоды в любом городе мира
- Переключения между градусами Цельсия и Фаренгейта
- Сохранения единицы измерения температуры в localStorage
- Примечание: использовалось бесплатное API, для более точных показателей используйте API Google или Yandex

## ✨ Основные особенности

### 🌍 Геолокация

- Определение местоположения через браузерное API
- Автоматическая загрузка погоды для текущего города
- Обработка ошибок при определении местоположения

### ☁️ Данные о погоде

- Интеграция с WeatherAPI.com
- Отображение текущей температуры, состояния и иконки погоды
- Поддержка русского языка для описания погоды
- Кеширование последнего запрошенного города

### ⚙️ Настройки

- Переключение между °C и °F
- Сохранение предпочтений температуры
- Валидация ввода города
- Лоадер во время загрузки данных

### 📱 Адаптивность

- Чистый минималистичный дизайн
- Корректное отображение на мобильных устройствах
- Удобное управление с touch-экранов

## 🚀 Технические детали

### API интеграции

- WeatherAPI для получения данных о погоде
- Nominatim (OpenStreetMap) для определения города по координатам
- Браузерное Geolocation API

### Архитектура

- Модульная структура кода (API, handlers, utils)
- Webpack для сборки проекта
- Babel для транспиляции JavaScript
- Dotenv для управления environment variables

### Оптимизации

- Минификация CSS и JS в production-сборке
- Копирование статических assets через Webpack
- Чистка выходной директории при каждой сборке

## 👨‍💻 Об авторе

**Victor Yrman (TheYrman)**

**Веб-разработчик**

<details> <summary>📫 Контакты</summary>
<img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" width="16" alt="Telegram"/> [Telegram](https://t.me/theyrman_development)

<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="16" alt="LinkedIn"/> [LinkedIn](https://www.linkedin.com/in/vitya-yrman-a83508264/)

📍 Брест, Беларусь

</details>
