# Pomodoro Таймер 🍅 (В процессе ⏳)

## 🛠 Технологический стек

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="40" alt="HTML5 Logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="40" alt="CSS3 Logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="40" alt="JavaScript Logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" height="40" width="40" alt="Webpack Logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="40" alt="Git Logo"/>
</div>

## 📝 О проекте

Таймер Pomodoro с функциями:

- Таймер работы (25 минут по умолчанию)
- Короткие перерывы (5 минут)
- Длинные перерывы (15 минут)
- Настраиваемые интервалы времени
- Автоматический переход между этапами
- Прогресс-бар сессии
- Поддержка PWA (установка на устройство)

## ✨ Основные особенности

### 🎨 Дизайн и анимации

- Три цветовые темы для разных этапов
- Плавные переходы между состояниями
- Анимация прогресс-бара
- Адаптивная цветовая схема

### ⏱️ Функциональность таймера

- Точный отсчет времени
- Управление (старт/пауза/пропуск)
- Автозапуск следующих этапов
- Звуковые уведомления
- Счетчик выполненных помодоро

### ⚙️ Настройки

- Изменение длительности этапов
- Включение/отключение автозапуска
- Интуитивный интерфейс настроек

### 📱 PWA и адаптивность

- Установка как standalone приложение
- Работа в оффлайн-режиме
- Адаптивный дизайн для всех устройств
- Поддержка touch-управления

## � Технические детали

### Архитектура

- Модульная структура (ES6 модули)
- Чистая бизнес-логика
- Разделение ответственности:
  - `timer.js` - логика таймера
  - `theme.js` - управление темами
  - `progress.js` - прогресс-бар
  - `modal.js` - окно настроек
  - `counter.js` - счетчик сессий

### PWA реализация

- Service Worker для оффлайн работы
- Web App Manifest
- Кэширование ресурсов
- Обновление кэша

### Производительность

- Оптимизированные анимации
- Эффективное обновление DOM
- Минимальные перерисовки

## 🧩 Компоненты интерфейса

### Основной экран

- Таймер с крупным отображением времени
- Кнопки выбора этапа (работа/перерыв)
- Основная кнопка управления (старт/пауза)
- Кнопка пропуска этапа
- Прогресс-бар сессии
- Счетчик выполненных сессий

### Модальное окно настроек

- Настройка длительности каждого этапа
- Переключатели автозапуска
- Валидация ввода

## 👨‍💻 Об авторе

**Victor Yrman (TheYrman)**

**Веб-разработчик**

<details> <summary>📫 Контакты</summary>
<img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" width="16" alt="Telegram"/> [Telegram](https://t.me/theyrman_development)

<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="16" alt="LinkedIn"/> [LinkedIn](https://www.linkedin.com/in/vitya-yrman-a83508264/)

📍 Брест, Беларусь

</details>
