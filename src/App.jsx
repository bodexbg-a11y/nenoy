import React, { useEffect, useState } from "react";
import { Phone, Send } from "lucide-react";

const phoneLabel = "+380 67 893 23 23";
const phoneHref = "tel:+380678932323";
const instagramHref =
  "https://www.instagram.com/nenoy_rec?igsh=ZjVkcXU3MWo3enNz&utm_source=qr";
const telegramHref = "https://t.me/NeNoy_Music";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const services = [
  {
    title: "Студія звукозапису",
    tag: "Studio",
    image: "/assets/archive/studio-reference.png",
    imageFit: "contain",
    lead:
      "Аранжування, написання текстів пісень, запис, обробка вокалу, зведення, мастеринг та усе необхідне для релізу.",
    details: [
      "Запис голосу та інструментів з високою якістю звуку.",
      "Професійна обробка для будь-яких задач.",
      "Написання пісні, аранжування та продакшн під ключ.",
    ],
  },
  {
    title: "Школа вокалу",
    tag: "Voice school",
    image: "/assets/archive/production-reference.png",
    lead:
      "Індивідуальні уроки вокалу. Підготовка до виступів і запису. Робота з авторськими піснями. Навчання для дітей і дорослих.",
    details: [
      "Розвиток голосу, техніки та впевненості виконання.",
      "Робота над репертуаром та сценічною подачею.",
      "Програми для будь-якого віку та рівня підготовки.",
    ],
  },
  {
    title: "Дизайн студія",
    tag: "Design",
    image: "/assets/price-design-generated.jpg",
    lead:
      "Візуальна упаковка артиста: від обкладинки пісні до повної айдентики.",
    details: [
      "Дизайн обкладинки для синглу або альбому.",
      "Логотипи, візуал для цифрових майданчиків і соцмереж.",
      "Створення анімаційного контенту та Lyric Video.",
    ],
  },
  {
    title: "Відео / фото продакшн",
    tag: "Production",
    image: "/assets/production-generated.jpg",
    lead:
      "Створення контенту для артиста під реліз і соцмережі: фотосесії, відео та короткі промо-формати.",
    details: [
      "Музичні кліпи та сніпети: режисура, сценарій, локації, кастинг, зйомка, монтаж і бекстейдж.",
      "Контент для соцмереж — короткі відео для просування релізів.",
      "Промо для артистів — фото та відео для бренду, афіш і рекламних кампаній.",
    ],
  },
  {
    title: "Випуск та просування",
    tag: "Release",
    image: "/assets/brand/nenoy-wave-yellow.jpg",
    lead:
      "Підготовка релізу до виходу та підтримка треку після старту.",
    details: [
      "Створення та випуск релізів — супровід пісні до та після виходу на музичних платформах.",
      "Просування музики — прес-релізи, рекламні кампанії, соцмережі, таргет і медіаресурси.",
      "Розвиток артиста — стратегія, позиціонування та підтримка проєкту на всіх етапах росту.",
    ],
  },
];

const flow = [
  "Ідея, референси та демо",
  "Створення аранжування",
  "Написання тексту пісні та вокальної мелодії",
  "Підготовка до запису з вокальним тренером",
  "Запис, зведення та мастеринг",
  "Обкладинка, сніпети та кліп",
  "Дистрибуція та просування",
];

const benefits = [
  {
    title: "Підтримка на всіх етапах",
    text: "Активна комунікація починаючи зі створення референсу до просування треку.",
  },
  {
    title: "Звук і візуал в одному стилі",
    text: "Ми робимо цілісний продукт, який не втрачає свій сенс через різні погляди на творчість.",
  },
  {
    title: "Живий студійний процес",
    text: "Працюємо поруч з артистом, щоб рішення були швидкими й точними.",
  },
  {
    title: "Зручна локація",
    text: "Студія знаходиться прямо біля метро Осокорки. Тут достатньо простору для творчості та комфортної роботи.",
  },
  {
    title: "Професійна команда",
    text: "Досвідчена творча команда зрозуміє ваше бачення та підкаже, як його реалізувати без навʼязування свого.",
  },
];

