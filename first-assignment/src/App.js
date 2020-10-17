import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {
  state = {
    username: 'Enter Your Username'
  }

  changeUserNameHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        <UserInput username={this.state.username} changeUserNameHandler={this.changeUserNameHandler.bind(this)}></UserInput>
        <UserOutput username={this.state.username} ></UserOutput>
        <UserOutput username={this.state.username} ></UserOutput>
      </div>
      );  
    }
}

export default App;
