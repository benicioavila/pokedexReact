import React, { Component } from 'react';
import Estoria from './Estoria';
import EstoriaForm from './EstoriaForm';
import jQuery from 'jquery';
class Taskboard extends Component {

    _excluirEstoria(estoriaId) {
        jQuery.ajax({
        method: 'DELETE',
        url: `http://localhost:3001/pokemons/${estoriaId}`
        });
        const estorias = [...this.state.estorias];
        estorias.splice(estoriaId, 1);
        this.setState({estorias});
    }

    componentWillMount(){
        this._buscarEstorias();
    }

    componentDidMount() {
        this._timer = setInterval(() => this._buscarEstorias(), 5000);
   }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    constructor(){
        super();
        this.state = {
            estorias : []
            //estorias : [{id:1, titulo:"titulo1", descricao:"descricao", pontos:"10"},
            //{id:2, titulo:"titulo2", descricao:"descricao2", pontos:"20"}]
        }
    }

     _buscarEstorias() {
       jQuery.ajax({
         method: 'GET',
         url: 'http://localhost:3001/pokemons',
         success: (estorias) => {
                this.setState({estorias})
         }
       });
    }

    render() {
        const estorias = this._getEstorias();
        return (<div>
            <div className="section no-pad-bot" id="index-banner">
            <div className="container">
            <h1 className="header center orange-text">Estórias</h1>
            <h3>2 estórias</h3>
            {estorias}
            <EstoriaForm adicionarEstoria={this._adicionarEstoria.bind(this)} />                
            </div>
            </div>       
        </div>);
    }

    _getEstorias(){      

         return this.state.estorias.map(estoria =>
                <Estoria titulo={estoria.titulo} descricao={estoria.descricao} pontos={estoria.pontos}
                key={estoria.id}
                id={estoria.id}
                onDelete={this._excluirEstoria.bind(this)}
/>);
    }

    _adicionarEstoria(titulo, pontos, descricao) {
        const estoria = { titulo, descricao, pontos};
        jQuery.post('http://localhost:3001/pokemons', estoria )
                     .success(novaEstoria => {
                        this.setState({estorias:this.state.estorias.concat([novaEstoria]) }
                    );
        });
    }
}

export default Taskboard;