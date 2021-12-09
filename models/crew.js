const {sequelize, DataTypes, Model} = require('../db');


class Crew extends Model {

}

Crew.init({
    name: DataTypes.STRING,
    //image: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    role: DataTypes.STRING,
    //awards: DataTypes.STRING,
    film_credits: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false,
}); 



module.exports = {
    Crew
};