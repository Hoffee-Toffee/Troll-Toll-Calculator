export async function up(knex) {
  await knex.schema.createTable('favourite_bridges', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('bridge_id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('favourite_bridges')
}
