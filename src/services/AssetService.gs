function getAssets() {
  const rows = getSheetData(CONFIG.SHEETS.ASSETS);

  return rows
    .filter(function(row) {
      return row.is_active === true || row.is_active === 'TRUE' || row.is_active === 'true' || row.is_active === '';
    })
    .map(function(row) {
      return {
        asset_id: row.asset_id || '',
        asset_code: row.asset_code || '',
        asset_name: row.asset_name || '',
        category_id: row.category_id || '',
        brand_id: row.brand_id || '',
        model: row.model || '',
        serial_number: row.serial_number || '',
        owner_user_id: row.owner_user_id || '',
        location_id: row.location_id || '',
        status_id: row.status_id || '',
        remark: row.remark || ''
      };
    });
}