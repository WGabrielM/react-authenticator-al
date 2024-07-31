import { AbBotao } from "ds-alurabooks";

import "./Pedidos.css";


const Pedidos = () => {
  return (
    <section className="pedidos">
      <h1>Meus pedidos</h1>
      <ul className="pedido">
        <li>
          Pedido: <strong>123456</strong>
        </li>
        <li>
          Data do pedido: <strong>12/09/2022</strong>
        </li>
        <li>
          Valor total: <strong>R$ 42.00</strong>
        </li>
        <li>
          Entrega realizada em: <strong>13/09/2022</strong>
        </li>
      </ul>
      <AbBotao texto="Detalhes"/>
    </section>
  );
};

export default Pedidos;
