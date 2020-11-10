import React, { Component } from "react"
import Tabela from "./components/Tabela"
import Formulario from "./components/Formulario"

class App extends Component {

  constructor(){
    super();
    this.contatos = [];
    this.state= {};
    this.acaoBotao = "criar";
    this.index = 0;
    this.state = {
      contatoAtual: {nome: '', telefone: '', endereco: '',tipo: '' },
      index: 0
    }
  }

  criarContato(nome, telefone, endereco, tipo){
    const novoContato = {nome,telefone, endereco, tipo};
    this.contatos.push(novoContato);
    this.setState({
      contatos:this.contatos
    })
  }

  deletarContato(){
    let arrayContatos = this.state.contatos;
    arrayContatos.splice(0,1);
    this.setState({contatos:arrayContatos});
  }
  atualizaContato(nome, telefone, endereco, tipo, index){
    const contatoAtualizado = {nome,telefone, endereco, tipo};
    this.contatos[index] = contatoAtualizado;
    this.setState({
      contatos:this.contatos
    })
    this.acaoBotao = "criar";
    this.setState({acaoBotao:"criar"});
  }

  editarContato(contato,index){
    console.log(contato.nome)
    this.index=index;
    this.setState({index: index})
    console.log(this.index);
    this.contatoAtual=contato;
    this.setState({contatoAtual:contato});
    this.acaoBotao = "atualizar";
    this.setState({acaoBotao:"atualizar"});
  }

  render(){
    return (
      <section>
        <Formulario criarContato ={this.criarContato.bind(this)}
        atualizaContato={this.atualizaContato.bind(this)} 
        acaoBotao={this.acaoBotao}
        contatoAtual={this.state.contatoAtual} index={this.index}></Formulario>
        <Tabela contatos={this.contatos}
         deletarContato={this.deletarContato.bind(this)}
         editarContato={this.editarContato.bind(this)}></Tabela>
      </section> 
    );
  }
}

export default App;
