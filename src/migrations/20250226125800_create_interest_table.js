const tableName = "interests";
 
export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
            table.increments("id").primary();
            table.string("name").notNullable().unique();
            table.timestamps(true, true);
    });
}
 
export function down(knex) {
    return knex.schema.dropTable(tableName);
}