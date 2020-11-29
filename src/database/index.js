import Sequelize from 'sequelize';

import Director from '../app/models/Director';
import Movie from '../app/models/Movie';

import databaseConfig from '../config/database';

const models = [Director, Movie];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
