import DB from "./../util/db";

const ItemCodeUsed = DB.sequelize.define("item_code_used", {
  item_code: {
    type: DB.Sequelize.STRING,
    primaryKey: true,
    comment: "ไอเทมโค้ด",
  },
  user_id: {
    type: DB.Sequelize.STRING,
    allowNull: false,
    comment: "id ผู้ใช้งาน",
  },
});

export default ItemCodeUsed;
