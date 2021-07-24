import ItemCodeUsed from "./models/itemcode_used";
import ItemsModel from "./models/items";
import ItemBundleModel from "./models/item_bundle";
import ItemBundleListModel from "./models/item_bundle_list";
import ItemSellModel from "./models/item_sell";
import UsersModel from "./models/users";
import UserPurchase from "./models/user_purchase";
import DB from "./util/db";

ItemsModel.hasMany(ItemSellModel, { foreignKey: "item_id" });
ItemsModel.hasMany(ItemBundleListModel, { foreignKey: "item_id" });
ItemSellModel.hasMany(UserPurchase, { foreignKey: "item_sell_id" });
ItemBundleModel.hasMany(ItemBundleListModel, { foreignKey: "item_bundle_id" });
ItemBundleModel.hasMany(UserPurchase, { foreignKey: "item_bundle_id" });
UserPurchase.hasOne(ItemCodeUsed, { foreignKey: "item_code" });
UsersModel.hasMany(UserPurchase, { foreignKey: "user_id" });
UsersModel.hasMany(ItemCodeUsed, { foreignKey: "user_id" });

const db_migration = () => {
  return DB.sequelize.sync({ force: true });
};

db_migration()
  .then((result) => {
    console.log(result);
  })
  .catch((reason) => {
    console.error(reason);
  });
