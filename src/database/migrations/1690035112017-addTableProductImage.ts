import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableProductImage1690035112017 implements MigrationInterface {
  name = 'AddTableProductImage1690035112017';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`productImage\` (\`product_id\` int UNSIGNED NOT NULL, \`product_image_url\` varchar(255) NOT NULL, PRIMARY KEY (\`product_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`product\` ADD \`brand\` varchar(255) NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`product\` ADD \`price\` text NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`price\``);
    await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`brand\``);
    await queryRunner.query(`DROP TABLE \`productImage\``);
  }
}
