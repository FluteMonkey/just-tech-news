const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our User model
class User extends Model {}

//define table columns and configuration
User.init(
    {
        //define an id column
        id: {
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unque: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTION GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration
        
        //pass in our imported sequelize connection (the direct connection to our database)
        sequelize,

    //dont auto create createdAT/updateAT timestamp fields
    timestamps: false,
    //don't pluralize name of table
    freezeTableName: true,
    //use underscores instead of camel-casing
    underscored: true,
    //make model name stay lowercase in database
    modelName: 'user'
    }
);

module.exports = User;