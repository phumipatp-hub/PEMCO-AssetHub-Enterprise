function getRecords(sheetName) {
  return getSheetData(sheetName).filter(function(row) {
    return row.is_active === true ||
      row.is_active === 'TRUE' ||
      row.is_active === 'true' ||
      row.is_active === '' ||
      row.is_active === undefined;
  });
}

function createRecord(sheetName, record) {
  const now = new Date();

  record.created_at = record.created_at || now;
  record.created_by = record.created_by || 'admin';
  record.updated_at = record.updated_at || now;
  record.updated_by = record.updated_by || 'admin';

  if (record.is_active === undefined || record.is_active === '') {
    record.is_active = true;
  }

  appendSheetRow(sheetName, record);
  return record;
}

function updateRecord(sheetName, idColumn, idValue, updates) {
  const sheet = getSheetByName(sheetName);
  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    throw new Error('No data found in sheet: ' + sheetName);
  }

  const headers = values[0];
  const idIndex = headers.indexOf(idColumn);

  if (idIndex === -1) {
    throw new Error('ID column not found: ' + idColumn);
  }

  for (let i = 1; i < values.length; i++) {
    if (String(values[i][idIndex]) === String(idValue)) {
      headers.forEach(function(header, index) {
        if (updates.hasOwnProperty(header)) {
          sheet.getRange(i + 1, index + 1).setValue(updates[header]);
        }
      });

      const updatedAtIndex = headers.indexOf('updated_at');
      const updatedByIndex = headers.indexOf('updated_by');

      if (updatedAtIndex !== -1) {
        sheet.getRange(i + 1, updatedAtIndex + 1).setValue(new Date());
      }

      if (updatedByIndex !== -1) {
        sheet.getRange(i + 1, updatedByIndex + 1).setValue('admin');
      }

      return true;
    }
  }

  throw new Error('Record not found: ' + idValue);
}

function deleteRecord(sheetName, idColumn, idValue) {
  return updateRecord(sheetName, idColumn, idValue, {
    is_active: false
  });
}