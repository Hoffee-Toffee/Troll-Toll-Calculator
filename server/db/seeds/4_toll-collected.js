export async function seed(knex) {
  await knex('toll_collected').insert([
    {
      bridge_id: 1,
      timestamp: Date.now(),
      revenue: 100.0,
    },
    {
      bridge_id: 8,
      timestamp: Date.now(),
      revenue: 10.5,
    },
    {
      bridge_id: 13,
      timestamp: Date.now(),
      revenue: 374.53,
    },
  ])
}
