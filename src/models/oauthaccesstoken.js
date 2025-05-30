'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OauthAccessToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OauthAccessToken.belongsTo(models.User)
      OauthAccessToken.belongsTo(models.OauthClient)
    }
  }
  OauthAccessToken.init({
    user_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    token: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: DataTypes.STRING,
    scopes: DataTypes.STRING,
    revoked: {
      type: DataTypes.INTEGER,
      defaultValue: false,
      allowNull: false,
    },
    expires: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'OauthAccessToken',
    underscored: true,
  });
  return OauthAccessToken;
};
