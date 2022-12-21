const sequelize = require('../config/connection');
const { User, Recipe, Tag, RecipeTag, Comment } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const tagData = require('./tagData.json');
const recipeTagData = require('./recipeTagData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData /*, {
  //   individualHooks: true,
  //   returning: true,
  // }*/);

  // for (const recipe of recipeData) {
  //   await Recipe.create({
  //     ...recipe,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
    // });
  // }

  await User.bulkCreate(userData);
  await Recipe.bulkCreate(recipeData);
  await Tag.bulkCreate(tagData);
  await RecipeTag.bulkCreate(recipeTagData);
  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
