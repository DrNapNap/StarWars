import React, { Component } from 'react';
//import Drnapnap from './components/tist'
import axios from 'axios'


export class App extends Component {
  state = {
    nap:[]
  }

  componentDidMount(){
    axios.get('https://swapi.co/api/people')
    .then(res =>{
        this.setState({
            nap:res.data.results.slice(0,5)
        })
    });
}

render() {
 const allpersoer = this.state.nap;
      const persoerListe = allpersoer.map ((person, index) =>{

return(
  <div key={index}>
  name: {person.name}
  <br/>
  Height: {person.mass}
  </div>
)
      });

return(
  <div>
    <h1>personer</h1>
    {persoerListe}
  </div>
)

}
}
export default App
