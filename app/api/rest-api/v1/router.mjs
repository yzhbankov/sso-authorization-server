import express from 'express';
import controllers from './controllers/index.mjs'

const router = express.Router();

router.get('/users/:id', controllers.users.show);

export default router;