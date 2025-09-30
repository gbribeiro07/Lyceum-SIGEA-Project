const { DataTypes } = require("sequelize");
const sequelize = require("../Config/Db");

const Profiles = sequelize.define(
  "Profiles",
  {
    idProfile: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: { type: DataTypes.INTEGER, allowNull: false },
    nameProfile: { type: DataTypes.STRING, allowNull: false },
    status: {
      type: DataTypes.ENUM("Professor", "Aluno"),
      allowNull: false,
      defaultValue: "Aluno",
    },
    age: { type: DataTypes.INTEGER, allowNull: true },
    avatar: { type: DataTypes.TEXT, allowNull: true },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Profiles",
    freezeTableName: true,
    timestamps: false,
  }
);

const User = require("./User.Model");
Profiles.belongsTo(User, { foreignKey: "idUser" });

module.exports = Profiles;
