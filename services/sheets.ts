import { sheets } from '@googleapis/sheets';

const sheetId = process.env.GOOGLE_SHEET_ID;

const gsheets = sheets({
  version: 'v4',
  auth: process.env.GOOGLE_API_KEY
});

export default async (): Promise<unknown[] | undefined> => {
  const spreadsheets = await gsheets.spreadsheets.get({
    spreadsheetId: sheetId
  });
  if (spreadsheets?.data?.sheets) {
    const promises = spreadsheets?.data?.sheets.map(sheet => {
      const title = sheet?.properties?.title;
      return new Promise((resolve, reject) => {
        gsheets.spreadsheets.values.get({
          spreadsheetId: sheetId,
          range: `${title}!A1:B`
        }, (err, res) => {
          if (err) {
            reject(err);
            return;
          }
          resolve({
            title,
            data: res?.data.values
          });
        });
      })
    });

    return await Promise.all(promises);
  }
};
