import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnCategoryParent1689819732256
  implements MigrationInterface
{
  name = 'AddColumnCategoryParent1689819732256';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`category\` ADD \`category_parent_id\` int UNSIGNED NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`category\` ADD \`name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`category\` ADD UNIQUE INDEX \`IDX_23c05c292c439d77b0de816b50\` (\`name\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`category\` DROP INDEX \`IDX_23c05c292c439d77b0de816b50\``,
    );
    await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`category\` ADD \`name\` text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`category\` DROP COLUMN \`category_parent_id\``,
    );
  }
}
