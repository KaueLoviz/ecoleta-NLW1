import { Knex } from "knex";

export async function up(knex: Knex) {
    // Criar Tabela
    return knex.schema.createTable("points", table => {
        table.increments("id").primary();
        table.string("image").notNullable();
        table.string("name", 80).notNullable();
        table.string("email", 60).notNullable();
        table.string("whatsapp", 20).notNullable();
        table.decimal("latitude").notNullable();
        table.decimal("longitude").notNullable();
        table.string("city", 40).notNullable();
        table.string("uf", 2).notNullable();
    });
}

export async function down(knex: Knex) {
    // Voltar atrás (Deletar Tabela)
    return knex.schema.dropTable("point");
}