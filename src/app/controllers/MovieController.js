import * as Yup from 'yup';
import Movie from '../models/Movie';
import Director from '../models/Director';

class MovieController {
  async store(req, res) {
    if (!req.file) {
      return res.status(400).json({ error: 'Image is required' });
    }

    let errorMessage = '';

    const schema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Minimum value 3'),
      director_id: Yup.number()
        .typeError('Director ID must be a number')
        .positive('Director ID must be positive')
        .integer('Director ID must be an integer')
        .required('Director ID is required'),
    });

    await schema.validate(req.body, { abortEarly: false }).catch(error => {
      [errorMessage] = error.errors;
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: errorMessage });
    }

    const directorExists = await Director.findByPk(
      Number(req.body.director_id),
    );

    if (!directorExists) {
      return res.status(400).json({ error: 'Director does not exist' });
    }

    const movieData = {
      image: req.file.filename,
      name: req.body.name,
      director_id: Number(req.body.director_id),
    };

    await Movie.create(movieData);

    return res.json(movieData);
  }

  async update(req, res) {
    let errorMessage = '';

    const schema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Minimum value 3'),
      director_id: Yup.number()
        .typeError('Director ID must be a number')
        .positive('Director ID must be positive')
        .integer('Director ID must be an integer'),
    });

    await schema.validate(req.body, { abortEarly: false }).catch(error => {
      [errorMessage] = error.errors;
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: errorMessage });
    }

    const { id } = req.params;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(400).json({ error: 'Movie does not exist' });
    }

    const directorExists = await Director.findByPk(
      Number(req.body.director_id),
    );

    if (!directorExists) {
      return res.status(400).json({ error: 'Director does not exist' });
    }

    const movieData = {
      name: req.body.name,
      director_id: Number(req.body.director_id),
    };

    if (req.file) {
      movieData.image = req.file.filename;
    }

    const { name, image } = await movie.update(movieData);

    return res.status(200).json({ id, name, image });
  }

  async index(req, res) {
    const movies = await Movie.findAll({
      attributes: ['id', 'name', 'image', 'url'],
      include: [
        {
          model: Director,
          as: 'director',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(movies);
  }

  async delete(req, res) {
    const { id } = req.params;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(400).json({ error: 'Movie does not exist' });
    }

    await movie.destroy();

    return res.json({ message: 'Movie has been destroyed' });
  }
}

export default new MovieController();
