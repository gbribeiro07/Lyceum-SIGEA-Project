const { DataTypes } = require("sequelize");
const sequelize = require("../Config/Db");

const ClassroomMembersModel = sequelize.define(
  "ClassroomMembers",
  {
    idClassroom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    idProfile: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    role: {
      type: DataTypes.ENUM("Professor", "Aluno"),
      allowNull: false,
      defaultValue: "Aluno",
    },
  },
  {
    tableName: "ClassroomMembers",
    freezeTableName: true,
    timestamps: false,
  }
);

const Classroom = require("./Classroom.Model");
ClassroomMembersModel.belongsTo(Classroom, { foreignKey: "idClassroom" });

const Profiles = require("./Profiles.Model");
ClassroomMembersModel.belongsTo(Profiles, { foreignKey: "idProfile" });

module.exports = ClassroomMembersModel;
