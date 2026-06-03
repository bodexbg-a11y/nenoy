import React, { useEffect, useState } from "react";

const services = [
  {
    title: "Студія звукозапису",
    tag: "Studio",
    image: "/assets/archive/studio-reference.png",
    lead: "Запис, зведення та мастеринг для треків, які звучать готовими до релізу.",
    details: [
      "Накопичення доріжок голосу та музичних інструментів",
      "Обробка матеріалу, баланс вокалу й музики",
      "Фіналізація композиції, ширина та відтінок звучання",
    ],
  },
  {
    title: "Випуск та просування",
    tag: "Release",
    image: "/assets/brand/nenoy-wave-yellow.jpg",
    lead: "Підготовка релізу до виходу та підтримка треку після старту на платформах.",
    details: [
      "Оформлення назви, обкладинки та метаданих",
      "План випуску й базова релізна стратегія",
      "Поради щодо просування після публікації",
    ],
  },
  {
    title: "Школа вокалу",
    tag: "Voice school",
    image: "/assets/archive/production-reference.png",
    lead: "Індивідуальні заняття з вокалу, підготовка до запису та робота з голосом.",
    details: [
      "Постановка голосу та вокальна техніка",
      "Розбір пісні, інтонації та подачі",
      "Підготовка артиста до студійного запису",
    ],
  },
  {
    title: "Дизайн студія",
    tag: "Design",
    image: "/assets/brand/nenoy-wave-yellow.jpg",
    lead: "Візуальна упаковка артиста: від обкладинки пісні до повної айдентики.",
    details: [
      "Дизайн обкладинки для синглу або альбому",
      "Логотипи, візуал для цифрових майданчиків",
      "Мерчандайзинг та стиль релізної кампанії",
    ],
  },
  {
    title: "Фото / відео продакшн",
    tag: "Production",
    image: "/assets/hero-nenoy-wall.jpg",
    lead: "Контент для артиста, релізу та соцмереж: фото, відео й короткі промо-формати.",
    details: [
      "Зйомка в студії та підготовка кадрів для релізу",
      "Короткі відео для Reels, TikTok та промо",
      "Візуальний контент у стилі NENOY",
    ],
  },
];

const flow = [
  "Ідея, демо та референси",
  "Запис голосу й інструментів",
  "Продакшн, зведення, мастеринг",
  "Обкладинка, дистрибуція, промо",
];

const priceGroups = [
  {
    title: "Recording",
    image: "/assets/archive/studio-reference.png",
    items: [
      { name: "Запис до 2-х годин", price: "1200 ₴/год" },
      { name: "Запис від 3-х годин", price: "1000 ₴/год" },
      { name: "Зведення", price: "від 500 ₴" },
      { name: "Обробка голосу", price: "від 1000 ₴" },
      { name: "Мастеринг", price: "від 1000 ₴" },
    ],
  },
  {
    title: "Voice",
    image: "/assets/archive/production-reference.png",
    items: [
      { name: "Voice дизайн", price: "від 2000 ₴" },
      { name: "Урок вокалу", price: "1200 ₴/год" },
      { name: "Супровід викладача до 1 год", price: "1500 ₴/год" },
      { name: "Супровід викладача від 2-х год", price: "1200 ₴/год" },
      { name: "Послуги вокалістів", price: "від 1200 ₴/год" },
    ],
  },
  {
    title: "Music & Sound",
    image: "/assets/brand/nenoy-wave-yellow.jpg",
    items: [
      { name: "Аранжування", price: "від 300 €" },
      { name: "Біт під ключ", price: "від 150 €" },
      { name: "Текст пісні українською", price: "від 150 €" },
      { name: "Текст пісні англійською", price: "від 250 €" },
      { name: "Ексклюзивні права на готові біти", price: "від 100 $" },
    ],
  },
];

const partners = [
  "/assets/archive/client-1.png",
  "/assets/archive/client-2.png",
  "/assets/archive/client-3.png",
  "/assets/archive/client-4.png",
  "/assets/archive/client-5.png",
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/nenoy_rec/" },
  { label: "Facebook", href: "https://www.facebook.com/NeNoyRec/" },
  { label: "Telegram", href: "https://t.me/NeNoy_Music" },
];

