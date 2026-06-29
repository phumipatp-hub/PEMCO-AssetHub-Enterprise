# Coding Standard

## Naming

- Files: PascalCase for .gs files
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Sheet names: lowercase snake_case
- Column names: lowercase snake_case

## Rules

- Do not hardcode Spreadsheet ID.
- Use Config.gs only for system configuration.
- UI must not access Sheets directly.
- Services handle business logic.
- SheetService handles Google Sheet access.
