import { Component, createContext } from 'preact';
import { Router, Route } from 'preact-router';
import sheetsApi from './api/sheets';
import Home from './pages/Home';
import Sheet from './pages/Sheet';
import { SheetsContext } from "./context/sheets";
import type { Sheets } from '../models/sheet';

interface AppProps {};
interface AppState {
  sheets: Sheets
};
export class App extends Component<AppProps, AppState> {
  constructor() {
    super();
    this.state = {
      sheets: []
    };
  }

  async componentDidMount() {
    try {
      const sheets = await sheetsApi.get();
      this.setState({ sheets });
      setTimeout(() => {
        this.setState({ sheets: [
          ...sheets,
          {
            title: 'test',
            data: []
          }
         ] });
      }, 1000);
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    console.log('render', this.state.sheets)
    return (
      <SheetsContext.Provider value={this.state.sheets}>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/sheet/:index" component={Sheet} />
        </Router>
      </SheetsContext.Provider>
    )
  }
}
