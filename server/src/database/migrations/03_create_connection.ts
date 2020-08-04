import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamp("created_at").defaultTo("now()").notNullable(); // knex.raw("CURRENT_TIMESTAMP")
  });
}

export async function down(Knex: Knex) {
  return Knex.schema.dropTable("connections");
}
