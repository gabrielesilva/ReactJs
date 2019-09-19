import React, { Component } from 'react'
import User from './User'
import photo from './user.png'

class Test extends Component {
    reander() {
        return (
            <div> Primeiros Passos com React
           <User name="Gabriele Costa" photo={photo}></User>
                <User name="Bruno Donatelli"></User>
                <User name="Francisco Viana"></User>
            </div>
        );
    }
}