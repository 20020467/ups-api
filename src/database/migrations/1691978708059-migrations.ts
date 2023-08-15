import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1691978708059 implements MigrationInterface {
  name = 'Migrations1691978708059';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`category\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`category_parent_id\` int UNSIGNED NULL, \`description\` text NULL, \`benefit\` text NULL, \`create_at\` datetime NULL, \`update_at\` datetime NULL, UNIQUE INDEX \`IDX_23c05c292c439d77b0de816b50\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`firm\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`description\` text NULL, \`create_at\` datetime NULL, \`update_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`infoProduct\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`product_id\` int UNSIGNED NOT NULL, \`test\` varchar(255) NULL, \`cong_suat\` text NULL, \`dai_dien_ap\` text NULL, \`tan_so_vao\` text NULL, \`so_pha\` text NULL, \`dien_ap\` text NULL, \`dien_ap_che_do_ac_quy\` text NULL, \`tan_so_ra\` text NULL, \`dang_song\` text NULL, \`thoi_gian_chuyen_mach\` text NULL, \`loai_ac_quy\` text NULL, \`thoi_gian_sac\` text NULL, \`bv_ngan_mach\` text NULL, \`bv_xung\` text NULL, \`canh_bao\` text NULL, \`bv_qua_tai\` text NULL, \`quan_ly_ac_quy\` text NULL, \`cong_USB\` text NULL, \`do_on_hd\` text NULL, \`nhiet_do_hd\` text NULL, \`do_am_hd\` text NULL, \`he_so_cong_suat\` text NULL, \`kich_thuoc\` text NULL, \`trong_luong\` text NULL, \`create_at\` datetime NULL, \`update_at\` datetime NULL, PRIMARY KEY (\`id\`, \`product_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`product\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`category_id\` int UNSIGNED NOT NULL, \`brand\` varchar(255) NULL, \`price\` text NULL, \`name\` text NOT NULL, \`code\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL DEFAULT '1', \`origin\` varchar(255) NULL COMMENT 'xuất xứ', \`wattage\` varchar(255) NULL COMMENT 'cong suat', \`guarantee\` int NULL COMMENT 'thoi han bao hanh (thang)', \`description\` text NULL, \`feature\` text NULL, \`create_at\` datetime NULL, \`update_at\` datetime NULL, UNIQUE INDEX \`IDX_99c39b067cfa73c783f0fc49a6\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`productImage\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`product_id\` int UNSIGNED NOT NULL, \`product_image_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, \`role\` tinyint UNSIGNED NULL, \`refresh_token\` text NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `INSERT INTO \`users\` (id, password, email, role) values(1,  '$2b$10$DyujSsmJ9MSAOye7.bDdSe7W6DZ4.UY6c3HyGFPAO6G4XzJxaCTY6', 'dung@gmail.com', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO \`users\` (id, password, email, role) values(2, '$2b$10$DyujSsmJ9MSAOye7.bDdSe7W6DZ4.UY6c3HyGFPAO6G4XzJxaCTY6', 'nguyen@gmail.com', 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
    await queryRunner.query(`DROP TABLE \`productImage\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_99c39b067cfa73c783f0fc49a6\` ON \`product\``,
    );
    await queryRunner.query(`DROP TABLE \`product\``);
    await queryRunner.query(`DROP TABLE \`infoProduct\``);
    await queryRunner.query(`DROP TABLE \`firm\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_23c05c292c439d77b0de816b50\` ON \`category\``,
    );
    await queryRunner.query(`DROP TABLE \`category\``);
  }
}
