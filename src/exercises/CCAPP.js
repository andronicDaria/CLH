import logo from './logo.svg';
import './App.css';
import React from 'react';
import { from } from 'rxjs';
import { map, filter, delay, mergeMap } from 'rxjs/operators';

let numbersObservable = from([1, 2, 3, 4, 5]);
let squaredNumbers = numbersObservable.pipe(
  filter((val) => val > 2),
  mergeMap((val) => from([val]).pipe(delay(1000 * val))),
  map((val) => val * val)
);

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentNumber: 0 };
  }
  componentDidMount() {
    this.subscription = squaredNumbers.subscribe((result) => {
      this.setState({ currentNumber: result });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <h1>Hellog</h1>
        <p>Current number is: {this.state.currentNumber}</p>
      </div>
    );
  }
}

export default App;
