import { readable } from 'svelte/store';
import sheetsApi from '../api/sheets';

console.log(sheetsApi)

export const sheets = readable(null, (set) => {
  console.log('stores sheets')
  sheetsApi
    .get()
    .then(sheets => {
      console.log('stores sheets success ', sheets)
      set(sheets);
    })
    .catch(e => console.log(e));
  return () => {};
})
