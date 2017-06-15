import React, { Component } from 'react';
import Topo from './Topo';
import Pokemon from './Pokemon';
import Descricao from './Descricao';
import PokemonForm from './PokemonForm';
import jQuery from 'jquery';

class Pokedex extends Component {
    constructor(){
        super();
        this.state = {
            pokemons : [],
            nome: "",
            descricao: "",
            forca: ""
            // pokemons : [{id:1, imagem:"pikachu.png", nome:"titulo1", descricao:"descricao", forca:"10"},
            // {id:2, imagem:"pidgey.png", nome:"titulo2", descricao:"descricao2", forca:"20"}]
        }
    }

    componentWillMount(){
        this._buscarEstorias();
    }

    componentDidMount() {
        this._timer = setInterval(() => this._buscarEstorias(), 1000);
   }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

     _buscarEstorias() {
       jQuery.ajax({
         method: 'GET',
         url: 'http://localhost:3001/pokemons',
         success: (pokemons) => {
                this.setState({pokemons})
         }
       });
    }

      _detalhePokemons(id,nome,descricao, forca) {
       
        this.setState({pokemons: this.state.pokemons, nome: nome, descricao: descricao, forca: forca});
    }

   _excluirPokemons(pokemonId) {
        jQuery.ajax({
        method: 'DELETE',
        url: `http://localhost:3001/pokemons/${pokemonId}`
        });
        const pokemons = [...this.state.pokemons];
        pokemons.splice(pokemonId, 1);
        this.setState({pokemons});
    }


  render() {
    const listsPokemons = this._getPokemons();
    return (<div>
     <div className="box oswald cor">
        <Topo />      
        <h4>Meus Pokemons</h4>
         <div className="row">  
                {listsPokemons}
         </div>   

         <br/>
        <Descricao nome={this.state.nome} descricao={this.state.descricao} forca={this.state.forca} />
        <PokemonForm  adicionarPokemon={this._adicionarPokemon.bind(this)}/>
        </div>
    </div>
    );
  }

  
    _getPokemons(){      

         return this.state.pokemons.map(pokemon =>
                <Pokemon imagem={pokemon.imagem} nome={pokemon.nome} descricao={pokemon.descricao} forca={pokemon.forca}
                key={pokemon.id}
                id={pokemon.id}
                onDelete={this._excluirPokemons.bind(this)}
                onDetalhe={this._detalhePokemons.bind(this)}
                
        />);
    }

    _adicionarPokemon(nome, imagem, descricao, forca) {

        this.setState({pokemons:this.state.pokemons.concat(
            [{id:this.state.pokemons.length + 1, imagem:nome+".png" , descricao: descricao, forca: forca}])})
        //      const estoria = { titulo, descricao, pontos};
        //         jQuery.post('http://localhost:3001/pokemons', estoria )
        //                     .success(novaEstoria => {
        //                         this.setState({estorias:this.state.estorias.concat([novaEstoria]) }
        //                     );
        //         });
        //     }

        const pokemon = { nome, imagem,descricao, forca};
        jQuery.post('http://localhost:3001/pokemons', pokemon )
                     .success(novoPokemon => {
                        this.setState({pokemons:this.state.pokemons.concat([novoPokemon]) }
                    );
        });
    }
}

export default Pokedex;