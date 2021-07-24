import DB from "../util/db";

const UsersModel = DB.sequelize.define(
  "users",
  {
    id: {
      type: DB.Sequelize.STRING,
      primaryKey: true,
      comment: "id ผู้ใช้งาน",
    },
    username: {
      type: DB.Sequelize.STRING(50),
      allowNull: false,
      comment: "ชื่อผู้ใช้งาน",
    },
    name: {
      type: DB.Sequelize.STRING,
      allowNull: false,
      comment: "ชื่อ - สกุล",
    },
    personal_id: {
      type: DB.Sequelize.STRING(13),
      allowNull: false,
      comment: "หมายเลขบัตรประชาชน",
    },
    email: {
      type: DB.Sequelize.STRING(50),
      allowNull: false,
      isEmail: true,
      comment: "อีเมล์",
    },
    phone: {
      type: DB.Sequelize.STRING(10),
      allowNull: false,
      comment: "หมายเลขโทรศัพท์",
    },
    password: {
      type: DB.Sequelize.TEXT,
      allowNull: false,
      comment: "รหัสผ่าน",
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["username"],
      },
      {
        unique: true,
        fields: ["personal_id"],
      },
      {
        unique: true,
        fields: ["email"],
      },
      {
        unique: true,
        fields: ["phone"],
      },
    ],
  }
);

export default UsersModel;
