import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactAddUuid1700332159761 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE contact ADD COLUMN uuid CHAR(36)",
        )
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE contact DROP COLUMN uuid",
        ) 
    }

}
