# CHOMCHOB Backend testing 

This is Part 2 of [ChomCHOB Backend Testing](https://github.com/ChomCHOB/chomchob-backend-testing)

This project using 
- NodeJS ( Support Javascript ES6 )
- Sequelize

---

# ER-Diagram

![ERD](/documentation/ERD.jpg)

---

# Sequelize Models
### Item Model
```js
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
```
  
### Item_sell Model  
```js
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
```
### Item_bundle Model  
```js
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
```

### Item_bundle_list Model  
```js
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
```

### User Model  
```js
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
```

### User_purchases Model  
```js
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
```

### Items_code_used Model  
```js
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
```

# Sequelize Associations
```js
ItemsModel.hasMany(ItemSellModel, { foreignKey: "item_id" });
ItemsModel.hasMany(ItemBundleListModel, { foreignKey: "item_id" });
ItemSellModel.hasMany(UserPurchase, { foreignKey: "item_sell_id" });
ItemBundleModel.hasMany(ItemBundleListModel, { foreignKey: "item_bundle_id" });
ItemBundleModel.hasMany(UserPurchase, { foreignKey: "item_bundle_id" });
UserPurchase.hasOne(ItemCodeUsed, { foreignKey: "item_code" });
UsersModel.hasMany(UserPurchase, { foreignKey: "user_id" });
UsersModel.hasMany(ItemCodeUsed, { foreignKey: "user_id" });
```
  
---

# Data dictionary
![ERD](/documentation/items.PNG)
---
![ERD](/documentation/item_sell.PNG)
---
![ERD](/documentation/item_bundle.PNG)
---
![ERD](/documentation/item_bundle_list.PNG)
---
![ERD](/documentation/user.PNG)
---
![ERD](/documentation/user_purchases.PNG)
---
![ERD](/documentation/items_code_used.PNG)

---

