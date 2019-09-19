import React, { Component } from 'react'

class User extends React {
    reander() {
        return (
            <div>
                <div>
                    Hello Word!
                Nome: {this.props.nome}
                </div>
                <div>

                    Foto: <img src={this.props.photo} />
                </div>
            </div>
        );


    }
}

export default User;

