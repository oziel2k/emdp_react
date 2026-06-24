import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';

const whatsappUrl =
  'https://wa.me/5548996416604?text=Ol%C3%A1%2C%20quero%20agendar%20um%20atendimento%20para%20meu%20pet.';

const services = [
  {
    id: 'banho',
    title: 'Banho completo',
    image: '/assets/clients/IMG_6416.JPEG',
    text: 'Higienização cuidadosa, produtos de qualidade e acabamento pensado para o conforto do pet.',
    details: ['Produtos seguros', 'Secagem delicada', 'Perfume suave'],
  },
  {
    id: 'tosa',
    title: 'Tosa profissional',
    image: '/assets/clients/IMG_2014.JPEG',
    text: 'Tosa feita com técnica, paciência e respeito ao limite de cada animal.',
    details: ['Tosa higiênica', 'Tosa na tesoura', 'Acabamento personalizado'],
  },
  {
    id: 'escovacao',
    title: 'Escovação',
    image: '/assets/clients/IMG_4146.JPEG',
    text: 'Remoção de pelos soltos e nós, ajudando na saúde da pele e da pelagem.',
    details: ['Desembaraço', 'Manutenção da pelagem', 'Mais conforto no dia a dia'],
  },
];

const highlights = [
  {
    title: 'Atendimento com carinho',
    text: 'Rotina tranquila, sem pressa e com atenção ao comportamento de cada pet.',
  },
  {
    title: 'Ambiente acolhedor',
    text: 'Espaço preparado para banho, tosa e cuidado estético com mais segurança.',
  },
  {
    title: 'Produtos selecionados',
    text: 'Uso de produtos adequados para diferentes tipos de pele e pelagem.',
  },
];

const clientMedia = [
  'IMG_0496.JPEG',
  'IMG_1204.JPEG',
  'IMG_1299.JPEG',
  'IMG_1315.JPEG',
  'IMG_1500.JPEG',
  'IMG_1580.JPEG',
  'IMG_1595.JPEG',
  'IMG_1897.JPEG',
  'IMG_2005.JPEG',
  'IMG_2014.JPEG',
  'IMG_2141.JPEG',
  'IMG_2151.JPEG',
  'IMG_2308.JPEG',
  'IMG_2502.JPEG',
  'IMG_2539.JPEG',
  'IMG_2571.JPEG',
  'IMG_2716.JPEG',
  'IMG_2748.JPEG',
  'IMG_2876.JPEG',
  'IMG_2901.JPEG',
  'IMG_3188.JPEG',
  'IMG_3213.JPEG',
  'IMG_3413.JPEG',
  'IMG_3540.JPEG',
  'IMG_3756.JPEG',
  'IMG_4053.JPEG',
  'IMG_4074.JPEG',
  'IMG_4114.JPEG',
  'IMG_4146.JPEG',
  'IMG_4181.JPEG',
  'IMG_4194.JPEG',
  'IMG_4202.JPEG',
  'IMG_4248.JPEG',
  'IMG_4323.JPEG',
  'IMG_4342.JPEG',
  'IMG_4404.JPEG',
  'IMG_4428.JPEG',
  'IMG_4484.JPEG',
  'IMG_4516.JPEG',
  'IMG_4569.JPEG',
  'IMG_4622.JPEG',
  'IMG_4652.JPEG',
  'IMG_4702.JPEG',
  'IMG_4895.JPEG',
  'IMG_4952.JPEG',
  'IMG_5016.JPEG',
  'IMG_5096.JPEG',
  'IMG_5121.JPEG',
  'IMG_5153.JPEG',
  'IMG_5155.JPEG',
  'IMG_5160.JPEG',
  'IMG_5185.JPEG',
  'IMG_5220.JPEG',
  'IMG_5232.JPEG',
  'IMG_5249.JPEG',
  'IMG_5259.JPEG',
  'IMG_5296.JPEG',
  'IMG_5329.JPEG',
  'IMG_5376.JPEG',
  'IMG_5391.JPEG',
  'IMG_5423.JPEG',
  'IMG_5425.JPEG',
  'IMG_5437.JPEG',
  'IMG_5443.JPEG',
  'IMG_5455.JPEG',
  'IMG_5462.JPEG',
  'IMG_5467.JPEG',
  'IMG_5488.JPEG',
  'IMG_5625.JPEG',
  'IMG_5696.JPEG',
  'IMG_5721.JPEG',
  'IMG_5733.JPEG',
  'IMG_5773.JPEG',
  'IMG_5813.JPEG',
  'IMG_5823.JPEG',
  'IMG_5864.JPEG',
  'IMG_5913.JPEG',
  'IMG_6001.JPEG',
  'IMG_6050.JPEG',
  'IMG_6058.JPEG',
  'IMG_6075.JPEG',
  'IMG_6114.JPEG',
  'IMG_6319.JPEG',
  'IMG_6336.JPEG',
  'IMG_6383.JPEG',
  'IMG_6416.JPEG',
  'IMG_9481.JPEG',
  'IMG_9495.JPEG',
  'IMG_9720.JPEG',
  'IMG_9743.JPEG',
  'IMG_9760.JPEG',
  'IMG_9794.JPEG',
];

