import createStore from 'unistore'
import { Provider, connect } from 'unistore/preact'
import sheetsApi from '../api/sheets';
import type { Sheets } from '../../models/sheet';
import type { Store } from 'unistore';

const store = createStore({ sheets: [] as Sheets });

type sheetsStore = {
  sheets: Sheets;
}

const actions = {
  add: ({ sheets }: sheetsStore) => ({ sheets })
};

const actionFunctions = (store: Store<Sheets>) => ({
  async add() {
    try {
      const sheets = await sheetsApi.get();
      store.setState({ sheets } as Pick<Sheets, string extends Sheets>);
    } catch(e) {
      throw new Error(e as string | undefined);
    }
  }
});
