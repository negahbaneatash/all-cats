import React, {Component} from 'react';
import './App.css';
import './Components/Card-List/card.list.component'
import { CardList } from './Components/Card-List/card.list.component';
import { SearchBox } from './Components/Card-List/searchbox.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn ReactJS
//         </a>
//       </header>
//     </div>
//   );
// }

class myApp extends Component {
  constructor(){
    super()

    this.state={
      monsters: [
        {name: "Frankstein"},
        {name: "Drakula"},
        {name: "Zombieeeee"}
      ],
      searchString: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then((webMonsters)=>{this.setState({monsters:webMonsters})})
    
  }

  render(){
    return (
      
      <div className="App">
        <h1>Beautiful Cats</h1>
      <SearchBox placeHolder="Search Cats"
        handleChange={e=>this.setState({searchString:e.target.value}) }
      />
      {/* <input placeholder="search cats" 
        onInput={
        (e)=>{
          this.setState({searchString:e.target.value},()=>console.log(this.state.searchString))
          
          }
        }
      
      /> */}
      <CardList propMonsters={this.state.monsters} searchSt={this.state.searchString}>
      </CardList>    
        
      </div>
      
    );
  
  }
}

export default myApp;

// next time start from 30