const priceCards = [
  {
    title: "Пісня під ключ",
    image: "/assets/price-song-generated.jpg",
    packages: [
      {
        name: "Пакет з аранжуванням",
        price: "від 600 €",
        includes: [
          "Аранжування",
          "Запис безлім",
          "Voice design",
          "Обробка голосу",
          "Зведення",
          "Мастеринг",
        ],
      },
      {
        name: "Пакет з бітом",
        price: "від 400 €",
        includes: [
          "Біт",
          "Запис безлім",
          "Voice design",
          "Обробка голосу",
          "Зведення",
          "Мастеринг",
        ],
      },
    ],
    items: [
      ["Текст пісні українською до пакета з аранжуванням", "від 750 €"],
      ["Текст пісні іноземною до пакета з аранжуванням", "від 800 €"],
      ["Текст пісні українською до пакета з бітом", "від 500 €"],
      ["Текст пісні іноземною до пакета з бітом", "від 600 €"],
    ],
  },
  {
    title: "Recording",
    image: "/assets/price-recording-generated.jpg",
    items: [
      ["Запис до 2-х годин", "1200 ₴/год"],
      ["Запис від 3-х годин", "1000 ₴/год"],
      ["Зведення", "від 5000 ₴"],
      ["Обробка голосу", "від 1000 ₴"],
      ["Мастеринг", "від 1000 ₴"],
    ],
  },
  {
    title: "Voice",
    image: "/assets/archive/production-reference.png",
    items: [
      ["Voice design", "від 2000 ₴"],
      ["Урок вокалу", "1200 ₴/год"],
      ["Супровід викладача на записі до 1 години", "1500 ₴/год"],
      ["Супровід викладача на записі від 2-х годин", "1200 ₴/год"],
      ["Послуги вокалістів", "від 1200 ₴/год"],
    ],
  },
  {
    title: "Music & Sound",
    image: "/assets/brand/nenoy-wave-yellow.jpg",
    items: [
      ["Аранжування", "від 300 €"],
      ["Біт під ключ", "від 150 €"],
      ["Текст пісні українською", "від 150 €"],
      ["Текст пісні англійською", "від 250 €"],
      ["Ексклюзивні права на готові біти", "від 100 $"],
    ],
  },
  {
    title: "Design",
    image: "/assets/price-design-generated.jpg",
    items: [
      ["Статична обкладинка", "від 80 $"],
      ["Full-пакет статичних обкладинок", "від 110 $"],
      ["Full-пакет обкладинок з анімацією", "від 150 $"],
      ["Авторський lyric video", "від 200 €"],
      ["Мультиплікаційне відео", "від 1000 €"],
      ["Лого", "від 100 $"],
      ["Брендбук", "від 200 $"],
      ["Афіша / банер", "від 1000 ₴"],
    ],
  },
];

const partners = [
  "/assets/archive/client-1.png",
  "/assets/archive/client-2.png",
  "/assets/archive/client-3.png",
  "/assets/archive/client-4.png",
  "/assets/archive/client-5.png",
  "/assets/best-music.png",
];

const socialLinks = [
  { label: "Instagram", href: instagramHref, Icon: InstagramIcon },
  { label: "Telegram", href: telegramHref, Icon: Send },
];

