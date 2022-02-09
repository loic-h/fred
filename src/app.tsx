import { Component } from 'preact';
import Router from 'preact-router';
import sheetsApi from './api/sheets';
import Home from './pages/Home';
export class App extends Component {
  async componentDidMount() {
    console.log('componentDidMount')
    try {
      const sheets = await sheetsApi.get();
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Router>
        <Home path="/" />
      </Router>
    )
  }
}
