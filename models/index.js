const User = require('./User');
const Recipe = require('./Recipe');
const Tag = require('./Tag');
const RecipeTag = require('./RecipeTag');

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Recipe.belongsToMany(Tag, { through: RecipeTag });

Tag.belongsToMany(Recipe, { through: RecipeTag });

module.exports = {
    User,
    Recipe,
    Tag,
    RecipeTag
};
