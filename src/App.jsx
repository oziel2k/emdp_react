import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './styles.css';

function App() {  
  useEffect(() => {
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
        return responsiveNavItem;
    });
  }, []);

  return (
    <div id="page-top">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <img src="/assets/img/mdp.svg" alt="Logo" className="mini-img" />
          <a className="navbar-brand" href="#page-top">
            <h4 className="h4flex">Mãe de Pet, estética canina</h4>
          </a>
          <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#page-top">Início</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Nossos Serviços</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Sobre</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Masthead */}
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          {/* Masthead Avatar Image */}
          <img className="masthead-avatar mb-5" src="/assets/img/mdpl.svg" alt="..." />
          {/* Masthead Heading */}
          <h1 className="masthead-heading text-uppercase mb-0">Ledjane Morais</h1>
          {/* Icon Divider */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* Masthead Subheading */}
          <p className="masthead-subheading font-weight-light mb-0">Pet Groomer - Protetora de Animais - Mãe de Pet</p>
        </div>
      </header>

      {/* Portfolio Section */}
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* Portfolio Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">SERVIÇOS</h2>
          {/* Icon Divider */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* Portfolio Grid Items */}
          <div className="row justify-content-center">
            {/* Portfolio Item 1 */}
            <div className="col-md-3 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="/assets/img/banho.png" alt="Banho" />
              </div>
            </div>
            {/* Portfolio Item 2 */}
            <div className="col-md-3 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="/assets/img/tosa.png" alt="Tosa" />
              </div>
            </div>
            {/* Portfolio Item 3 */}
            <div className="col-md-3 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="/assets/img/escovacao.png" alt="Escovação" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">Sobre</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 ms-auto"><p className="lead">Apaixonados por animais, acreditamos que cada pet merece um tratamento todo especial, por isto não economizamos em carinho, atenção e dedicação para cada peludinho que passa por aqui.</p></div>
            <div className="col-lg-4 me-auto"><p className="lead">Assim como nossos serviços, os produtos que utilizamos são de alta qualidade, seguros e adequados para a pele e pelagem de cada pet. Agende um horário e conheça como cuidamos do seu pet com muito amor e dedicação.</p></div>
          </div>
          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="https://wa.me/5548996416604?text=agendamento%20banho">
              <i className="fas fa-download me-2"></i>
              Clique aqui para agendar o atendimento do seu pet agora!
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-2">Contato via WhatsApp</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="text-center mt-4">
            <a className="btn btn-xl" href="https://wa.me/5548996416604?text=agendamento%20banho">
              <i className="fas fa-download me-2"></i>
              Clique aqui para agendar o atendimento do seu pet agora!
            </a>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section className="page-section bg-primary text-white mb-0" id="locate">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">Localização</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.4672865509541!2d-48.81524690089366!3d-27.701213623064856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9520c95027f4133b%3A0x5f4b2aba8ce31c01!2zRXN0w6l0aWNhIE3Do2UgZGUgUGV0!5e0!3m2!1spt-BR!2sbr!4v1725726031750!5m2!1spt-BR!2sbr" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Localização</h4>
              <p className="lead mb-0">
                Av. Cel. Antônio Lehmkuhl, 306, Sala 03
                <br />
                Centro
                <br />
                Águas Mornas, SC 88150-000
              </p>
            </div>
            {/* Footer Social Icons */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Nossar redes sociais</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/profile.php?id=61560272724426&mibextid=ZbWKwL"><i className="fab fa-fw fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/esteticamaedepet/"><i className="fab fa-fw fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright © Estética Mãe de Pet 2024</small></div>
      </div>

      {/* Modals - Poderiam ser refatorados para componentes separados, mas mantive aqui para facilitar */}
      
      {/* Portfolio Modal 1 - Banho */}
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Banho</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="/assets/img/banho.png" alt="..." />
                    <p className="mb-4">Banho com produtos de alta qualidade e um serviço delicado cheio de amor de carinho.</p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Fechar Janela
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Modal 2 - Tosa */}
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tosa</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="/assets/img/tosa.png" alt="..." />
                    <p className="mb-4">Tosa excecutada de forma profissional sem estressar o pet.</p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Fechar Janela
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Modal 3 - Escovação */}
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Escovação</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="/assets/img/escovacao.png" alt="..." />
                    <p className="mb-4">A escovação é um processo importante na manutenção da pelagem de muitos pets, e não deve ser simplesmente substituída por uma tosa baixa.</p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Fechar Janela
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;