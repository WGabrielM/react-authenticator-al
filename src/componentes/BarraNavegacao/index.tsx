import { useState } from "react";
import { Link } from "react-router-dom";
import BotaoNavegacao from "../BotaoNavegacao";
import ModalCadastroUsuario from "../ModalCadastroUsuario";
import logo from "./assets/logo.png";
import usuario from "./assets/usuario.svg";
import "./BarraNavegacao.css";
import ModalLoginUsuario from "../ModalLoginUsuário";

const BarraNavegacao = () => {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modalLoginAberto, setModalLoginAberto] = useState(false);

  const token = sessionStorage.getItem("token");

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(
    token != null
  );

  const aoEfetuarLogin = () => {
    setModalLoginAberto(false);
    setUsuarioEstaLogado(true);
  };

  return (
    <nav className="ab-navbar">
      <h1 className="logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo da AluraBooks" />
        </Link>
      </h1>
      <ul className="navegacao">
        <li>
          <a href="#!">Categorias</a>
          <ul className="submenu">
            <li>
              <Link to="/">Frontend</Link>
            </li>
            <li>
              <Link to="/">Programação</Link>
            </li>
            <li>
              <Link to="/">Infraestrutura</Link>
            </li>
            <li>
              <Link to="/">Business</Link>
            </li>
            <li>
              <Link to="/">Design e UX</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="acoes">
        {!usuarioEstaLogado && (
          <>
            <li>
              <BotaoNavegacao
                texto="Login"
                textoAltSrc="Icone representando um usuário"
                imagemSrc={usuario}
                onClick={() => setModalLoginAberto(true)}
              />

              <ModalLoginUsuario
                aberta={modalLoginAberto}
                aoFechar={() => setModalLoginAberto(false)}
                aoEfetuarLogin={aoEfetuarLogin}
              />
            </li>
            <li>
              <BotaoNavegacao
                texto="Cadastrar-se"
                textoAltSrc="Icone representando um usuário"
                imagemSrc={usuario}
                onClick={() => setModalCadastroAberto(true)}
              />

              <ModalCadastroUsuario
                aberta={modalCadastroAberto}
                aoFechar={() => setModalCadastroAberto(false)}
              />
            </li>
          </>
        )}

        {usuarioEstaLogado && (
          <>
            <li>
              <Link to="/minha-conta/pedidos">Minha Conta</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default BarraNavegacao;
