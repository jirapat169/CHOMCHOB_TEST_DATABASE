import DB from "../util/db";

const ItemSellModel = DB.sequelize.define("item_sell", {
  id: {
    type: DB.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "รหัสการขายไอเทม",
  },
  item_id: {
    type: DB.Sequelize.INTEGER,
    allowNull: false,
    comment: "รหัสไอเทม",
  },
  promotion_name: {
    type: DB.Sequelize.TEXT,
    allowNull: true,
    comment: "ชื่อโปรโมชั่น",
  },
  new_price: {
    type: DB.Sequelize.INTEGER,
    allowNull: true,
    comment: "ราคาใหม่",
  },
  limit_item: {
    type: DB.Sequelize.INTEGER,
    allowNull: true,
    comment: "จำกัดจำนวนที่ขาย",
  },
  user_purchase_limit: {
    type: DB.Sequelize.INTEGER,
    allowNull: true,
    comment: "จำกัดจำนวนการซื้อ / ผู้ใช้งาน",
  },
  start_time: {
    type: DB.Sequelize.DATE,
    allowNull: false,
    comment: "เวลาเปิดขาย",
  },
  end_time: {
    type: DB.Sequelize.DATE,
    allowNull: false,
    comment: "เวลาเลิกขาย",
  },
});

export default ItemSellModel;
