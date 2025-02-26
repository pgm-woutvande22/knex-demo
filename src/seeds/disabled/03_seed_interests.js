const tableName = "interests";

const seed = async function (knex) {
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { name: "Lock picking" },
    { name: "Geocaching" },
    { name: "Competive dog grooming" },
    { name: "Duck herding" },
    { name: "Extreme ironing" },
    { name: "soap carving" },
  ]);
};

export { seed };
