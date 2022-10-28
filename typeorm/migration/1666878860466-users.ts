import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { idColumn } from "../utils/idColumn"
import { varcharColumn } from "../utils/varcharColumn"

export class users1666878860466 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    idColumn('id'),
                   varcharColumn('name', '255', false),
                   varcharColumn('email', '255', false),
                   varcharColumn('password', '255', false),
                ],
            }),
        );
    }


   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("users");
    }
}    