function App() {
  useEffect(() => {
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');

    const closeMenu = () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    };

    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', closeMenu);
    });

    return () => {
      navLinks.forEach((navLink) => {
        navLink.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  return (
    <div id="page-top" className="site-shell">
      <nav className="navbar navbar-expand-lg fixed-top main-nav" id="mainNav">
        <div className="container">
          <a className="navbar-brand brand-lockup" href="#page-top" aria-label="Mae de Pet">
            <img src="/assets/img/mdp.svg" alt="" className="brand-logo" />
            <span>
              <strong>Mãe de Pet</strong>
              <small>Estética canina</small>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  Clientes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#location">
                  Localização
                </a>
              </li>
              <li className="nav-item ms-lg-2">
                <a className="btn btn-sm btn-primary nav-cta" href={whatsappUrl}>
                  Agendar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="eyebrow">Banho, tosa e cuidado estético</p>
              <h1>Ledjane Morais cuida do seu pet com técnica e afeto.</h1>
              <p className="hero-copy">
                Atendimento em Águas Mornas para tutores que querem conforto, higiene e um
                acabamento bonito sem transformar o dia do pet em uma experiência estressante.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href={whatsappUrl}>
                  Agendar pelo WhatsApp
                </a>
                <a className="btn btn-outline-secondary btn-lg" href="#services">
                  Ver serviços
                </a>
              </div>
              <div className="hero-stats" aria-label="Diferenciais">
                <span>
                  <strong>3+</strong>
                  Serviços principais
                </span>
                <span>
                  <strong>100%</strong>
                  Foco no bem-estar
                </span>
                <span>
                  <strong>SC</strong>
                  Águas Mornas
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-media">
                <img src="/assets/img/ledjane-profile-framed.jpeg" alt="Ledjane Morais" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="page-section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Cuidado completo</p>
              <h2>Serviços para deixar seu pet limpo, confortável e lindo</h2>
            </div>
            <div className="row g-4">
              {services.map((service) => (
                <div className="col-md-6 col-lg-4" key={service.id}>
                  <article className="service-card h-100">
                    <img src={service.image} alt={service.title} />
                    <div className="service-card-body">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <ul>
                        {service.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <a href={whatsappUrl}>Consultar horário</a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section about-section" id="about">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <img className="about-image" src="/assets/img/mae.png" alt="Atendimento Mãe de Pet" />
              </div>
              <div className="col-lg-7">
                <p className="eyebrow">Sobre a Mãe de Pet</p>
                <h2>Um cuidado calmo, próximo e feito para cada peludinho.</h2>
                <p className="lead">
                  Somos apaixonados por animais e acreditamos que estética também é cuidado. Por
                  isso, cada atendimento combina carinho, atenção e produtos adequados para pele e
                  pelagem.
                </p>
                <div className="highlight-grid">
                  {highlights.map((item) => (
                    <div className="highlight-item" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section clients-section" id="clients">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Clientes felizes</p>
              <h2>Galeria de pets que passaram por aqui</h2>
              <p>
                Alguns registros dos atendimentos, com fotos dos pets depois de receberem cuidado,
                carinho e acabamento.
              </p>
            </div>
            <div className="client-gallery">
              {clientMedia.map((fileName, index) => {
                const src = `/assets/clients/${fileName}`;
                return (
                  <a
                    className={`client-gallery-item item-${(index % 7) + 1}`}
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    key={fileName}
                    aria-label={`Abrir foto de cliente ${index + 1}`}
                  >
                    <img src={src} alt={`Pet cliente ${index + 1}`} loading="lazy" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="page-section contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <p className="eyebrow">Agendamento rápido</p>
                <h2>Quer reservar um horário?</h2>
                <p>
                  Chame no WhatsApp e conte o porte, a raça e o serviço que seu pet precisa. Assim
                  conseguimos orientar o melhor atendimento.
                </p>
              </div>
              <a className="btn btn-primary btn-lg" href={whatsappUrl}>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="page-section location-section" id="location">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Onde estamos</p>
              <h2>Av. Cel. Antonio Lehmkuhl, 306, Sala 03</h2>
              <p>Centro, Aguas Mornas - SC, 88150-000</p>
            </div>
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.4672865509541!2d-48.81524690089366!3d-27.701213623064856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9520c95027f4133b%3A0x5f4b2aba8ce31c01!2zRXN0w6l0aWNhIE3Do2UgZGUgUGV0!5e0!3m2!1spt-BR!2sbr!4v1725726031750!5m2!1spt-BR!2sbr"
                title="Localização Mãe de Pet no Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <a className="brand-lockup footer-brand" href="#page-top" aria-label="Mãe de Pet">
                <img src="/assets/img/mdp.svg" alt="" className="brand-logo" />
                <span>
                  <strong>Mãe de Pet</strong>
                  <small>Estética canina em Águas Mornas</small>
                </span>
              </a>
            </div>
            <div className="col-lg-6 footer-links">
              <a href="https://www.instagram.com/esteticamaedepet/">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61560272724426&mibextid=ZbWKwL">
                Facebook
              </a>
              <a href={whatsappUrl}>WhatsApp</a>
            </div>
          </div>
          <div className="footer-bottom">
            <small>Copyright © Estética Mãe de Pet 2026</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
