import React, { Component } from 'react';
import Topo from './Topo';
import Rodape from './Rodape';
import TaskBoard from './Taskboard';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (<div>
      {/*<Topo />*/}
      {/*<TaskBoard />*/}
      {/*<Rodape />*/}
      <Pokedex />
    </div>
    );
  }
}

export default App;