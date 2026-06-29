function getMasterData() {
  return {
    categories: getSheetData(CONFIG.SHEETS.ASSET_CATEGORIES),
    brands: getSheetData(CONFIG.SHEETS.ASSET_BRANDS),
    vendors: getSheetData(CONFIG.SHEETS.ASSET_VENDORS),
    departments: getSheetData(CONFIG.SHEETS.DEPARTMENTS),
    locations: getSheetData(CONFIG.SHEETS.LOCATIONS),
    statuses: getSheetData(CONFIG.SHEETS.ASSET_STATUSES)
  };
}