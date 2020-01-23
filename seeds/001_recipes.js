
exports.seed = function(knex) {

    return knex('recipes').insert([
      { 
        recipe_name: "Spaghetti and Meatballs", 
        recipe_creator: "Papa", 
        serving: 4, 
        cuisineType: "Italian" },
      { 
        recipe_name: "Scramble Eggs", 
        recipe_creator: "Gordon Ramsay", 
        serving: 1, 
        cuisineType: "Breakfast"},
      { 
        recipe_name: "Cheesecake", 
        recipe_creator: "MB", 
        serving: 10, 
        cuisineType: "Dessert"}
    ]);
};
