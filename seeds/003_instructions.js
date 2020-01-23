exports.seed = function(knex) {

  return knex('instructions').insert([
    { 
      step: 1, 
      instruction: "Tear the spaghetti bag", 
      recipe_id: 1 
    },
      { 
      step: 2, 
      instruction: "Measure the spaghetti", 
      recipe_id: 1 
    },
    { 
      step: 3, 
      instruction: "Throw them in the boiling hot water that you haven't even made", 
      recipe_id: 1 
    }  
    ]);
};