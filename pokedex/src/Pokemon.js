import React, { Component } from 'react';

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      exibirPokemon: false
    }
  }

  _handleClick(event) {
    event.preventDefault();
    this.setState({
      exibirPokemon: !this.state.exibirPokemon
    });
  }



  render() {
 

    return (<div>     
        <div className="col-1">
           <a  href="#" >
           <img src={"css/minimalmd.css/images/" + this.props.imagem} />
           </a>
            <div className="row">
               <button onClick={this._handleDetalhe.bind(this)}>Detalhes</button>
               <button onClick={this._handleDelete.bind(this)}>Excluir</button>
            </div>
          
      </div>
    </div>);
  }

    _handleDelete(event) {
      event.preventDefault();
      this.props.onDelete(this.props.id);
  }

    _handleDetalhe(event) {
      event.preventDefault();
      this.props.onDetalhe(this.props.id,this.props.nome,this.props.descricao, this.props.forca );
  }

   _handleClick(event) {
      event.preventDefault();
      
  }
}

export default Pokemon;