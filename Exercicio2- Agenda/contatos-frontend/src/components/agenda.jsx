import React, { useState, useEffect } from 'react'
import '../../public/Resources/materialize/css/materialize.css'
import axios from 'axios'

const URL = 'http://localhost:3003/api/contatos'

export default props => {
    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tipo, setTipo] = useState('');
    const [botao, setBotao] = useState('Cadastrar Contato')
    const [filtro, setFiltro] = useState('')
    const [id, setId] = useState(0);
    const [carregaDados,setCarregaDados] = useState(0)

    const salvarContato = (e) => {
        if(botao=="Cadastrar Contato"){
            axios.post(URL, { nome, telefone, endereco, tipo }).then(resp => recarrega())
        }else{
            axios.put(`${URL}/${id}`,{ nome, telefone, endereco, tipo }).then(resp => recarrega());
            setNome('')
            setTelefone('')
            setEndereco('')
            setTipo('')
            setBotao("Cadastrar Contato")
        }
    }

    const recarrega = () => {
        axios.get(`${URL}?sort=nome`).then(resp => setContatos(resp.data))
    }

    const excluirContato = (contato) => {
        axios.delete(`${URL}/${contato._id}`).then(resp =>  recarrega());
    }

    const editarContato = (contato) => {
        setBotao("Atualizar Contato");
        setNome(contato.nome)
        setEndereco(contato.endereco);
        setTelefone(contato.telefone);
        setTipo(contato.tipo);
        setId(contato._id)
    };

    useEffect(() => {
        if(carregaDados == 0){
           axios.get(`${URL}?sort=nome`).then(resp => setContatos(resp.data))
            setCarregaDados(1)
        } 
      });

    return (
        
        <div>
            <div style={{ width: "400px", marginLeft: "700px", marginTop: "30px" }}>
                <form>
                    <input text="text" value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)}></input>
                    <input text="text" value={telefone} placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} ></input>
                    <input text="text" value={endereco} placeholder="Endereco" onChange={(e) => setEndereco(e.target.value)}></input>
                    <input text="text" value={tipo} placeholder="Tipo" onChange={(e) => setTipo(e.target.value)}></input>
                    <button onClick={(e) => salvarContato(e)} className="waves-effect waves-light btn" style={{ width: "400px" }}>{botao}</button>
                </form>
            </div>
            <div style={{ marginTop: "70px", marginLeft: "330px", marginRight: "10px" }}>
                <input text="text" className="striped container" placeholder="Pesquisar Contato"  onChange={(e) => setFiltro(e.target.value)}></input>
            </div>
            <table className="striped container" style={{ marginTop: "70px", marginLeft: "330px", marginRight: "10px" }}>
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
                    {contatos.map((contato) => {
                       if (filtro === '' || contato.nome.toString().includes(filtro)) {
                            return (<tr key={contato._id}>
                                <td style={{ textAlign: "center" }}>{contato.nome}</td>
                                <td style={{ textAlign: "center" }}>{contato.telefone}</td>
                                <td style={{ textAlign: "center" }}>{contato.endereco}</td>
                                <td style={{ textAlign: "center" }}>{contato.tipo}</td>
                                <td style={{ textAlign: "center" }}>
                                    <button onClick={(e) => excluirContato(contato)} >Excluir</button>
                                    <button style={{ marginLeft: "3px" } } onClick={(e) => editarContato(contato)} >Editar</button>
                                </td>
                            </tr>);
                        }
                    })}
                </tbody>
            </table>
        </div >
    )


}