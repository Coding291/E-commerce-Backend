const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
//Using inheritance we extends the class Category from model
class Category extends Model {}
//Here we create a model
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //this would be the second column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    //package we used
    sequelize,
    //we wanna use time stamps or not
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
//here we export the file
module.exports = Category;
