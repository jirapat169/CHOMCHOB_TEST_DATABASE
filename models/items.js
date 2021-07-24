import DB from "./../util/db";

const ItemsModel = DB.sequelize.define("items", {
  id: {
    type: DB.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "รหัสไอเทม",
  },
  name: {
    type: DB.Sequelize.STRING,
    allowNull: false,
    comment: "ชื่อไอเทม",
  },
  detail: {
    type: DB.Sequelize.STRING,
    allowNull: false,
    comment: "รายละเอียด",
  },
  price: {
    type: DB.Sequelize.INTEGER,
    allowNull: false,
    comment: "ราคา",
  },
});

export default ItemsModel;