function App() {
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);
  const [activePrice, setActivePrice] = useState(0);

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
          <a href="#process">Процес</a>
          <a href="#why">Чому ми</a>
          <a href="#contact">Контакти</a>
        </nav>
        <a className="header-cta" href="#contact">
          Записатись
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <img src="/assets/hero-nenoy-wall.jpg" alt="" />
        </div>
        <div className="hero-content">
          <img className="hero-brand-mark" src="/assets/brand/nenoy-logo-color.png" alt="" />
          <p className="eyebrow">Ласкаво просимо</p>
          <h1>Тут звуки стають музикою, а мрії реальністю.</h1>
          <p className="hero-copy">
            NENOY - це екосистема музичної творчості: студія звукозапису,
            випуск і просування, школа вокалу, дизайн та фото / відео продакшн.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#contact">
              Записатись
            </a>
            <a className="secondary-btn" href="#services">
              Подивитись послуги
            </a>
          </div>
          <div className="hero-stats" aria-label="Ключові напрямки NENOY">
            <span>
              <strong>5</strong>
              напрямків
            </span>
            <span>
              <strong>360</strong>
              підтримка артиста
            </span>
            <span>
              <strong>1</strong>
              творча команда
            </span>
          </div>
        </div>
      </section>

      <section className="intro" id="services">
        <div>
          <p className="eyebrow">Наші послуги</p>
          <h2>Екосистема NENOY</h2>
        </div>
        <p>
          Познайомтеся з нашим світом музичної творчості та різноманітністю
          послуг. Ваш проєкт не буде потоковим: команда допоможе на всіх етапах
          від написання до просування творчості.
        </p>
      </section>

      <div className="section-mascot section-mascot-services" aria-hidden="true">
        <img src="/assets/characters/kino-mascot.png" alt="" />
      </div>

      <section className="service-showcase">
        {services.map((service, index) => (
          <article className="service-row" key={service.title}>
            <div className="service-visual">
              <img src={service.image} alt="" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="service-copy">
              <p className="eyebrow">{service.tag}</p>
              <h3>{service.title}</h3>
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

      <section className="price-list" id="prices">
        <img className="price-mascot" src="/assets/characters/kino-mascot.png" alt="" aria-hidden="true" />
        <div className="price-header">
          <div>
            <p className="eyebrow">NENOY REC</p>
            <h2>Прайс</h2>
          </div>
          <p>
            Базові формати для запису, голосу та музичного продакшну. Пакет
            можна зібрати під конкретний трек, дедлайн і рівень готовності демо.
          </p>
        </div>
        <div className="price-grid">
          {priceGroups.map((group, groupIndex) => (
            <article
              className={`price-card${activePrice === groupIndex ? " is-open" : ""}`}
              key={group.title}
            >
              <button
                aria-expanded={activePrice === groupIndex}
                className="price-trigger"
                onClick={() => setActivePrice(groupIndex)}
                type="button"
              >
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <img src={group.image} alt="" />
                <strong>{group.title}</strong>
                <small>{activePrice === groupIndex ? "відкрито" : "дивитись"}</small>
              </button>
              <div className="price-panel">
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <strong>{item.price}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="price-note">
          <strong>Важливо:</strong>
          <p>
            Фінальна вартість залежить від задачі, референсів, кількості правок
            та дедлайну. Для треку під ключ команда підбере оптимальний пакет.
          </p>
        </div>
      </section>

      <section className="feature-band" id="process">
        <div className="feature-copy">
          <p className="eyebrow">Трек під ключ</p>
          <h2>Від першої ідеї до релізу на платформах</h2>
          <p>
            NENOY поєднує творчий, технічний і візуальний продакшн. Тут можна
            записати демо, допрацювати аранжування, зібрати фінальний саунд,
            оформити реліз і підготувати його до просування.
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

      <div className="section-mascot section-mascot-process" aria-hidden="true">
        <img src="/assets/characters/kino-mascot.png" alt="" />
      </div>

      <section className="why" id="why">
        <div className="why-inner">
          <div className="why-copy">
            <p className="eyebrow">Більше про нас</p>
            <h2>Чому обирають NENOY?</h2>
            <p>
              Тут не просто орендують годину в студії. Команда допомагає
              зібрати ідею в повний реліз: звук, візуал, упаковка й наступний
              крок після запису.
            </p>
            <div className="why-signature">
              <strong>Music | People | Love</strong>
              <span>одна команда для запису, продакшну, дизайну та навчання</span>
            </div>
          </div>
          <div className="why-visual" aria-hidden="true">
            <img src="/assets/characters/kino-mascot.png" alt="" />
            <span>4 напрями</span>
          </div>
          <div className="benefits">
            <div>
              <strong>01</strong>
              <h3>Підтримка на всіх етапах</h3>
              <p>Від демо та запису до фінального майстеру й релізної кампанії.</p>
            </div>
            <div>
              <strong>02</strong>
              <h3>Звук і візуал в одному стилі</h3>
              <p>Допомагаємо треку звучати й виглядати цілісно на всіх майданчиках.</p>
            </div>
            <div>
              <strong>03</strong>
              <h3>Живий студійний процес</h3>
              <p>Працюємо поруч з артистом, щоб рішення були швидкими й точними.</p>
            </div>
            <div>
              <strong>04</strong>
              <h3>Зручна локація</h3>
              <p>Студія знаходиться біля метро Осокорки, тож до нас легко дістатися.</p>
            </div>
          </div>
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
          <img className="contact-brand-art" src="/assets/brand/nenoy-wave-yellow.jpg" alt="" />
          <p className="eyebrow">Music | People | Love</p>
          <h2>Записатись у студію</h2>
          <p>
            Розкажіть про трек, демо або задачу. Команда NENOY підкаже формат
            роботи та наступний крок.
          </p>
          <div className="session-card" aria-label="Формат роботи">
            <span>Studio session</span>
            <strong>Запис / продакшн / реліз</strong>
            <p>Залиште контакт, і ми повернемось із пропозицією формату роботи.</p>
          </div>
          <div className="socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <form className="lead-form">
          <div className="form-head">
            <span>Заявка</span>
          </div>
          <div className="form-grid">
            <label>
              Ім'я
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
              <option value="" disabled>
                Оберіть послугу
              </option>
              <option>Запис треку</option>
              <option>Зведення / мастеринг</option>
              <option>Трек під ключ</option>
              <option>Обкладинка / упаковка артиста</option>
              <option>Школа вокалу</option>
              <option>Фото / відео продакшн</option>
            </select>
          </label>
          <label>
            Повідомлення
            <textarea placeholder="Коротко опишіть задачу, стиль, референси або дедлайн" rows="4" />
          </label>
          <button type="button">
            <span>Надіслати заявку</span>
            <small>→</small>
          </button>
        </form>
      </section>

      <footer>
        <strong>NENOY</strong>
        <span>© NENOY Production</span>
      </footer>
    </main>
  );
}

export default App;
