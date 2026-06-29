function doGet(e) {
  return HtmlService
    .createTemplateFromFile('ui/index')
    .evaluate()
    .setTitle(CONFIG.APP_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getDashboardSummary() {
  return {
    totalAssets: 245,
    availableAssets: 32,
    repairAssets: 5,
    openTickets: 12,
    expiringLicenses: 3
  };
}
