import './App.css';
import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	 handleChange = (e) => {
		this.setState({searchField: e.target.value}, () =>
			 console.log(this.state)
		 )
	 }

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(user => this.setState({monsters: user}))
	}

	render() {
		// const monsters = this.state.monsters;
		// const searchField = this.state.searchField;
		// the above code is equal to the below code:
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
		monster.name.toLowerCase().includes(searchField.toLowerCase()))
		return (
			<div className="App">
				<SearchBox
					placeholder='search monsters'
					handleChange={(e) => this.handleChange(e)}
				/>
				{/*<CardList monsters={this.state.monsters}/>*/}
				<CardList monsters={filteredMonsters}/>
			</div>
		);
	}
}

export default App;
