export async function up(knex) {
  await knex.schema.createTable('favourite-bridges', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('bridge_id').references('bridge_id').inTable('bridges')
    // table.foreign('bridge_id').references('id').inTable('bridges')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('favourite-bridges')
}
