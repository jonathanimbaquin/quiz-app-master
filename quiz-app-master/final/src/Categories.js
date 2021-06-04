import React from 'react';
import './Categories.css';
import { Link } from "react-router-dom";
import img1 from "./Image/img1.jpg";
import img2 from "./Image/img2.jpg";
import img3 from "./Image/img3.jpg";
import img4 from "./Image/img4.jpg";
import img5 from "./Image/img5.jpg";
import img6 from "./Image/img6.jpg";
import img7 from "./Image/img7.jpg";

function Categories() {
    return (
        <div className='categories'>
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
        
    )
}

export default Categories
