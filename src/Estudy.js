import React, { Component } from 'react'

class Test extends Component {
    render() {
       
    return <button onClick={() =>this.props.change(this.props.text)}>{this.props.text}</button>
           
    }
}

class TestTitle extends Component{
    render(){
        return <h2> Primeira Página {this.props.title}</h2>
    }
}
export default class App extends Component{
    constructor(props){  //serve para passar estados
      super(props);
      this.state = {
        btnAtual: ''
      }
    }
      //function handleChange
    handleChange = async(nome) => {
    await  this.setState({
        btnAtual: nome
      });
    }


  render(){ 
    console.log(this.state);
    return(
      <React.Fragment>
        <TestTitle title={ this.state.btnAtual } />
        <Test change={ this.handleChange } id="01" text='opção 01'/>
        <Test change={ this.handleChange } id="02" text='opção 02'/>
        <Test change={ this.handleChange } id="03" text='opção 03'/>
      </React.Fragment>
    ) 

  }
}
