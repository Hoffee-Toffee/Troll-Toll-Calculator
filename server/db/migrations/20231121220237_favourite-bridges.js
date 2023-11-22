export async function up(knex) {
  await knex.schema.createTable('favourite-bridges', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('bridge_id').references('bridges.id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('favourite-bridges')
}
