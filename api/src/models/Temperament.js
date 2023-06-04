const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Temperament = sequelize.define(
    "temperament",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    { timestamps: false }
  );

  return Temperament;
};
