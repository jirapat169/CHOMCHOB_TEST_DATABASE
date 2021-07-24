import DB from "../util/db";

const ItemBundleListModel = DB.sequelize.define(
  "item_bundle_list",
  {
    id: {
      type: DB.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: "รหัสการขายไอเทม",
    },
    item_bundle_id: {
      type: DB.Sequelize.INTEGER,
      allowNull: false,
      comment: "รหัสการขายไอเทม bundle",
    },
    item_id: {
      type: DB.Sequelize.INTEGER,
      allowNull: false,
      comment: "รหัสไอเทม",
    },
    item_amount: {
      type: DB.Sequelize.INTEGER,
      allowNull: false,
      comment: "จำนวนไอเทม",
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["item_bundle_id", "item_id"],
      },
    ],
  }
);

export default ItemBundleListModel;
