import React, { Component } from 'react';

class PokemonForm extends Component {
    render() {
        return(
            <div className="row">
                <form className="col s12" onSubmit={this._handleSubmit.bind(this)}>
                    <div className="col-6">
                    <h5>Adicionar um Pokemon</h5>
                    <label> Nome </label>
                    <input type="texto" ref={ input => this._nome = input}/>
                    <label> Descricao </label>  
                    <input type="texto" ref={ input => this._descricao = input}/>
                    <label> Força </label>
                    <input type="texto" ref={ input => this._forca = input}/>
                    <input type="submit" value="Salvar"/>
                    </div>
                </form>
            </div>
        );
    }

   _handleSubmit(event) {
        event.preventDefault();
       let nome = this._nome.value;
       let imagem = this._nome.value + ".png";
       let forca = this._forca.value;
       let descricao = this._descricao.value;
       this.props.adicionarPokemon(nome, imagem, descricao, forca);
   }
}

export default PokemonForm;