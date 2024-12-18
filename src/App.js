import './App.css';
import './style.css';
import MOOD from './img/MOOD.png'
import logo from './img/Logo-icon.svg'
import tg_logo from './img/Telegram App.svg'
import { useState } from 'react'

const ModalWindow = () => {
  return (
    <div id="myModal" class="modal">
                    <div class="modal-conf-content">
                        <span class="close">&times;</span>
                        <h2 class="modal-conf-title">АВТОРИЗАЦИЯ</h2>
                        <div class="modal-conf-item">
                            <input class="checkbox" id="checkbox" type="checkbox" />
                            <p class="modal-conf-text">Я согласен(на) на обработку предоставленных мной персональных данных в соответствии с политикой конфиденциальности сайта.</p>
                        </div>
                        <button id="telegramAuthBtn" class="modal-conf-btn">Войти</button>
                    </div>
                </div>
  )
}

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      console.log("bebra")
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <header class="header" id="header">
            <div class="container header-container">
                <div class="logo">
                    <a href="index.html" class="logo-link">
                        <img src={logo} alt="logo" class="logo-img" />
                        <p class="logo-text">Mood</p>
                    </a>
                </div>
                <nav class="nav">
                    <div class="menu">
                        <a href="#work" class="menu-item">Как это работает</a>
                        <a href="#conf" class="menu-item">Конфиденциальность</a>
                        <a href="#about" class="menu-item">О нас</a>
                    </div>
                </nav>
                <button class="btn" id="openModalBtn" onClick={openModal}>Бамб -&gt;</button>
                {isModalOpen && (<ModalWindow />)}
            </div>
        </header>
    )
}

const MoodText = () => {
  return (
    <div class="banner">
      <div class="container banner-container">
        <div class="banner-title">
            <img class="banner-title-text" src={MOOD} />
            <p class="banner-text-left">Используйте наш ИИ для анализа сообщений и сделайте общение более глубоким и искренним.</p>
            <p class="banner-text-right">Просто нажмите на кнопку "Бамб", чтобы мгновенно получить анализ настроения вашего друга</p>
        </div>
      </div>
    </div>
  )
}

const MainText = () => {
  return( 
    <div class="work" id="work">
                <div class="container work-container">
                    <h2 class="work-title">Как это работает</h2>
                    <div class="work-content">
                        <div class="work-item">
                            <p class="work-item-title">1. Авторизация через Telegram</p>
                            <p class="work-item-text">Для начала вам нужно авторизоваться с помощью вашего аккаунта Telegram.</p>
                        </div>
                        <div class="work-item">
                            <p class="work-item-title">2. Пригласите друга</p>
                            <p class="work-item-text">Поделитесь ссылкой на наш сервис с друзьями, чтобы они тоже могли воспользоваться всеми преимуществами.</p>
                        </div>
                        <div class="work-item">
                            <p class="work-item-title">3. Согласие на обработку данных</p>
                            <p class="work-item-text">Для того чтобы использовать наш сервис, необходимо дать согласие двух сторон на обработку ваших данных.</p>
                        </div>
                        <div class="work-item">
                            <p class="work-item-title">4. Искусственный интеллект</p>
                            <p class="work-item-text">Теперь вам доступен искусственный интеллект, который анализирует настроение вашего друга.  Также ИИ предлагает дополнительные функции, такие как подробный анализ настроения и подбор фильмов на основе эмоций.</p>
                        </div>
                        <div class="work-item">
                            <p class="work-item-title">5. Подробный анализ настроения</p>
                            <p class="work-item-text">Чтобы увидеть подробный анализ настроения вашего друга, нажмите на эмодзи рядом с его иконкой на дашборде. В модальном окне отобразится информация о текущем настроении и рекомендациях по фильмам.</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

const Conf = () => {
  return (
    <div class="conf" id="conf">
      <div class="container conf-container">
        <h2 class="conf-title">Конфиденциальность</h2>
        <p class="conf-text">
          Мы строго защищаем вашу конфиденциальность. Все данные, которые вы предоставляете, используются
          исключительно для улучшения работы сервиса и для того, чтобы наш искусственный интеллект мог
          предоставлять вам максимальные возможности. Ваши данные не передаются третьим сторонам без
          вашего
          согласия, и мы применяем современные методы защиты информации, чтобы гарантировать ее
          безопасность.
          Вы можете быть уверены, что ваши данные используются только для улучшения вашего опыта.
        </p>
      </div>
    </div>
  )
}

const About = () => {
  return (
  <div class="about" id="about">
    <div class="container about-container">
      <h2 class="about-title">О нас</h2>
      <p class="about-text">
        Мы — команда, которая создает инновационные решения на основе искусственного интеллекта, чтобы
        улучшить ваши общения. Наш сервис анализирует настроение вашего друга в чате Telegram, изучая
        его сообщения и предоставляя вам полезную информацию о его эмоциях. Это помогает лучше понять
        собеседника, улучшить общение и создавать более комфортную атмосферу для разговоров. Все
        работает прямо в вашем чате, быстро и удобно, без необходимости переходить на сторонние
        платформы.
      </p>
    </div>
  </div>
)
}

const Footer = () => {
  return (
    <footer class="footer">
            <div class="container footer-container">
                <div class="logo">
                    <a href="index.html" class="logo-link">
                        <img src={logo} alt="logo" class="logo-img" />
                        <p class="logo-text">Mood</p>
                    </a>
                </div>
                <div class="footer-content">
                    <div class="footer-item">
                        <a href="use.html" class="footer-item-link">Условия пользования</a>
                        <a href="conf.html" class="footer-item-link">Политика кофидинчиальности</a>
                        <a href="#" class="footer-item-link">Управление файлами cookies</a>
                    </div>
                </div>
                <div class="footer-social">
                    <img src={tg_logo} alt="#" class="social-img" />
                </div>
            </div>
        </footer>
  )
}

function MainPage() {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MOOD</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <Header />
        <main>
            <MoodText />
            <MainText />
            <Conf />
            <About />
        </main>
        <Footer />
    </body>
    </html>
  )
}
function App() {
  return(
    <MainPage />
  );
}


export default App;
