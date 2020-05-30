import express from 'express';
import controllers from './controllers/index.mjs'

const router = express.Router();


// todo: add context and auth layer set session and check by jwt
router.get('/users', controllers.users.showAll);
router.get('/users/:id', controllers.users.show);
router.post('/users', controllers.users.save);

export default router;