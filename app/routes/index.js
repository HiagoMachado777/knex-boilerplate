import express from 'express';
import exampleRoutes from './example';

const router = express.Router();

router.use('/example', exampleRoutes);

export default router;
