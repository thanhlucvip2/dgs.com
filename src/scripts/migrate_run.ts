const { execSync } = require('child_process');
const fs = require("fs");
const path = require("path");

const migrationName = process.argv[2];

if (!migrationName) {
  console.error('Tên migration là bắt buộc!');
  process.exit(1);
}

const pascalToKebabCase = (input) => {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
};

const command = `typeorm migration:create ./src/migrations/${pascalToKebabCase(migrationName)}`;

try {
  execSync(command, { stdio: 'inherit' });
  console.log(`Migration ${migrationName} đã được tạo thành công!`);
} catch (error) {
  console.error('Lỗi khi tạo migration:', error.message);
  process.exit(1);
}
