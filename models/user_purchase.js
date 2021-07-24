import DB from "../util/db";

const UserPurchase = DB.sequelize.define("user_purchase", {
  item_code: {
    type: DB.Sequelize.STRING,
    primaryKey: true,
    comment: "ไอเทมโค้ด",
  },
  item_sell_id: {
    type: DB.Sequelize.INTEGER,
    allowNull: true,
    comment: "รหัสการขายไอเทม",
  },
  item_bundle_id: {
    type: DB.Sequelize.INTEGER,
    allowNull: true,
    comment: "รหัสการขายไอเทม Bundle",
  },
  user_id: {
    type: DB.Sequelize.STRING,
    allowNull: false,
    comment: "id ผู้ใช้งาน",
  },
  amount: {
    type: DB.Sequelize.INTEGER,
    allowNull: false,
    comment: "จำนวนการซื้อ",
  },
});

export default UserPurchase;
