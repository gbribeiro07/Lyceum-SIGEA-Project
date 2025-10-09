const { DataTypes } = require("sequelize");
const sequelize = require("../Config/Db");

const Classrooms = sequelize.define(
  "Classrooms",
  {
    idClassroom: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: { type: DataTypes.INTEGER, allowNull: false },
    nameClassroom: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "Classrooms",
    freezeTableName: true,
    timestamps: false,
  }
);

const User = require("./User.Model");
Classrooms.belongsTo(User, { foreignKey: "idUser" });

module.exports = Classrooms;
