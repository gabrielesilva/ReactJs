import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

export default class Step2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            passwd:'',
            confirmPasswd:''
        }
    }
    handleChange = (event) => {
        const state = Object.assign({}, this.state);
        let field = event.taget.id;
        state[field] = event.target.value;

        this.setState(state); // altera o estado dos inputs (Objeto)
    }

    render() {
        return (
            <div class="mainNoColor geral">

                <Navbar />
                <section id="formSection">

                    <div class="header">
                        <p>Você está em
                    Página incial/Abertura de conta</p>
                        <p class="bold">Dados pessoais</p>
                    </div>

                    <div class="formContainer">
                        <form onSubmit={() => this.props.change(2, this.change)}>
                            <label class="cursorP" for="email">Email</label>
                            <input oonChange={(event) => this.handleChange(event)}id="email" type="text" placeholder="you@example.com.br" />
                            <label class="cursorP" for="passwd">Senha</label>
                            <input onChange={(event) => this.handleChange(event)}id="passwd" type="password" placeholder="***************" />
                            <label class="cursorP" for="confirmPasswd">Confirme a senha</label>
                            <input onChange={(event) => this.handleChange(event)}id="confirmPasswd" type="password" placeholder="***************" />
                            <div>
                                <button class="btnBlue" type="submit" href="#">Continuar</button>
                            </div>
                        </form>
                    </div>

                </section>

                <section id="infoContainer">
                    <p>Beleza, agora defina como você irá </p>
                    <p class="boldBlue">acessar</p>
                    <p>sua conta.</p>
                </section>

            </div>
        );
    }
}