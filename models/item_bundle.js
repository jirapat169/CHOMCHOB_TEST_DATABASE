import DB from "../util/db";

const ItemBundleModel = DB.sequelize.define("item_bundle", {
  id: {
    type: DB.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "รหัสการขายไอเทม",
  },
  promotion_name: {
    type: DB.Sequelize.TEXT,
    allowNull: true,
    comment: "ชื่อโปรโมชั่น",
  },
  price: {
    type: DB.Sequelize.INTEGER,
    allowNull: true,
    comment: "ราคา",
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

export default ItemBundleModel;
