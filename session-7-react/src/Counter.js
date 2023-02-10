import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    console.log("Constructor");
    console.log("------------");
    super(props);
    this.state = { counter: 0, comments: [] };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  async componentDidMount() {
    console.log("componentDidMount");
    console.log("------------");

    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await resp.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    // .then((resp) => resp.json())
    // .then((data) => data.map(com => console.log(com.name)));

    // this.setState({ comments: values });
  }

  render() {
    console.log("RENDER");
    console.log("------------");
    return (
      <>
        <div>Counter value: {this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }

  componentDidUpdate(prepProps, prevState) {
    console.log("prevState", prevState);
    console.log("componentDidUpdate");
    console.log("------------");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log("------------");
  }
}

export default Counter;
