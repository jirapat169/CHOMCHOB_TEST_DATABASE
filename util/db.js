import Sequelize from "sequelize";
import DBConfig from "../config/db.config";

const sequelize = new Sequelize(DBConfig.DB, DBConfig.USER, DBConfig.PASSWORD, {
  host: DBConfig.HOST,
  dialect: DBConfig.dialect,
  pool: {
    max: DBConfig.pool.max,
    min: DBConfig.pool.min,
    acquire: DBConfig.pool.acquire,
    idle: DBConfig.pool.idle,
  },
});

const DB = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

export default DB;
