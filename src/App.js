import React from "react"
import './App.css';

class App extends React.Component{
  constructor(){
    super();
     this.state={
       brand:"Ford",
       model:"1999",
       color:"red",
     }
     
  }

  ChangeColor(){
     this.setState(
       {
        brand:"Ford",
        model:"1999",
        color:"Blue",
       }
     )
  }
  
  render(){
    
    return(
      <div>
         <h1>The Name of Car {this.state.name}</h1>
    <h1>The Model of Car {this.state.model}</h1>
    <h1>The color Of  Car {this.state.color}</h1>

    <button onClick={this.ChangeColor.bind(this)}>Change The Color of Car </button>
      </div>
    )
  }
}


export default App;
