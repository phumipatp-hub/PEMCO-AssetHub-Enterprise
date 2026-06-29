function getVendors() {
  return getRecords(CONFIG.SHEETS.ASSET_VENDORS).map(function(row) {
    return {
      vendor_id: row.vendor_id || '',
      vendor_code: row.vendor_code || '',
      vendor_name: row.vendor_name || '',
      contact_name: row.contact_name || '',
      phone: row.phone || '',
      email: row.email || '',
      address: row.address || '',
      description: row.description || '',
      is_active: row.is_active
    };
  });
}

function createVendor(vendor) {
  const newVendor = {
    vendor_id: Utilities.getUuid(),
    vendor_code: vendor.vendor_code || '',
    vendor_name: vendor.vendor_name || '',
    contact_name: vendor.contact_name || '',
    phone: vendor.phone || '',
    email: vendor.email || '',
    address: vendor.address || '',
    description: vendor.description || ''
  };

  return createRecord(CONFIG.SHEETS.ASSET_VENDORS, newVendor);
}

function updateVendor(vendorId, vendor) {
  return updateRecord(CONFIG.SHEETS.ASSET_VENDORS, 'vendor_id', vendorId, {
    vendor_code: vendor.vendor_code || '',
    vendor_name: vendor.vendor_name || '',
    contact_name: vendor.contact_name || '',
    phone: vendor.phone || '',
    email: vendor.email || '',
    address: vendor.address || '',
    description: vendor.description || ''
  });
}

function deleteVendor(vendorId) {
  return deleteRecord(CONFIG.SHEETS.ASSET_VENDORS, 'vendor_id', vendorId);
}