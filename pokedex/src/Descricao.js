import React, { Component } from 'react';

class Descricao extends Component {
    render() {
        return (<div>
          
        <div className="row">
            <div className="col-6">
            <h5>Caracteristicas</h5>
            <table className="zebrado">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Força</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>{this.props.nome}</td>
                    <td>{this.props.descricao}</td>
                    <td>{this.props.forca}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>);
    }
}

export default Descricao;