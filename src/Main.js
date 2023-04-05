function Main () {
    return (
      <div>
         <div className="haeder">
       <header className="header">
    </header>

    </div>

    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Прокат велосипедов</h1>
        <p className="hero-descr">Добро пожаловать в&nbsp;нашу службу проката велосипедов.<br/>
          Мы&nbsp;предлагаем разнообразные высококачественные<br/> велосипеды
          в&nbsp;аренду по&nbsp;доступным ценам.
        </p>
      </div>
      
    </div>
    <div className="services">
      <div className="container">
        <h2 className="site-title services-title">
          Наши услуги
        </h2>
        <ul className="services-list list-reset">
          <li className="services-item">
            <h3 className="services-subtitle">Прокат велосипедов</h3>
            <p className="services-descr">
              Мы&nbsp;предлагаем широкий выбор велосипедов на&nbsp;выбор, включая дорожные велосипеды, горные велосипеды и&nbsp;городские велосипеды. Все наши велосипеды находятся в&nbsp;хорошем состоянии и&nbsp;поставляются со&nbsp;шлемами и&nbsp;велосипедными замками.
            </p>
          </li>
          <li className="services-item">
            <h3 className="services-subtitle">Велосипедные туры</h3>
            <p className="services-descr">
              Познакомьтесь с&nbsp;городом по-новому с&nbsp;помощью одного из&nbsp;наших велосипедных туров. Наши туры под руководством опытных гидов проведут вас через лучшие достопримечательности и&nbsp;скрытые жемчужины города.
            </p>
            
          </li>
          <li className="services-item">
            <h3 className="services-subtitle">Ремонт велосипедов</h3>
            <p className="services-descr">
              Если ваш велосипед нуждается в&nbsp;ремонте или техническом обслуживании, наши опытные механики могут помочь. Мы&nbsp;предлагаем широкий спектр услуг от&nbsp;базовой настройки до&nbsp;капитального ремонта велосипеда.
            </p> 
          </li>
          <li className="services-item">
            <h3 className="services-subtitle">Сообщите нам о&nbsp;краже</h3>
            <p className="services-descr">
              Если вы&nbsp;стали свидетелем кражи наших велосипедов, вы&nbsp;можете сообщить нам об&nbsp;этом.
            </p>
            <a href="list.html" className="hero-link link">сообщить о краже</a> 
          </li>
        </ul>

       </div>

      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-top">
             <div className="footer-contacts-item">
               <span className="footer-contacts-text">Phone</span>
                <a href="tel:+3257291648" className="footer-contacts-value">+32 57 29 16 48</a>
        </div>
        <div className="footer-contacts-item">
          <span className="footer-contacts-text">Address</span>
          <address className="footer-contacts-value">Ufa, Oktyabrya Ave. 36</address>
        </div>
      </div>
      <div className="footer-bottom">
        <a className="logo">
        <img width={50} height={50}  src="./img/logo.jpg" alt="Bike" />
        </a>
        <small className="copyright">Copyright © Bicycle Rental Service 2023.</small>
      </div>

    </div>

   </div>
    
     
     </div>   
    );
  };
  
  export default Main;