import React from "react";

import PageHeader from "../../components/PageHeader";

import whastsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars1.githubusercontent.com/u/30738742?s=460&u=dedc3f9ccc4718145fe4567e668042473e95146b&v=4"
              alt="Nome"
            />
            <div>
              <strong>Nome do professor</strong>
              <span>Química</span>
            </div>
          </header>

          <p>Entusiasta das melhores tecnologias de química avançada...</p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 20,00</strong>
            </p>
            <button type="button">
              <img src={whastsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default TeacherList;
