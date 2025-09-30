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
    idProfile: { type: DataTypes.INTEGER, allowNull: false },
    nameClassroom: { type: DataTypes.STRING, allowNull: false },
    date_at_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Classrooms",
    freezeTableName: true,
    timestamps: false,
  }
);

const User = require("./User.Model");
Classrooms.belongsTo(User, { foreignKey: "idUser" });

const Profiles = require("./Profiles.Model");
Classrooms.belongsTo(Profiles, { foreignKey: "idProfile" });

module.exports = Classrooms;
