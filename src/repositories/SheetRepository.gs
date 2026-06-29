function getDatabase() {
  return SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
}

function getSheetByName(sheetName) {
  const ss = getDatabase();
  const sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    throw new Error('Sheet not found: ' + sheetName);
  }

  return sheet;
}

function getSheetData(sheetName) {
  const sheet = getSheetByName(sheetName);
  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return [];
  }

  const headers = values[0];
  const rows = values.slice(1);

  return rows.map(function(row) {
    const item = {};

    headers.forEach(function(header, index) {
      item[header] = row[index];
    });

    return item;
  });
}

function appendSheetRow(sheetName, data) {
  const sheet = getSheetByName(sheetName);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  const row = headers.map(function(header) {
    return data.hasOwnProperty(header) ? data[header] : '';
  });

  sheet.appendRow(row);

  return data;
}
