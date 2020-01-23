exports.seed = function(knex) {

  return knex('ingredients').insert([
    { 
      ingredient_name: "Spaghetti", 
      quantity: 3, 
      measurement: "Cup", 
      recipe_id: 1 
    },
      { 
      ingredient_name: "Tomato", 
      quantity: 10, 
      measurement: "Ea", 
      recipe_id: 1 
    },
    { 
      ingredient_name: "Red Wine", 
      quantity: 1, 
      measurement: "Bottle", 
      recipe_id: 1 
    }  
    ]);
};