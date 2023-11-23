export async function seed(knex) {
  await knex('users').insert([
    {
      email: 'grendel@trolllifestyle.co.uk',
      first_name: 'Grendel',
      last_name: 'Troll',
      auth0_id: '1',
    },
    {
      email: 'dunker@trolllifestyle.ie',
      first_name: 'Dunker',
      last_name: 'O`Brien',
      auth0_id: '2',
    },
    {
      email: 'ymer@trollcombat.no',
      first_name: 'Aurgelmir',
      last_name: 'Johnson',
      auth0_id: '3',
    },
  ])
}
