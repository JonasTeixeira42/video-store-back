import Sequelize, { Model } from 'sequelize';

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:8080/files/${this.image}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Director, {
      foreignKey: 'director_id',
      as: 'director'
    });
  }
}

export default Movie;
