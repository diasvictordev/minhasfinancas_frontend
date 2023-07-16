import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { withRouter } from 'react-router-dom';
import UsuarioService from "../app/service/usuarioService";
import {mensagemSucesso, mensagemErro} from '../components/toastr'

class CadastroUsuario extends React.Component{

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    cadastrar = () =>{
        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }
        this.service.salvar(usuario)
        .then(response =>{
                mensagemSucesso('Usuário cadastrado com sucesso! Faça o login para acessar.')
                this.props.history.push('/login')
            }
        ).catch(error =>{
            mensagemErro(error.response.data)
        })
    }
    cancelar = () =>{
        this.props.history.push('/login')
    }
    render(){
        return(
            <div className="container">
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome:  *" htmlFor="inputNome">
                                    <input type="text" id="inputNome" name="nome" className="form-control"
                                    onChange={e => this.setState({nome: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Email:  *" htmlFor="inputEmail">
                                    <input type="email" id="inputEmail" name="email" className="form-control"
                                    onChange={e => this.setState({email: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Senha:  *" htmlFor="inputSenha">
                                    <input type="password" id="inputSenha" name="senha" className="form-control"
                                    onChange={e => this.setState({senha: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Repita a senha:  *" htmlFor="inputRepitaSenha">
                                    <input type="password" id="inputRepitaSenha" name="senha" className="form-control"
                                    onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                                </FormGroup>
                                <button type="button" className="btn btn-success" onClick={this.cadastrar}>Salvar</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancelar}>Cancelar</button>

                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(CadastroUsuario);