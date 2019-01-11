import express from 'express';

import ExampleController from '../controllers/example';

import exampleModel from '../models/example';

const router = express.Router({ mergeParams: true });

const exampleController = new ExampleController(exampleModel);

//POST
router.post('/',  (req, res) => exampleController.create(req, res) );

//GET
//PUT



export default router;