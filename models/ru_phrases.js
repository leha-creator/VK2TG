'use strict';
import {Model} from "sequelize";

module.exports = (sequelize, DataTypes) => {
    class ru_phrases extends Model {
        static associate(models) {
        }
    }

    ru_phrases.init({
        phrase: DataTypes.STRING,
        command: {
            type: Sequelize.STRING,
            unique: true
        },
    }, {
        sequelize,
        modelName: 'ru_phrases',
    });
    return ru_phrases;
};