import React, { Component } from "react"
import "../Resources/materialize/css/materialize.css"
export default class Formulario extends Component {

    constructor(props) {
        super(props);
        
        this.nome ="";
        this.telefone = "";
        this.endereco = "";
        this.tipo ="";
        this.index = this.props.index;
    }

    nomeHandler(evento) {
        this.setState({nome:evento.target.value});
        this.nome = evento.target.value;
    }
    telefoneHandler(evento) {
        this.setState({telefone:evento.target.value});
        this.telefone = evento.target.value;
    }
    enderecoHandler(evento) {
        this.setState({endereco:evento.target.value});       
        this.endereco = evento.target.value;
    }
    tipoHandler(evento) {
        this.setState({tipo:evento.target.value});
        this.tipo = evento.target.value;
    }
    criarContato(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarContato(this.nome, this.telefone, this.endereco, this.tipo);
    }
    atualizaContato(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.atualizaContato(this.state.nome, this.telefone, this.endereco, this.tipo,this.index);
    }


    render() {
        if (this.props.acaoBotao == "criar") {
            return (
                <div style={{ width: "400px", marginLeft: "700px", marginTop: "30px" }}>
                    <form onSubmit={this.criarContato.bind(this)}>
                        <input text="text" placeholder="Nome" onChange={this.nomeHandler.bind(this)}></input>
                        <input text="text" placeholder="Telefone" onChange={this.telefoneHandler.bind(this)}></input>
                        <input text="text" placeholder="Endereco" onChange={this.enderecoHandler.bind(this)}></input>
                        <input text="text" placeholder="Tipo" onChange={this.tipoHandler.bind(this)}></input>
                        <button class="waves-effect waves-light btn" style={{ width: "400px" }}>Criar Contato</button>
                    </form>
                </div>
            );
        }
        else{
            return (
                <div style={{ width: "400px", marginLeft: "700px", marginTop: "30px" }}>
                    <form onSubmit={this.atualizaContato.bind(this)}>
                        <input text="text" value={this.props.contatoAtual.nome} placeholder="Nome" onChange={this.nomeHandler.bind(this)}></input>
                        <input text="text" value={this.props.contatoAtual.telefone} placeholder="Telefone" onChange={this.telefoneHandler.bind(this)}></input>
                        <input text="text" value={this.props.contatoAtual.endereco} placeholder="Endereco" onChange={this.enderecoHandler.bind(this)}></input>
                        <input text="text" value={this.props.contatoAtual.tipo} placeholder="Tipo" onChange={this.tipoHandler.bind(this)}></input>
                        <button class="waves-effect waves-light btn" style={{ width: "400px" }}>Atualizar Contato</button>
                    </form>
                </div>
            );
        }
    }
}