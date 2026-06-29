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
function addAsset(asset) {
  const now = new Date();

  const newAsset = {
    asset_id: Utilities.getUuid(),
    asset_code: asset.asset_code || '',
    asset_name: asset.asset_name || '',
    category_id: asset.category_id || '',
    brand_id: asset.brand_id || '',
    vendor_id: asset.vendor_id || '',
    model: asset.model || '',
    serial_number: asset.serial_number || '',
    purchase_date: asset.purchase_date || '',
    warranty_start_date: asset.warranty_start_date || '',
    warranty_end_date: asset.warranty_end_date || '',
    owner_user_id: asset.owner_user_id || '',
    department_id: asset.department_id || '',
    location_id: asset.location_id || '',
    status_id: asset.status_id || 'AVAILABLE',
    remark: asset.remark || '',
    created_at: now,
    created_by: 'admin',
    updated_at: now,
    updated_by: 'admin',
    is_active: true
  };

  appendSheetRow(CONFIG.SHEETS.ASSETS, newAsset);

  return newAsset;
}