function initializeDatabase() {
  const ss = getDatabase();

  const schemas = {
    settings: ['setting_id','setting_key','setting_value','setting_type','description','created_at','created_by','updated_at','updated_by','is_active'],
    users: ['user_id','employee_code','full_name','email','phone','department_id','role_id','status','last_login_at','created_at','created_by','updated_at','updated_by','is_active'],
    roles: ['role_id','role_name','role_code','description','created_at','created_by','updated_at','updated_by','is_active'],
    departments: ['department_id','department_code','department_name','description','created_at','created_by','updated_at','updated_by','is_active'],
    locations: ['location_id','location_code','location_name','building','floor','room','description','created_at','created_by','updated_at','updated_by','is_active'],
    asset_categories: ['category_id','category_code','category_name','parent_category_id','description','created_at','created_by','updated_at','updated_by','is_active'],
    asset_brands: ['brand_id','brand_code','brand_name','description','created_at','created_by','updated_at','updated_by','is_active'],
    asset_vendors: ['vendor_id','vendor_code','vendor_name','contact_name','phone','email','address','description','created_at','created_by','updated_at','updated_by','is_active'],
    asset_statuses: ['status_id','status_code','status_name','description','created_at','created_by','updated_at','updated_by','is_active'],
    assets: ['asset_id','asset_code','asset_name','category_id','brand_id','vendor_id','model','serial_number','purchase_date','warranty_start_date','warranty_end_date','owner_user_id','department_id','location_id','status_id','remark','created_at','created_by','updated_at','updated_by','is_active'],
    asset_movements: ['movement_id','asset_id','from_user_id','to_user_id','from_location_id','to_location_id','movement_type','movement_date','remark','created_at','created_by','updated_at','updated_by','is_active'],
    asset_repairs: ['repair_id','asset_id','repair_date','repair_vendor_id','problem_description','repair_action','repair_cost','repair_status','return_date','remark','created_at','created_by','updated_at','updated_by','is_active'],
    tickets: ['ticket_id','ticket_no','requester_user_id','title','description','category','priority','status','assigned_to_user_id','opened_at','closed_at','remark','created_at','created_by','updated_at','updated_by','is_active'],
    licenses: ['license_id','license_code','license_name','license_type','vendor_id','purchase_date','expire_date','total_seats','used_seats','license_key','account_email','remark','created_at','created_by','updated_at','updated_by','is_active'],
    license_assignments: ['assignment_id','license_id','user_id','asset_id','assigned_date','unassigned_date','status','remark','created_at','created_by','updated_at','updated_by','is_active'],
    documents: ['document_id','document_code','document_name','document_type','related_module','related_id','file_url','expire_date','remark','created_at','created_by','updated_at','updated_by','is_active'],
    audit_logs: ['log_id','module_name','action','record_id','old_value','new_value','performed_by','performed_at','ip_address','remark']
  };

  Object.keys(schemas).forEach(function(sheetName) {
    let sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    sheet.clear();
    sheet.getRange(1, 1, 1, schemas[sheetName].length).setValues([schemas[sheetName]]);
    sheet.setFrozenRows(1);
  });

  return 'Database initialized successfully';
}
