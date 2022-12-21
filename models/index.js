const User = require('./User');
const Recipe = require('./Recipe');

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Recipe,
};
