const User = require('./User');
const Recipe = require('./Recipe');
const Tag = require('./Tag');
const RecipeTag = require('./RecipeTag');
const Comment = require('./Comment');

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Recipe.belongsToMany(Tag, { through: RecipeTag });

Tag.belongsToMany(Recipe, { through: RecipeTag });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Recipe,
    Tag,
    RecipeTag,
    Comment
};
