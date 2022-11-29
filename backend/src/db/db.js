import  Sequelize  from "sequelize"
import dotenv from 'dotenv/config'
import { database, username, password, host, dialect, port} from '../helpers/helper.js'


export const db = new Sequelize('railway', 'postgres', 'iyRattc7ceAL6BKVlXUI', {
    host:'containers-us-west-106.railway.app',
    dialect:'postgres',
    port:6123
  })

