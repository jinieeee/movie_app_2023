import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('hello');
  }

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('I just updated');
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
    count : current.count + 1,
    }));
  };
  
  minus = () => {
    this.setState(current => ({
      count : current.count - 1,
      }));
  }

  // React.Component 상속
  // class 컴포넌트는 JSX를 바로 리턴할 수 없어 render() 메소드를 통해 구현
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;