exports.up = function(knex) {
  return knex.schema.createTable("notes", (table) => {
    table.increments("id");
    table.string("title", 255);
    table.text("text");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("notes");
};
