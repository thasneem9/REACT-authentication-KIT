
import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { fileURLToPath } from 'url';
import configFile from '../config/config.json' assert { type: 'json' };
import dotenv from 'dotenv'
dotenv.config()
// Get the current file name and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up environment and configuration
const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

// Initialize Sequelize instance
const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const db = {};

// Read and load models
fs.readdirSync(__dirname)
  .filter(file => (
    file.indexOf('.') !== 0 &&
    file !== path.basename(__filename) &&
    file.slice(-3) === '.js' &&
    !file.includes('.test.js')
  ))
  .forEach(file => {
    const model = import(path.join(__dirname, file)).then(module => module.default(sequelize, Sequelize.DataTypes));
    model.then(m => db[m.name] = m);
  });

// Set up model associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