function SocialIcon({ href, label, children }) {
  return (
    <a
      className="icon-link"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}

function App() {
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsHeaderSolid(window.scrollY > 56);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <header className={`site-header${isHeaderSolid ? " is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="NENOY Music">
          <span>NENOY</span>
        </a>
        <nav className="nav" aria-label="Головна навігація">
          <a href="#services">Послуги</a>
          <a href="#prices">Прайс</a>
          <a href="#process">Під ключ</a>
          <a href="#why">Чому ми</a>
          <a href="#gifts">Подарунки</a>
          <a href="#contact">Контакти</a>
        </nav>
        <div className="header-socials">
          <SocialIcon href={instagramHref} label="Instagram">
            <InstagramIcon aria-hidden="true" />
          </SocialIcon>
          <SocialIcon href={telegramHref} label="Telegram">
            <Send aria-hidden="true" />
          </SocialIcon>
          <SocialIcon href={phoneHref} label={`Зателефонувати: ${phoneLabel}`}>
            <Phone aria-hidden="true" />
          </SocialIcon>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <img src="/assets/hero-studio-v2.jpg" alt="" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Ласкаво просимо у NENOY MUSIC</p>
          <h1>Тут є все, що потрібно для твоєї творчості.</h1>
          <p className="hero-motto">Music | People | Love</p>
        </div>
      </section>

      <section className="service-showcase" id="services">
        {services.map((service, index) => (
          <article className="service-row" key={service.title}>
            <div className={`service-visual${service.imageFit === "contain" ? " is-contain" : ""}`}>
              <img src={service.image} alt="" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="service-copy">
              <p className="eyebrow">{service.tag}</p>
              <h2>{service.title}</h2>
              <p>{service.lead}</p>
              <ul>
                {service.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="portfolio-cta">
        <div>
          <p className="eyebrow">Реалізовані проєкти</p>
          <h2>Послухайте та подивіться наші роботи</h2>
          <p>
            З прикладами реалізованих проєктів ви можете ознайомитися на нашій
            Instagram сторінці або за запитом у Telegram.
          </p>
        </div>
        <div className="portfolio-actions">
          {socialLinks.map(({ label, href, Icon }) => (
            <a href={href} key={label} target="_blank" rel="noreferrer">
              <Icon aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="price-list" id="prices">
        <div className="price-header">
          <div>
            <p className="eyebrow">NENOY REC</p>
            <h2>Наш прайс</h2>
          </div>
          <p>
            Для більшого розуміння ціни на потрібні послуги зателефонуйте нам
            або залиште заявку на сайті.
          </p>
        </div>
        <div className="price-card-grid">
          {priceCards.map((card, index) => (
            <article className="price-tile" key={card.title}>
              <div className="price-tile-media">
                <img src={card.image} alt="" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
              </div>
              <div className="price-tile-body">
                {card.packages?.map((item) => (
                  <div className="price-package" key={item.name}>
                    <div>
                      <strong>{item.name}</strong>
                      <b>{item.price}</b>
                    </div>
                    <p>{item.includes.join(" / ")}</p>
                  </div>
                ))}
                <ul>
                  {card.items.map(([name, price]) => (
                    <li key={name}>
                      <span>{name}</span>
                      <strong>{price}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="price-note">
          <strong>Важливо:</strong>
          <div>
            <p>Фінальна вартість залежить від задач, референсів, кількості правок та дедлайнів.</p>
            <p>Для послуги «Пісня під ключ» пакет формується під кожного особисто.</p>
            <p>На написання альбому від 3-х пісень діють спеціальні пропозиції.</p>
            <p>Прайс на відео та фото продакшн формується виключно за вашим запитом.</p>
          </div>
        </div>
      </section>

      <section className="feature-band" id="process">
        <div className="feature-copy">
          <p className="eyebrow">Пісня під ключ</p>
          <h2>Від ідеї до релізу на платформах</h2>
          <p>
            Ми займаємося повним циклом створення аудіо та візуального
            матеріалу. Наша команда буде разом з вами на всіх етапах роботи над
            проєктом. Наповнення пакету формується за вашим запитом.
          </p>
        </div>
        <div className="timeline">
          {flow.map((step, index) => (
            <div className="timeline-item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why" id="why">
        <div className="why-inner">
          <div className="why-copy">
            <p className="eyebrow">Переваги</p>
            <h2>Чому обирають NENOY?</h2>
            <p>
              Ми не просто студія звукозапису, яка працює на потоці. З кожним
              артистом у нас свій особливий вайб. Більшість клієнтів продовжують
              співпрацю з нами на постійній основі. Нам важлива якість того, що
              ми робимо разом з вами, і нам дійсно цікаво досягати бажаних
              результатів.
            </p>
            <blockquote>
              Ми не музичний fast-food. Ми ресторан з авторською кухнею.
            </blockquote>
            <div className="why-signature">
              <strong>Music | People | Love</strong>
              <span>Вже більше 6 років творимо разом з вами.</span>
            </div>
          </div>
          <div className="why-visual" aria-hidden="true">
            <img src="/assets/characters/kino-mascot.png" alt="" />
            <span>5 напрямів</span>
          </div>
          <div className="benefits">
            {benefits.map((benefit, index) => (
              <div key={benefit.title}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gift-section" id="gifts">
        <div className="gift-media">
          <img src="/assets/gift-certificate-v2.png" alt="Подарункові сертифікати NENOY" />
        </div>
        <div className="gift-copy">
          <p className="eyebrow">Подарункові сертифікати</p>
          <h2>Подаруйте можливість створити власну пісню</h2>
          <p>
            Подарунковий сертифікат на будь-яку музичну послугу: від запису
            вокалу до створення пісні під ключ. Стане ідеальним подарунком для
            тих, хто давно мріє про реалізацію себе у творчості.
          </p>
          <a className="primary-btn" href="#contact">Залишити заявку</a>
        </div>
      </section>

      <section className="partners">
        <p className="eyebrow">Наші клієнти та партнери</p>
        <div className="partner-strip">
          {partners.map((src) => (
            <div className="partner-logo" key={src}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <img className="contact-logo" src="/assets/brand/nenoy-logo-color.png" alt="NENOY" />
          <p className="eyebrow">Music | People | Love</p>
          <h2>Заповніть форму для зворотнього звʼязку</h2>
          <p>
            Тут ви можете залишити своє питання. Наш менеджер зв’яжеться з вами
            найближчим часом та проконсультує.
          </p>
          <div className="socials">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <form className="lead-form">
          <div className="form-head"><span>Заявка</span></div>
          <div className="form-grid">
            <label>
              Імʼя
              <input type="text" placeholder="Як до вас звертатись" />
            </label>
            <label>
              Контакт
              <input type="text" placeholder="@telegram або телефон" />
            </label>
          </div>
          <label>
            Напрямок
            <select defaultValue="">
              <option value="" disabled>Оберіть послугу</option>
              <option>Студія звукозапису</option>
              <option>Пісня під ключ</option>
              <option>Школа вокалу</option>
              <option>Дизайн студія</option>
              <option>Відео / фото продакшн</option>
              <option>Випуск та просування</option>
              <option>Подарунковий сертифікат</option>
            </select>
          </label>
          <label>
            Повідомлення
            <textarea placeholder="Коротко опишіть ваше питання або задачу" rows="5" />
          </label>
          <button type="button">Надіслати заявку</button>
        </form>
      </section>

      <footer>
        <div className="footer-info">
          <strong>NENOY</strong>
          <p>вулиця Єлизавети Чавдар, 1, Київ, 02072</p>
          <a href={phoneHref}>{phoneLabel}</a>
          <a href="mailto:nenoydigital@gmail.com">nenoydigital@gmail.com</a>
          <a
            className="map-link"
            href="https://maps.app.goo.gl/Dki23uHEj4dfeYFs6?g_st=ic"
            target="_blank"
            rel="noreferrer"
          >
            Відкрити маршрут
          </a>
        </div>
        <div className="footer-map">
          <iframe
            title="NENOY, вулиця Єлизавети Чавдар, 1"
            src="https://www.google.com/maps?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%84%D0%BB%D0%B8%D0%B7%D0%B0%D0%B2%D0%B5%D1%82%D0%B8%20%D0%A7%D0%B0%D0%B2%D0%B4%D0%B0%D1%80%2C%201%2C%20%D0%9A%D0%B8%D1%97%D0%B2%2C%2002072&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </footer>
    </main>
  );
}

export default App;
