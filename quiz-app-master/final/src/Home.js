import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import img1 from "./Image/img1.jpg";
import img2 from "./Image/img2.jpg";
import img3 from "./Image/img3.jpg";
import img4 from "./Image/img4.jpg";
import img5 from "./Image/img5.jpg";
import img6 from "./Image/img6.jpg";
import img7 from "./Image/img7.jpg";
import img8 from "./Image/img8.jpg";
import img9 from "./Image/img9.jpg";
import img10 from "./Image/img10.jpg";
import img11 from "./Image/img11.jpg";
import Categories from "./Categories";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="contenedor">
          <div className="hero__texto">
            <h1 className="hero__titulo">EDUICFES</h1>
            <h2 className="hero__subtitulo">
              Ayudante web para examenes ICFES
            </h2>
            <a href="#" className="hero__cta">
              Contactenos ahora
            </a>
          </div>
        </div>

        <img src={img9} alt="" className="presentacion__imagen" />
        <div className="contenedor">
          <h2 className="subtitulo">Introducción</h2>
          <p className="presentacion__intro">
            Esta plataforma es una herramienta indispensable para la formación
            intelectual de los usuarios, donde se preparan para presentar la
            prueba saber 11(ICFES). Se puede practicar de forma virtual e
            interactiva, con una simulación de la prueba en tiempo real con un
            equipo de cómputo y acceso a internet.
          </p>
        </div>

        <div className="categories">
          <div className="contenedor">
            <h2 className="subtitulo">Cursos</h2>
            <section className="cursos">
              <div className="cursos__grid">
                <article class="cursos__item">
                  <img src={img1} alt="" className="cursos__img" />
                  <Link to="/questionsIngles">
                    <div className="cursos__hover">
                      <h2 className="cursos__titulo">Inglés</h2>
                      <i className="far fa-file-alt cursos__icono"></i>
                    </div>
                  </Link>
                </article>
                <article className="cursos__item">
                  <img src={img2} alt="" className="cursos__img" />
                  <Link to="/questionsMatematicas">
                    <div className="cursos__hover">
                      <h2 className="cursos__titulo">Matemáticas</h2>
                      <i className="far fa-file-alt cursos__icono"></i>
                    </div>
                  </Link>
                </article>
                <article className="cursos__item">
                  <img src={img3} alt="" className="cursos__img" />
                  <Link to="/questionsLectura">
                    <div className="cursos__hover">
                      <h2 className="cursos__titulo">Lectura Crítica</h2>
                      <i className="far fa-file-alt cursos__icono"></i>
                    </div>
                  </Link>
                </article>
                <article className="cursos__item">
                  <img src={img4} alt="" className="cursos__img" />
                  <Link to="/questionsSociales">
                    <div class="cursos__hover">
                      <h2 class="cursos__titulo">Sociales</h2>
                      <i className="far fa-file-alt cursos__icono"></i>
                    </div>
                  </Link>
                </article>
                <article className="cursos__item">
                  <img src={img5} alt="" className="cursos__img" />
                  <Link to="/questionsCiencias">
                    <div className="cursos__hover">
                      <h2 className="cursos__titulo">Ciencias</h2>
                      <i className="far fa-file-alt cursos__icono"></i>
                    </div>
                  </Link>
                </article>
                <article className="cursos__item">
                  <img src={img7} alt="" className="cursos__img" />
                  <Link to="/questionsSimulacion">
                    <div className="cursos__hover">
                      <h2 className="cursos__titulo">Simulacion</h2>
                      <i className="far fa-file-alt cursos__icono"></i>
                    </div>
                  </Link>
                </article>
              </div>
            </section>
          </div>
        </div>

        <section className="testimonio contenedor">
          <h2 className="subtitulo">¿Que dicen de nosotros?</h2>
          <div className="contenedor">
            <div className="testimomio__grid">
              <article class="testimonio__item">
                <div className="testimonio__item"></div>
                <div className="testimonio__personal">
                  <img src={img10} alt="" className="testimonio__img" />
                  <div className="testimonio__text">
                    <h3 className="testimonio__nombre">Brian Rivas</h3>
                    <p testimonio__verificado>Creador de Sitios web</p>
                  </div>
                </div>
                <p className="testimonio__vista">
                  Esta Página web existe con el proposito de educar, preparar a
                  estudiantes y todo tipo de personas que presenten los cursos
                </p>
              </article>
            </div>

            <article class="testimonio__item">
              <div className="testimonio__personal">
                <img src={img11} alt="" className="testimonio__img" />
                <div className="testimonio__text">
                  <h3 className="testimonio__nombre">Brian Rivas</h3>
                  <p testimonio__verificado>Creador del Citio web</p>
                </div>
              </div>
              <p className="testimonio__vista">
                Esta Página web existe con el proposito de educar, preparar a
                estudiantes y todo tipo de personas que presenten los cursos
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
