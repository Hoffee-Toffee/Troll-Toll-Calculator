export async function up(knex) {
  await knex.schema.createTable('toll_collected', (table) => {
    table.increments('id').primary()
    table.integer('bridge_id')
    table.datetime('timestamp')
    table.decimal('revenue')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('toll_collected')
}
