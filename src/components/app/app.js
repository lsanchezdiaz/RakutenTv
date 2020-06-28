import React, { Component} from "react";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello, Luis!</h1>
      </div>
    );
  }
  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/lists/populares-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es`, { method: 'GET', mode: 'cors' })
    .then(response => {
      return response.text()
    })
    .then((data) => {
      console.log(data ? JSON.parse(data) : {})
    })
  }
}

export default App;