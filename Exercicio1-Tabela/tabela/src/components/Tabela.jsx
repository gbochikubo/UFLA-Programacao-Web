import React, { Component } from "react"
import "../Resources/materialize/css/materialize.css"

export default class Tabela extends Component {

  constructor(props) {
    super(props);
    this.filtro = "";
  }
  contatoHandler = (contato, index) => {
    this.props.editarContato(contato, index);
  }

  filtroHandler = (valor) => {
    this.filtro=valor;
    this.setState({filtro:valor});
  }

  render() {
    return (
      <section>
        <div style={{ marginTop: "70px", marginLeft: "330px", marginRight: "10px" }}>
          <input text="text" class="striped container" onInput={(e) => this.filtroHandler(e.target.value)} placeholder="Pesquisar Contato"></input>
        </div>
        <table class="striped container" style={{ marginTop: "70px", marginLeft: "330px", marginRight: "10px" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Nome</th>
              <th style={{ textAlign: "center" }}>Telefone</th>
              <th style={{ textAlign: "center" }}>Endereço</th>
              <th style={{ textAlign: "center" }}>Tipo</th>
              <th style={{ textAlign: "center" }}>Ações</th>

            </tr>

          </thead>
          <tbody>
            {this.props.contatos.map((contato, index) => {
              if (this.filtro === '' || contato.nome.toString().includes(this.filtro)) {
                return (<tr key={index}>
                  <td style={{ textAlign: "center" }}>{contato.nome}</td>
                  <td style={{ textAlign: "center" }}>{contato.telefone}</td>
                  <td style={{ textAlign: "center" }}>{contato.endereco}</td>
                  <td style={{ textAlign: "center" }}>{contato.tipo}</td>
                  <td style={{ textAlign: "center" }}>
                    <button onClick={this.props.deletarContato}>Excluir</button>
                    <button style={{ marginLeft: "3px" }} onClick={(e) => this.contatoHandler(contato, index)}>Editar</button>
                  </td>
                </tr>);
              }
            })}
          </tbody>
        </table>
      </section>
    );
  }
}