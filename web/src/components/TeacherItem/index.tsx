import React from "react";

import "./styles.css";

import whastsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
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

      <p>
        Entusiasta das melhores tecnologias de química avançada... Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Fugiat doloremque similique
        distinctio voluptate veniam laboriosam perferendis numquam, laborum
        beatae molestiae nulla quae accusamus facere minima soluta quas
        perspiciatis itaque quidem!
      </p>

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
  );
};

export default TeacherItem;
