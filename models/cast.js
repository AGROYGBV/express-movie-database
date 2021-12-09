const {sequelize, DataTypes, Model} = require('../db');


class Cast extends Model {

}

Cast.init({
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
    Cast
};