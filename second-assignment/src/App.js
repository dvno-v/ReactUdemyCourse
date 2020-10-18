import React from 'react';
import './App.css';
import ValidationTextComponent from './ValidationTextComponent/ValidationTextComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends React.Component {
  state = {
    text:''
  }

  changeTextHandler = (event) => {
    this.setState({text: event.target.value});
  }

  removeCharHandler = (index) => {
    const text = this.state.text.split('').filter((e, i) => i !== index).join('');
    this.setState({text});
  }

  render(){
    return (
      <div className="App">
        <input value={this.state.text} onChange={this.changeTextHandler} />
        <p>{this.state.text.length}</p>
        <ValidationTextComponent textLength={this.state.text.length} />
        <ul style={{
          display: 'inline-block',
          padding: '16px',
          textAlign: 'center',
          margin: '16px',
          border: '1px solid black'
            }}>
          { this.state.text.split('').map((e, index) => <CharComponent click={this.removeCharHandler.bind(this, index)} key={e + index} char={e} />) }
        </ul>
      </div>
    );
  }
}

export default App;
