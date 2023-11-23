export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('email')
    table.string('first_name')
    table.string('last_name')
    table.string('auth0_id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
