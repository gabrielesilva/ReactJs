import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {

    render() {
        return (
            <div class="geral mainBackground">
                <NavBar />
                <section>
                    <div id="notFound"></div>
                    <span>Ops! Página não encontrada.</span>
                    <Link to="/">
                        <button class="itensHovered btnOutline btnDefault">Voltar</button>
                    </Link>
                </section>
            </div >
        );
    }
}