export async function up(knex) {
  await knex.schema.createTable('bridges', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('location')
    table.string('type')
    table.integer('year_built')
    table.integer('length_meters')
    table.integer('lanes').nullable()
    table.integer('added_by_user')
    // table.foreign('bridges_id').references('id').inTable('favourite_bridges')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('bridges')
}
