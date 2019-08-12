import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFieldString: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  filterMonsterList = e => (this.setState({searchFieldString: e.target.value}))

  render() {
    const {monsters, searchFieldString} = this.state,
          filteredMonsterList = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchFieldString.toLowerCase())
          );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={this.filterMonsterList}
        />
        <CardList monsters={filteredMonsterList} />
      </div>
    )
  }
}

export default App;
