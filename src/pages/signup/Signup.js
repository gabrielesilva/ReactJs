import React, { Component } from 'react';
import Step1 from './step1/Step1';
import Step2 from './step2/Step2';
export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actualPage: 0,
            info: []

        }
    }

    handlePage = () => {
        switch (this.state.actualPage) {
            case 1:
                return <Step2 change={this.changePage} />
            case 2:
                return <h1> Página 03</h1>
            default:
                return <Step1  change={this.changePage}/>
        }
    }

    changePage = (page, data) => {
        const state = Object.assign({}, this.state);

        state.actualPage = page;

        state.info.push(data);

        this.setState(state);
    }

    render() {
        console.log(this.state)
        return this.handlePage();
    }
}