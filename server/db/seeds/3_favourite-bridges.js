export async function seed(knex) {
  await knex('favourite_bridges').insert([
    {
      user_id: 1,
      bridge_id: 14,
    },
    {
      user_id: 1,
      bridge_id: 15,
    },
    {
      user_id: 1,
      bridge_id: 16,
    },
    {
      user_id: 1,
      bridge_id: 17,
    },
    {
      user_id: 2,
      bridge_id: 18,
    },
    {
      user_id: 2,
      bridge_id: 19,
    },
    {
      user_id: 2,
      bridge_id: 20,
    },
    {
      user_id: 2,
      bridge_id: 21,
    },
    {
      user_id: 2,
      bridge_id: 22,
    },
    {
      user_id: 3,
      bridge_id: 23,
    },
    {
      user_id: 3,
      bridge_id: 24,
    },
    {
      user_id: 3,
      bridge_id: 25,
    },
    {
      user_id: 3,
      bridge_id: 26,
    },
  ])
}
