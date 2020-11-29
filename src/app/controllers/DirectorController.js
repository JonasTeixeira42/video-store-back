import * as Yup from 'yup';
import Director from '../models/Director';

class DirectorController {
  async store(req, res) {
    let errorMessage = '';
    const schema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Minimum value 3'),
    });

    await schema.validate(req.body, { abortEarly: false }).catch(error => {
      [errorMessage] = error.errors;
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: errorMessage });
    }

    const { name } = await Director.create(req.body);

    return res.status(200).json({ name });
  }

  async index(req, res) {
    const directors = await Director.findAll({
      attributes: ['id', 'name'],
    });

    return res.json(directors);
  }
}

export default new DirectorController();
