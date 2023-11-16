export async function seed(knex) {
  await knex('bridges').del()
}
