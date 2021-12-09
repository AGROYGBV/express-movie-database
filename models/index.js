const {sequelize, DataTypes, Model} = require('../db')

const { Movie } = require('./movies')
const { Cast } = require('./cast')
const { Crew } = require('./crew')

Cast.belongsTo(Movie);
Movie.hasMany(Cast);

Crew.belongsTo(Movie);
Movie.hasMany(Crew);


module.exports = {Movie, Cast, Crew, sequelize}