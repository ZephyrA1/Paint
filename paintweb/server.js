const express = require('express');
const { google } = require('googleapis');
const app = express();
const port = 3000;

const credentials = require('./path-to-your-credentials-file.json');
const sheets = google.sheets('v4');

app.get('/', async (req, res) => {
  const auth = await authorize(credentials);
  const spreadsheetId = '1UfRo6C7R7tnJfujWY_2CB3kouB2QN1lzGHm8ylqN8HE';
  const range = 'Sheet1'; // Update with your sheet name or range

  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range,
  });

  const values = response.data.values;
  res.json(values);
});

async function authorize(credentials) {
  // Your authorization code goes here
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
