import "./App.css";
import { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showChild: false };

    this.show = () => this.setState({ showChild: true });
    this.hide = () => this.setState({ showChild: false });
  }

  render() {
    console.log("APP render");
    console.log("------------");

    return (
      <div className="App">
        <button onClick={this.show}>Show Counter</button>
        <button onClick={this.hide}>Hide Counter</button>
        {this.state.showChild && <Counter />}
      </div>
    );
  }
}

export default App;
