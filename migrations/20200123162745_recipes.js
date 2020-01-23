
exports.up = async function(knex) {

    await knex.schema.createTable("recipes", tbl => {
        tbl.increments("id")
        tbl.string("recipe_name", 128).notNull()
        tbl.string("recipe_creator", 128).notNull()
        tbl.integer("serving").notNull()
        tbl.string("cuisineType")
    })

    await knex.schema.createTable("ingredients", tbl => {
        tbl.increments("id")
        tbl.string("ingredient_name", 128).notNull()
        tbl.integer("quantity").notNull()
        tbl.string("measurement").notNull()
        tbl.integer("recipe_id").notNull().references("id").inTable("recipes")
    })

    await knex.schema.createTable("instructions", tbl => {
        tbl.increments("id")
        tbl.integer("step").notNull()
        tbl.string("instruction").notNull()
        tbl.integer("recipe_id").notNull().references("id").inTable("recipes")
    })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("instructions")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
