export async function seed(knex) {
  await knex('toll_collected').insert([
    {
      bridge_id: 14,
      timestamp: Date.now(),
      revenue: 100.0,
    },
    {
      bridge_id: 18,
      timestamp: Date.now(),
      revenue: 10.5,
    },
    {
      bridge_id: 23,
      timestamp: Date.now(),
      revenue: 374.53,
    },
  ])
}
