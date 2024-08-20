import { DataTypes } from 'sequelize';
import sequelize from '../db/database.js';


const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username:{
      type:DataTypes.STRING,
      allowNull:false

    }, 
    email:{
      type:DataTypes.STRING,
      allowNull:false

    },
    password:{
      type:DataTypes.STRING,
      allowNull:false

    },
  }, {
      sequelize,
      modelName: 'User',
      timestamps: true,
  });
  
  
  
  export default User;
  