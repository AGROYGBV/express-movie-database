const {sequelize, DataTypes, Model} = require('../db');


class Movie extends Model {

}

Movie.init({
    title: DataTypes.STRING,
    //image: DataTypes.STRING,
    year: DataTypes.INTEGER,
    rated: DataTypes.STRING,
    length_inMinutes: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    genre: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
}); 



module.exports = {
    Movie
};