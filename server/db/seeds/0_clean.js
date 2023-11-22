export async function seed(knex) {
  await knex('favourite-bridges').del()
  await knex('bridges').del()
  await knex('users').del()
  await knex('toll-collected').del()
}
