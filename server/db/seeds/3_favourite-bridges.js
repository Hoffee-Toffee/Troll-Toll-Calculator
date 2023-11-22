export async function seed(knex) {
  await knex('favourite-bridges').insert([
    {
      user_id: 1,
      bridge_id: 1,
    },
    {
      user_id: 1,
      bridge_id: 2,
    },
    {
      user_id: 1,
      bridge_id: 3,
    },
    {
      user_id: 1,
      bridge_id: 4,
    },
    {
      user_id: 2,
      bridge_id: 5,
    },
    {
      user_id: 2,
      bridge_id: 6,
    },
    {
      user_id: 2,
      bridge_id: 7,
    },
    {
      user_id: 2,
      bridge_id: 8,
    },
    {
      user_id: 2,
      bridge_id: 9,
    },
    {
      user_id: 3,
      bridge_id: 10,
    },
    {
      user_id: 3,
      bridge_id: 11,
    },
    {
      user_id: 3,
      bridge_id: 12,
    },
    {
      user_id: 3,
      bridge_id: 13,
    },
  ])
}
