import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const sheets = google.sheets({
  auth,
  version: "v4",
});

const response = await sheets.spreadsheets.values.append({
  spreadsheetId: process.env.SPREADSHEET_ID,
  range: "Sheet1!A2:C",
  valueInputOption: "USER_ENTERED",
  requestBody: {
    values: [Object.values(fields)],
  },
});
