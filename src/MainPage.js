import MOOD from './img/MOOD.png';
import logo from './img/Logo-icon.svg';
import tg_logo from './img/Telegram App.svg';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TelegramLoginButton from 'react-telegram-login';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    };
  
      return (
        <header className="header">
              <div className="container header-container">
                  <div className="logo">
                      <a href="index.html" className="logo-link">
                          <img src={logo} alt="logo" className="logo-img" />
                          <p className="logo-text">Mood</p>
                      </a>
                  </div>
                  <nav className="nav">
                      <div className="menu">
                          <a href="#work" className="menu-item">Как это работает</a>
                          <a href="#conf" className="menu-item">Конфиденциальность</a>
                          <a href="#about" className="menu-item">О нас</a>
                      </div>
                  </nav>
                  <button className="btn" onClick={openModal}>Бамб -&gt;</button>
                  {isModalOpen && (
                    <div className="modal" onClick={handleClickOutside}>
                      <div className="modal-conf-content">
                          <span className="close" onClick={closeModal}>&times;</span>
                          <h2 className="modal-conf-title">АВТОРИЗАЦИЯ</h2>
                          <div className="modal-conf-item">
                              <input className="checkbox" type="checkbox" />
                              <p className="modal-conf-text">Я согласен(на) на обработку предоставленных мной персональных данных в соответствии с политикой конфиденциальности сайта.</p>
                          </div>
                          <button className="modal-conf-btn" onClick={() => {
                                const url = 'https://t.me/Mood_auth_bot?start=auth';
                                window.location.href = url;
                              }}>Войти</button>
                      </div>
                  </div>
                )}
              </div>
          </header>
      )
  }
  
  const MoodText = () => {
    return (
      <div className="banner">
        <div className="container banner-container">
          <div className="banner-title">
              <img className="banner-title-text" src={MOOD} />
              <p className="banner-text-left">Используйте наш ИИ для анализа сообщений и сделайте общение более глубоким и искренним.</p>
              <p className="banner-text-right">Просто нажмите на кнопку "Бамб", чтобы мгновенно получить анализ настроения вашего друга</p>
          </div>
        </div>
      </div>
    )
  }
  
  const MainText = () => {
    const handleTelegramResponse = (response) => {
        console.log(response);
    }


    return( 
      <div className="work" id="work">
        <TelegramLoginButton dataOnAuth={handleTelegramResponse} botName="Mood_auth_bot" />
                  <div className="container work-container">
                      <h2 className="work-title">Как это работает</h2>
                      <div className="work-content">
                          <div className="work-item">
                              <p className="work-item-title">1. Авторизация через Telegram</p>
                              <p className="work-item-text">Для начала вам нужно авторизоваться с помощью вашего аккаунта Telegram.</p>
                          </div>
                          <div className="work-item">
                              <p className="work-item-title">2. Пригласите друга</p>
                              <p className="work-item-text">Поделитесь ссылкой на наш сервис с друзьями, чтобы они тоже могли воспользоваться всеми преимуществами.</p>
                          </div>
                          <div className="work-item">
                              <p className="work-item-title">3. Согласие на обработку данных</p>
                              <p className="work-item-text">Для того чтобы использовать наш сервис, необходимо дать согласие двух сторон на обработку ваших данных.</p>
                          </div>
                          <div className="work-item">
                              <p className="work-item-title">4. Искусственный интеллект</p>
                              <p className="work-item-text">Теперь вам доступен искусственный интеллект, который анализирует настроение вашего друга.  Также ИИ предлагает дополнительные функции, такие как подробный анализ настроения и подбор фильмов на основе эмоций.</p>
                          </div>
                          <div className="work-item">
                              <p className="work-item-title">5. Подробный анализ настроения</p>
                              <p className="work-item-text">Чтобы увидеть подробный анализ настроения вашего друга, нажмите на эмодзи рядом с его иконкой на дашборде. В модальном окне отобразится информация о текущем настроении и рекомендациях по фильмам.</p>
                          </div>
                      </div>
                  </div>
              </div>
    )
  }
  
  const ConfMainPage = () => {
    return (
      <div className="conf" id="conf">
        <div className="container conf-container">
          <h2 className="conf-title">Конфиденциальность</h2>
          <p className="conf-text">
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
    <div className="about" id="about">
      <div className="container about-container">
        <h2 className="about-title">О нас</h2>
        <p className="about-text">
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
      <footer className="footer">
              <div className="container footer-container">
                  <div className="logo">
                      <a href="index.html" className="logo-link">
                          <img src={logo} alt="logo" className="logo-img" />
                          <p className="logo-text">Mood</p>
                      </a>
                  </div>
                  <div className="footer-content">
                      <div className="footer-item">
                          <Link to="/use" className="footer-item-link">Условия пользования</Link>
                          <Link to="/conf" className="footer-item-link">Политика кофидинчиальности</Link>
                          <Link to="/cookies" className="footer-item-link">Управление файлами cookies</Link>
                      </div>
                  </div>
                  <div className="footer-social">
                      <img src={tg_logo} alt="#" className="social-img" />
                  </div>
              </div>
          </footer>
    )
  }
  
export default function MainPage () {
    return (
        <>
        <Header />
        <main>
            <MoodText />
            <MainText />
            <ConfMainPage />
            <About />
        </main>
        <Footer />
        </>
)
}
  