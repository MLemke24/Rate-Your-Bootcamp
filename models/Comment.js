const { Model, DataTypes } = require('sequelize');
const { validate } = require('../config/connection');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        // THESE ARE THE COLUMNS
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username'
            }
        },
        post_id: {
            type: DataTypes.INTEGER, 
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;