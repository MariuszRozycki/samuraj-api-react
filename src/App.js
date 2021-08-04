import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response)
        this.setState({ users })

      }
    }
    xhr.send()
  }

  render() {

    const users = this.state.users.map(user => (
      <div key={user.id}>
        <h4>User name: {user.name}</h4>
        <p>User street: {user.address.street}</p>
      </div>
    )
    );



    return (
      <div className="App">
        {users}
      </div>
    );
  }
}

export default App;
